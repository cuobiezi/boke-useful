import test from 'ava';
import {query} from '../index';

test('query',t=> {
    const obj = {a:'a',b:'b',c:'c'}
    const _query = query(obj);
    t.is(_query,'?a=a&b=b&c=c');
})