module.exports = {
    entry: './src/index.js',
    output: {
      path: __dirname + '/dist',
      filename: 'index.js',
      library: 'lib-name',    // very important line
      libraryTarget: 'umd',    // very important line
      umdNamedDefine: true,     // very important line
      globalObject: `(typeof self !== 'undefined' ? self : this)`
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        }
      ]
    }
  };