const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const baseConfig = {
    mode: 'development',
    devtool: 'eval-source-map',
    context: __dirname,
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
        extensions: ['.tsx', '.ts', '.js']
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
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                include: [__dirname],
                use: 'babel-loader'
            },
            {
                test: /\.(scss|sass|css)$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { modules: true }
                    },
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                exclude: /node_modules/,
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
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        hot: true,
        watchContentBase: true
    }
};

module.exports = (env, argv) => {
    let config = baseConfig;
    console.log(argv);
    return config;
};
