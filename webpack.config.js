const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env, argv) => {
    const isProduction = env === 'production';
    const cssExtract = new ExtractTextPlugin('styles.css');

    return {
        entry: "./src/app.js",
        output: {
            path: path.join(__dirname, 'public'),
            filename: "bundle.js",
            publicPath: "/"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css/,
                use: cssExtract.extract({
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            }]
        },
        plugins: [
            cssExtract
        ],
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    }
}