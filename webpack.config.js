const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: {
        main: './src/index.tsx',
        search: './src/routes/SearchPage.tsx',
        user: './src/routes/UserPage.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            maxInitialRequests: Infinity,
            minSize: 0
        },
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                use: 'ts-loader'
            },
            {
                test: /\.js(x?)$/,
                include: [__dirname],
                use: 'babel-loader'
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 2000
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            hash: true,
            meta: { 'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no' }
        }),
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        watchContentBase: true,
        inline: true
    }
};
