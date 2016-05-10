var path = require('path');


module.exports = {
    entry: "./index",
    context: path.resolve(__dirname, '.'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    externals: {
      jsPDF: "jsPDF"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                loaders: ['react-hot', 'babel?presets[]=react&presets[]=es2015&presets[]=stage-0'],
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
    progress: true,
    resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  },
};
