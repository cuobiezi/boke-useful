/*
 * @Author: cuobiezi 
 * @Date: 2018-08-30 11:12:34 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2018-08-30 14:50:52
 */

'use strict';

/**
 *把对象转换成 get请求的query字符串
 *
 * @param {get req} _obj
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function query(_obj) {
  var _query = "?";
  for (var key in _obj) {
    if (_obj.hasOwnProperty(key)) {
      var element = _obj[key];
      _query += key + "=" + element + "&";
    }
  }
  return _query.slice(0, -1);
}

exports.query = query;