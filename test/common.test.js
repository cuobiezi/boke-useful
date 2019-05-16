/*
 * @Author: Conroy 
 * @Date: 2019-05-14 16:23:10 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-16 15:45:12
 */


import test from 'ava';
import {errPass,jsonErrPass} from '../index';

function macro(t,data){
  t.plan(1);
  var value = errPass(data,[],14);
  t.is(value instanceof Array,true);
}



// test('test errpass null to Array',macro,null);
// test('test errpass obj ',t => {
//   t.plan(2);
//   var value = errPass({a:'2'},{})
//   var arr = errPass('',[]);
//   t.is(arr instanceof Array,true)
//   t.is(value.a , '2');

// })
test('test jsonErrPass',t => {
  t.plan(3);
  var value = jsonErrPass({a:'1'},'a','');
  var value2 = jsonErrPass({a: {b:{"zh-CN": '3'}}},'a.b.zh-CN','');
  var undefinedValue = jsonErrPass({},'a.b.c','9')
  t.is(value,'1');
  t.is(value2,'3');
  t.is(undefinedValue,'9');
})
