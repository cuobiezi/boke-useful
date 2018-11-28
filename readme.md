# boke 前端的一些常用的方法的封装；

## 安装 & 使用

- 安装

```js
// npm
npm i boke-useful --save

//yarn
yarn add boke-useful
```

- 使用

```js
import {getCookies} from 'boke-useful'
```

## cookie处理

|参数   | 说明 | 参数 | 返回值 |
|----  |-----|----|---|----|
|getCookies| 获取cookie| — | Obj|
|setCookie|设置cookie|[name(cookieName),value(cookieValue)<br/>,time(cookieExpires) ]| - |
|delCookie|删除cookie|[name(cookieName)]| - |

## 字符串处理

|参数   | 说明 | 参数 | 返回值 |
|----  |-----|----|---|----|
|query| 把对象转换成get请求query参数|[Object]| string("?id=123&name=demo") |
