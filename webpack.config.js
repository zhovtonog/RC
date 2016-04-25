module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + '/build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { 
                test: /\.js?$/, 
                loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react'], 
                exclude: /node_modules/ 
            },
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: 'babel?presets[]=es2015&presets[]=react'
            },
            { 
                test: /\.css$/,
                loader: "style!css" 
            }
        ]
    },
};