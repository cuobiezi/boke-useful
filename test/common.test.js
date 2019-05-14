/*
 * @Author: Conroy 
 * @Date: 2019-05-14 16:23:10 
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-14 17:30:52
 */


import test from 'ava';
import {errPass} from '../index';

function macro(t,data){
  t.plan(1);
  var value = errPass(data,[]);
  t.is(value instanceof Array,true);
}

test('test errpass null to Array',macro,null);
