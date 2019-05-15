/*
 * @Author: Conroy 
 * @Date: 2019-05-14 15:22:53 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-15 12:29:46
 */

'use strict';

import {errorLog} from './unit';

/**
 *错误通行证
 * 把不符合期忘的数据，强制转换成期忘的数据类型，解决代码报错
 *
 *
 * @param {any} data                    元数据
 * @param {string} empty                期望的数据
 * @param {array} itemsName             json对象才有此参数，子元素的名称
 * @param {number|string} usePosition   报错的位置，如果没有则不报错,方便定位
 * @returns {data|emtpy}
 */
function errPass (data,empty,usePosition){
  if(typeof data !== typeof empty || empty === null || typeof data === 'undefined') return usePosition ? errorLog('数据和期望的数据不一致',usePosition,empty) : empty;  
  if(typeof empty === 'number' && isNaN(data)) return usePosition ? errorLog('数据和期望的数据不一致',usePosition,empty) : empty;
  if(typeof data === 'object'){
    let isArrayOfData = data instanceof Array;
    let isArrayOfEmpty = empty instanceof Array;
    if(isArrayOfData !== isArrayOfEmpty) return usePosition ? errorLog('数据和期望的数据不一致',usePosition,empty): empty;
    // return data;
  }
  return data
}



/**
 * json对象多层嵌套出错渲染，主要用于应用与前端渲染的时候后台返回不合理数据时保证前端代码不报错； 
 * 该函数建议在渲染的时候使用，不要在逻辑代码中使用。在逻辑代码中使用该函数将导致数据错误很难定位；
 *
 * @param {object} data                    元数据
 * @param {string} items                   子元素集合
 * @param {any} hopeValue               希望值
 * @returns
 */
function jsonErrPass(data,items,hopeValue){
  var _data = errPass(data,{});
  var _items = items.split('.');
  _items.forEach((item,index) => {
    if(index === _items.length -1){
      _data = errPass(_data[item],hopeValue);
    }else{
      _data = errPass(_data[item],{});
    }
  })
  return _data;
}


export {errPass,jsonErrPass}