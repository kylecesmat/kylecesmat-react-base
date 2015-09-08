var webpack      = require('webpack');
var path         = require('path');
var npmPath      = path.resolve(__dirname, 'node_modules');
var autoprefixer = require('autoprefixer-core');
var config       = {
    sassOptions  : (
        '?outputStyle=nested&includePaths[]=' + npmPath
    )
};

module.exports = {
    entry : [
      'webpack/hot/dev-server',
      './src/main.js'
    ],

    output: {
    path: path.resolve(__dirname, "/public/static/build/"),
    filename: "main.js",
    publicPath: "static/build/"
    },

    module: {
    preLoaders: [
        {
            test    : /\.jsx?$/,
            loader  : "eslint-loader",
            exclude : [/node_modules/, /public/]
        }
    ],
    loaders: [
        {
            test    : /\.scss$/,
            loader  : 'style!css!postcss!sass' + config.sassOptions,
            include : /scss/
        },
        {
            test   : /\.css$/,
            loader : 'style-loader!css-loader'
        },
        {
            test   : /\.gif$/,
            loader : "url-loader?limit=10000&mimetype=image/gif"
        },
        {
            test   : /\.jpg$/,
            loader : "url-loader?limit=10000&mimetype=image/jpg"
        },
        {
            test   : /\.png$/,
            loader : "url-loader?limit=10000&mimetype=image/png"
        },
        {
            test: /\.svg/,
            loader: "url-loader?limit=26000&mimetype=image/svg+xml"
        },
        {
            test   : /\.(woff|woff2|ttf|eot)/,
            loader : "url-loader?limit=1" },
        {
            test   : /\.jsx?$/,
            loader : "react-hot!babel", exclude: [/node_modules/, /public/]
        },

        {
            test   : /\.json$/,
            loader : "json-loader"
        }
    ]
    },

    resolve    : {
        extensions : ['', '.js', '.jsx', '.css', '.scss'],
        alias      : {
            actions        : path.resolve(__dirname, "/src/actions"),
            api            : path.resolve(__dirname, "/src/api"),
            components     : path.resolve(__dirname, "/src/components"),
            pages          : path.resolve(__dirname, "/src/pages"),
            stores         : path.resolve(__dirname, "/src/stores"),
            EventConstants : path.resolve(__dirname, "/src/EventConstants.js")
        }
    },
    plugins : [
      new webpack.NoErrorsPlugin()
    ],
    postcss : function() {
        return [autoprefixer];
    },
    eslint: {
        configFile: ".eslintrc"
    }
};
