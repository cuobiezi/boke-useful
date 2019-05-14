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
function errPass (data,empty){
  if(typeof data !== typeof type || empty === null || typeof data === 'undefined') return empty ;   
  if(isNaN(data)) return empty;
  if(typeof data === 'object'){
    let isArrayOfData = data instanceof Array;
    let isArrayOfEmpty = empty instanceof Array;
    if(isArrayOfData !== isArrayOfEmpty) return empty;
    return data;
  }
}


export {errPass}