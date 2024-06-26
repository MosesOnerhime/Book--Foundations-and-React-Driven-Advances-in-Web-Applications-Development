const path = require('path');

module.exports = { 
    entry: './src/chapter10/index.js', 
    mode: 'development', //use 'production' here for more compact builds for production deployments 
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist/chapter10/js') 
    },
    mode: 'development', // Ensure this is set correctly
    devtool: 'inline-source-map', // Use a more appropriate devtool for development 
    module: { 
        rules: [ 
        { 
        test: /\.js$/, 
        exclude: /(node_modules)/, 
        use: { 
            loader: 'babel-loader', 
            options: { 
                presets: ['@babel/preset-env'] 
            }
                } 
            } 
        ] 
    } 
};