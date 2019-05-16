# boke 前端的一些常用的方法的封装,[文档地址](https://github.com/cuobiezi/boke-useful#boke-%E5%89%8D%E7%AB%AF%E7%9A%84%E4%B8%80%E4%BA%9B%E5%B8%B8%E7%94%A8%E7%9A%84%E6%96%B9%E6%B3%95%E7%9A%84%E5%B0%81%E8%A3%85)；

- [1.安装&使用](#安装使用)
- [2.Api](#Api列表)
  - [2.1 cookie处理](#cookie处理)
  - [2.2 字符串处理](#字符串处理)
  - [2.3 errPass](#errPassdataemptyusePosition)
  - [2.4 jsonErrPass](#jsonerrpassdataitemshopevalueuseposition)



## 安装&使用

- 安装

```js
// npm
npm i boke-useful --save

//yarn
yarn add boke-useful
```

- 使用

```js
import {getCookies} from 'boke-useful'
```

- 非模块项目使用

1. [下载源码](https://github.com/cuobiezi/boke-useful/archive/master.zip);
2. 解压并找到lib目录以及和lib同目录下的index.js,拷贝lib和index.js文件到项目目录（保持lib目录和index.js在同一目录下，可根据需求修改index.js 的文件名）。
3. 在需要使用的地方引入index.js文件；

## Api列表

### cookie处理

|参数   | 说明 | 参数 | 返回值 |
|----  |-----|----|---|----|
|getCookies| 获取cookie| — | Obj|
|setCookie|设置cookie|[name(cookieName),value(cookieValue)<br/>,time(cookieExpires) ]| - |
|delCookie|删除cookie|[name(cookieName)]| - |

### 字符串处理

|参数   | 说明 | 参数 | 返回值 |
|----  |-----|----|---|----|
|query| 把对象转换成get请求query参数|[Object]| string("?id=123&name=demo") |

### errPass(data,empty[,usePosition])

errPass是一个错误通行证，用于解决在页面渲染的时候，因为数据格式不一致导致整个页面报错的问题;*用于逻辑处理一定要加入第三个参数错误定位，方便后期的bug定位和维护*
- data [\<any>](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#Data_types) 元数据
- empty [\<any>](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#Data_types) 期望的元数据的同类型数据的希望返回值（如果data不符和期望返回empty）
- usePosition [\<number>](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)|[\<string>](https://developer.mozilla.org/zh-CN/docs/Glossary/String) 错误定位（调用该函数的当前位置）

```js
import {errPass} from 'boke-useful'

let data = {a:'b'};

data.list.map(() => {

})
// 报错 list为undefined 找不到map方法

errPass(data.list,[]).map(() => {

})
// 通过

let renderText = data.name   // undefined 

let renderText = errPass(data.name,"-")  // -

```

### jsonErrPass(data,items,hopeValue[,usePosition])

jsonErrPass是errPass对多层Json对象的一个补充；
- data [\<object>](https://developer.mozilla.org/zh-CN/docs/Glossary/Object) 元数据
- items [\<string>](https://developer.mozilla.org/zh-CN/docs/Glossary/String) 子元素集合（'item.item.item'）
- hopeValue  [\<any>](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures#Data_types) 期望值
- usePosition [\<number>](https://developer.mozilla.org/zh-CN/docs/Glossary/Number)|[\<string>](https://developer.mozilla.org/zh-CN/docs/Glossary/String) 错误定位（调用该函数的当前位置）

```js
import {jsonErrPass} from 'boke-useful'

let data = {}

let renderText = data.language['zh-CN'] ; // 报错，  language 为 undefined 不能使用language[]

let renderText = jsonErrPass(data,'language.zh-CN','-' ) // 输出 ‘-’

```