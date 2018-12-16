const path = require('path');

module.exports = {
    entry: path.resolve(__dirname + '/src/v-curr.js'),
    output: {
        path: path.resolve(__dirname + '/dist/'),
        filename: "v-curr.js",
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};