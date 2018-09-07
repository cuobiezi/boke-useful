/*
 * @Author: cuobiezi 
 * @Date: 2018-08-30 13:40:02 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2018-09-07 16:25:51
 */

'use strict';

/**
 * 获取 cookies
 *
 */
function getCookies() {
  let _cookies = document.cookie.split('; ');
  let _cookieObj = {};
  for(let i = 0; i< _cookies.length; i++){
    let _cookie = _cookies[i];
    _cookieObj[_cookie.split('=')[0]] = _cookie.split('=')[1];
  }
  return _cookieObj
}


/**
 *
 *
 * @param {string} name
 * @param {string} value
 * @param {num} time
 */
function setCookie(name,value,time)
{ 
    var strsec = getsec(time); 
    var exp = new Date(); 
    exp.setTime(exp.getTime() + strsec*1); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 


export {getCookies}