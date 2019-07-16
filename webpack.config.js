/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

module.exports = (env, argv) => {
    const webpackMode = argv.mode;
    const isDevelopment = webpackMode === 'development';
    const isProduction = webpackMode === 'production';

    return {
        mode: webpackMode,
        entry: './src/index.tsx',
        output: {
            publicPath: '/build/',
            path: path.resolve(__dirname, 'build/'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /(node_modules|bower_components|build)/,
                    loader: ['babel-loader', 'eslint-loader']
                },
                {
                    test: /\.(s?css)$/,
                    loader: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        resolve: {
            extensions: ['*', '.ts', '.tsx', '.js']
        },
        devServer: {
            contentBase: path.join(__dirname, 'public/'),
            port: 3000,
            publicPath: 'http://localhost:3000/build/',
            hotOnly: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    };
};