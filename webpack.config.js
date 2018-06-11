//@ts-check
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")
const StatsWriterPlugin = require("webpack-stats-plugin").StatsWriterPlugin;

const prod = process.env.NODE_ENV.trim() === "production"

module.exports = {
    devtool: "source-map",
    mode: prod ? "production" : "development",
    entry:{ 
        main: path.resolve("index.tsx"),
        foo: path.resolve("foo.ts"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: "ts-loader" }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "index.html")
        }),
       !prod && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean)
}