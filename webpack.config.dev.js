const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = Object.assign({}, base, {
    mode: 'development',
    entry: {
        example: './example.tsx',
    },
    stats: { children: false },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'example.html'
        })
    ],
})