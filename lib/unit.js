'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * @Author: Conroy 
 * @Date: 2019-05-15 11:03:58 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-15 11:06:05
 */

// 单元文件，该文件为本文件夹中的依赖文件，不会暴露到外部

/**
 * 书写错误日志
 * 
 * 
 * @param {string} title                      提示内容
 * @param {number|string} usePosition         错误位置方便定位
 * @param {any} returnValue                   需要传递的值
 * @returns
 */
function errorLog(title, usePosition, returnValue) {
  console.error(title, usePosition || '');
  return returnValue;
}

exports.errorLog = errorLog;