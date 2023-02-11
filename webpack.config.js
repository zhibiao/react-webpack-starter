const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, './dist'),
    },

    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[path][name]__[local]",
                                localIdentContext: path.resolve(__dirname, "src"),
                            }
                        }
                    }],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: "My React App",
            filename: "index.html",
            template: "src/index.html",
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, './public'),
        },
        port: 9000,
        allowedHosts: 'all'
    },
};