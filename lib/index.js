'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _query = require('./query');

Object.defineProperty(exports, 'query', {
  enumerable: true,
  get: function get() {
    return _query.query;
  }
});

var _cookies = require('./cookies');

Object.defineProperty(exports, 'getCookies', {
  enumerable: true,
  get: function get() {
    return _cookies.getCookies;
  }
});