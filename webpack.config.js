var webpack = require('webpack');
var path = require('path');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var debug = process.env.NODE_ENV !== 'production'

var plugins = [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('css/[name].css')
]

if (debug) {
    //DEVELOPMENT
    plugins.push(
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    );
} else {
    // PRODUCTION
    plugins.push(
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            dropDebugger: true,
            dropConsole: true,
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    );
}
var config = module.exports = {

    cache: debug,
    debug: debug,
    devtool: debug ? 'eval' : 'source-map',
    entry: {
        main: './index.js'
    },
    output: {
        filename: 'js/[name].js',
        path: path.join(__dirname, 'build'),
        publicPath: './'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
        }, {
            test: /\.html$/,
            loader: "html?-minimize" //避免壓縮HTML
        }, {
            test: /\.(svg|png|gif|jpe?g|JPE?G)$/,
            loader: 'file?name=imgs/[name].[ext]'
        }]
    },
    plugins: plugins
};


var pages = Object.keys(getEntry('src/views/*.html'));
pages.forEach(function(pathname) {
    var conf = {
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
    var files = glob.sync(globPath);
    var entries = {},
        entry, dirname, basename, pathname, extname;

    for (var i = 0; i < files.length; i++) {
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
