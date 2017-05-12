var webpack = require("webpack");
module.exports = {
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
plugins:[
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery"
})
],

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
