const path = require('node:path');
module.exports = {
  root: __dirname,
  src: path.join(__dirname, 'src'),
  assets: path.join(__dirname, 'src', 'assets'),
  indexHtml: path.join(__dirname, 'index.html')
};
