const path = require('path');
module.exports = {
    entry: './src/video-capture.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'video-capture.js'
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }
        ]
    },
};