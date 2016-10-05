const path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "./index.tsx",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "./bundle.js",
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    
    devServer: {
        inline: true,
        contentBase: './dist',
        host: process.env.IP,
        port: process.env.PORT
    },
  
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ],

        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    externals: {
        "moment": "moment",
        "react": "React",
        "react-dom": "ReactDOM"
    },
};