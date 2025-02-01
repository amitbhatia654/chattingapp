const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container
const path = require('path')

module.exports = {
    entry: "./src/index",
    mode: "production",
    devServer: {
        static: path.join(__dirname, 'build'),
        port: 3002,
    },
    output: {
        path: path.resolve(__dirname, "build"), // Ensure output is set
        filename: "bundle.js",
        publicPath: "auto",

    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
            {
                test: /\.css$/,  // Matches any .css files
                use: ["style-loader", "css-loader"],  // Injects styles into the DOM
            },


        ],
    },

    plugins: [
        new ModuleFederationPlugin({
            name: "app2",
            filename: "remoteEntry.js",
            exposes: {
                "./App": "./src/App",
            },
            shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        })
    ],
};