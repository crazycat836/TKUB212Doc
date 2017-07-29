const webpack = require('webpack');
const path = require('path');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack');

const plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('css/[name].css'),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new UglifyJSPlugin({
        beautify: false,
        comments: false,
        compress: {
            warnings: false,
            drop_console: true,
            collapse_vars: true,
            reduce_vars: true,
        }
    }),
    new PurifyCSSPlugin({
        // Give paths to parse for rules. These should be absolute!
        paths: glob.sync(path.join(__dirname, 'src/views/*.html')),
        purifyOptions: {
            whitelist: ['pinned', 'pin-top', 'pin-bottom', 'sidenav-overlay','collapsible.','table-of-contents,']
        }
    })
];

const config = module.exports = {
    cache: true,
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.html$/,
            use: "html-loader?-minimize" //避免壓縮HTML
        }, {
            test: /\.(svg|png|gif|jpe?g|JPE?G)$/,
            use: 'url-loader?limit=1&name=imgs/[name].[ext]'
        }]
    },
    resolve: {
        modules: [
            path.join(__dirname, "src")
        ]
    },
    plugins: plugins
};

const pages = Object.keys(getEntry('src/views/*.html'));
pages.forEach(function(pathname) {
    const conf = {
        filename: './' + pathname + '.html', //html output dest
        template: 'src/views/' + pathname + '.html', //html template
    };
    if (pathname in config.entry) {
        //conf.favicon = 'src/imgs/favicon.ico';
        conf.inject = 'body';
        conf.chunks = ['vendors', pathname];
        conf.hash = true;
    }
    config.plugins.push(new HtmlWebpackPlugin(conf));
});

function getEntry(globPath, pathDir) {
    const files = glob.sync(globPath);
    let entries = {},
        entry, dirname, basename, pathname, extname;

    for (let i = 0; i < files.length; i++) {
        entry = files[i];
        dirname = path.dirname(entry);
        extname = path.extname(entry);
        basename = path.basename(entry, extname);
        pathname = path.join(basename);
        pathname = pathDir ? pathname.replace(new RegExp('^' + pathDir), '') : pathname;
        entries[pathname] = ['./' + entry];
    }
    return entries;
}
