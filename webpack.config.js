const path = require('path');

module.exports = {
    entry: "./src/app.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
            loader: "babel-loader", 
            options: {
              presets: ["@babel/preset-env"] 
             }
            }
        }]
    }
};