/*
 * @Author: cuobiezi 
 * @Date: 2019-05-19 09:28:30 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2019-05-19 12:32:06
 */

const path = require('path');
// const webpack = require('webpack');


module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'../lib'),
    filename: 'index.js',
    globalObject: 'this',
    library: 'bokeUseful',
    libraryTarget: 'umd'
  },
  externals:{
    lodash: {
      root: '-',
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash'
    }
  },
  module:{
    rules:[
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options:{
            "presets": [
              ["@babel/env",{
                "targets":{
                  // "exclude": "/node_modules",
                  "ie": "9",
                  "browsers": ["last 2 versions","safari 7"]
                }
              }]
            ]
          }
        }
      }
    ]
  } 
 
}