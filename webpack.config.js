const path = require('path');

module.exports = {
    entry: {
        app: path.join(__dirname, 'src', 'index.tsx'),
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build')
    },
    resolve: {
        modules: [
            'node_modules',
            resolvePath('src/')
        ],
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modlues/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.less$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "less-loader",
                        options: {
                            lessOptions: {
                                javascriptEnabled: true
                            }
                        }
                    }
                ]
            }
        ]
    },
}

function resolvePath(relativePath) {
    return path.resolve(__dirname, relativePath);
}