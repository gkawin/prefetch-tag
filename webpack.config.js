//@ts-check

const webpack = require('webpack')
const path = require('path')

const prod = process.env.NODE_ENV.trim() === "production"

module.exports = {
    mode: prod ? "production" : "development",
    entry: path.resolve("index.tsx"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
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
       prod && new webpack.HotModuleReplacementPlugin()
    ].filter(Boolean)
}