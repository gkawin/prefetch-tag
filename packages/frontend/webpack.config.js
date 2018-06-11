//@ts-check
const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin")

const prod = process.env.NODE_ENV.trim() === "production"

module.exports = {
    mode: prod ? "production" : "development",
    entry:{
        main: path.resolve(__dirname, 'src', 'index.tsx')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    module: {
        rules: [
            { test: /\.tsx?$/, exclude: /node_modules/, use: { loader: "ts-loader", options: { happyPackMode: true } } }
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