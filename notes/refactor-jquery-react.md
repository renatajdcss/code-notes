---
title: Refactoring Simple JQuery site to React
tags:
- React
- JavaScript
- Webpack
emoji: 🚧
link: https://michaelwashburnjr.com/2018/01/30/refactoring-jquery-react/
---

## Refactoring JQuery to React

*source: <https://michaelwashburnjr.com/2018/01/30/refactoring-jquery-react/>*
*(updated to work with latest webpack/react/babel modules)*

1. Init npm
   * npm init

2. Create `src` dir and copy(or move) main.js and index.html
3. Setup Webpack
   > webpack 4.x | babel-loader 8.x | babel 7.x
   `npm install -D babel-loader @babel/core @babel/preset-env webpack`
   * For webpack 4 we need to change `loaders` to `rules`
  
`webpack.config.js`

```js
// normalize path
const path = require('path');
// import webpack
const webpack = require('webpack');
// handle copying of index.html file
const HtmlWebpackPlugin = require('html-webpack-plugin');
// build and src dirs location
var BUILD_DIR = path.join(__dirname, 'dist');
var SRC_DIR = path.join(__dirname, 'src');

// these values get made public to anything importing this file
module.exports = {
  // defines the entry point so the bundler knows where to start
  entry: "./src/main.js",
  // designates where the JS bundle is saved
  output: { path: BUILD_DIR, filename: "bundle.js" },
  // tells the webpack-dev-server to serve content from the build directory
  devServer: {
    contentBase: BUILD_DIR,
  },
  // handles compilation of JSX
  module: {
      // loaders changed to rules on latest webpack
    rules: [
      {
        test: /.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["@babel/preset-env", "@babel/react"],
        },
      },
    ],
  },
  // handles the copying of the Index.html file to the build dir
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html",
      template: SRC_DIR + "/index.html",
    }),
  ],
};
```

4. Update `package.json`

```json
  "scripts": {
    ...
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --progress --colors"
  }
```

5. Run `npm run build` and `npm run start` to test
