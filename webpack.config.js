module.exports = {
  entry: "./app/entry.js",
  output: {
    path: __dirname + '/app/',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};
