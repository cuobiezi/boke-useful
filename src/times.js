/*
 * @Author:Leo
 * @Date: 2019-05-29 10:19:50
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-31 16:22:25
 * */


/**
 *时间戳转换
 *
 * @param {number} timestamp    //时间戳
 * @returns
 */
function timestampToTime (timestamp) {
  let date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
  let Y = date.getFullYear() + '-';
  let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
  let D = date.getDate() + ' ';
  let h = date.getHours() + ':';
  let m = date.getMinutes() + ':';
  let s = date.getSeconds();
  return Y + M + D + h + m + s;
}


export {timestampToTime}
