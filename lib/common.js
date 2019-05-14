/*
 * @Author: Conroy 
 * @Date: 2019-05-14 15:22:53 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-14 16:42:11
 */

'use strict';

/**
 * 错误通行证
 * 把不符合期忘的数据，强制转换成期忘的数据类型，解决代码报错
 *
 * @param {any} data                // 元数据
 * @param {string} empty             // 期望的数据
 * @returns
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function errPass(data, empty) {
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== (typeof type === 'undefined' ? 'undefined' : _typeof(type)) || empty === null || typeof data === 'undefined') return empty;
  if (isNaN(data)) return empty;
  if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) === 'object') {
    var isArrayOfData = data instanceof Array;
    var isArrayOfEmpty = empty instanceof Array;
    if (isArrayOfData !== isArrayOfEmpty) return empty;
    return data;
  }
}

exports.errPass = errPass;