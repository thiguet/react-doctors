const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    target: "web",
    mode: "development",
    entry: path.resolve(__dirname, "./src/index.ts"),
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        alias: {
            "#": path.resolve(__dirname, "tests/"),
            "@": path.resolve(__dirname, "src/"),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: "awesome-typescript-loader",
            },
        ],
    },
    output: {
        path: __dirname + "/dist",
        publicPath: "/",
        filename: "bundle.js",
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin(),
        new MiniCssExtractPlugin(),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "./dist"),
        hot: true,
    },
};
