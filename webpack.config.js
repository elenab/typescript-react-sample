const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.tsx",
    devtool: "eval-source-map",
    resolve:{
        extensions: ['.js', '.ts', '.tsx'],
    },
    module:{
        rules:[{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: {modules: true}}],
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        new MiniCssExtractPlugin(),
    ],
}