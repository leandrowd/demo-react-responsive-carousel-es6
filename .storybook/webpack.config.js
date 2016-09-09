const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test: /.scss$/,
        loaders: ["style", "css"],
        include: path.resolve(__dirname, '../')
      }
    ]
  }
}