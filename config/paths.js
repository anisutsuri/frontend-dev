const path = require('path');

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../dist'),
  assets: 'assets/'
};

const PAGES_DIR = `${PATHS.src}/pages`;

module.exports = { PATHS, PAGES_DIR };
