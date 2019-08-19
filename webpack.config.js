const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');


const environment = (process.env.NODE_ENV || 'development').trim();

module.exports = {
    entry: './src/index.js',
    mode: environment,
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        overlay: true,
        port: 3003,
        stats: {
            normal: true
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s(c|a)ss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            fiber: require('fibers'),
                            indentedSyntax: true // optional
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ],
        // loaders: [{
        //     test: /\.jsx?$/,
        //     loader: 'babel-loader'
        // }]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 'semantic-ui': path.join(__dirname, "node_modules", "semantic-ui-css", "semantic.js"),
        },
        extensions: [ '.js', '.jsx', '.scss']
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({template: "./src/index.html"}),
    ]
};