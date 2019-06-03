const path = require('path');

module.exports = env => ({
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    optimization: {
        namedChunks: true,

    },
    devtool: env && env.production ? '' : 'eval-source-map',
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'riot-tag-loader',
                    options: {
                        hot: true,
                        type: 'es6'
                    }
                }]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.resolve('dist'),
        index:   'index.html'  
    }
})