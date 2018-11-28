/*
 * @Author: cuobiezi 
 * @Date: 2018-08-30 13:40:02 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2018-09-08 14:21:53
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
 *设置 cookies
 * 
 * @param {string} name
 * @param {string} value
 * @param {num} time
 */
function setCookie(name,value,time)
{ 
    if(typeof name !== 'string' || typeof value!== 'string' || typeof time !== 'number' ){
      throw new Error('参数类型不对，参数类型分别是string ，string，number');
    }
    var exp = new Date(); 
    exp.setTime(exp.getTime() + time); 
    document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString(); 
} 



/**
 *  删除cookies
 *
 * @param {string} name
 */
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 


export {getCookies,setCookie,delCookie}