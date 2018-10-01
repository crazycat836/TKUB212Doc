const webpack = require('webpack');
const path = require('path');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const plugins = [
    new MiniCssExtractPlugin({
        filename: "[name].css"
    }),
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
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
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: 'common',
        },
        runtimeChunk: {
            name: 'runtime',
        },
        noEmitOnErrors: true,
        minimize:true,
        minimizer: [
            new UglifyJSPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: false, // set to true if you want JS source maps
                    uglifyOptions: {
                        warnings: false,
                        output: {
                            comments: false,
                            beautify: false
                        }
                    }
                }
            ),
            new OptimizeCssAssetsPlugin(),
        ]
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                "css-loader"
            ]
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

pages.forEach(function (pathname) {
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