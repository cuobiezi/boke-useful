/*
 * @Author: cuobiezi 
 * @Date: 2018-08-30 13:40:02 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2018-08-30 14:50:57
 */

'use strict';

/**
 * 获取 cookies
 *
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getCookies() {
  var _cookies = document.cookie.split('; ');
  var _cookieObj = {};
  for (var i = 0; i < _cookies.length; i++) {
    var _cookie = _cookies[i];
    _cookieObj[_cookie.split('=')[0]] = _cookie.split('=')[1];
  }
  return _cookieObj;
}

exports.getCookies = getCookies;