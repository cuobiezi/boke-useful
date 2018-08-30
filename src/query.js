/*
 * @Author: cuobiezi 
 * @Date: 2018-08-30 11:12:34 
 * @Last Modified by: cuobiezi
 * @Last Modified time: 2018-08-30 11:52:30
 */


/**
 *把对象转换成 get请求的query字符串
 *
 * @param {get req} _obj
 */
function query(_obj) {
  let _query = "?"
  for (const key in _obj) {
    if (_obj.hasOwnProperty(key)) {
      const element = _obj[key];
      _query += `${key}=${element}&`
    }
  }
  return _query.slice(0,-1);
}

console.log(query({a: 'a',b:'b',c:'c'}));
