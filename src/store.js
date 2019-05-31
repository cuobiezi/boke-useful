/*
 * @Author:Leo
 * @Date: 2019-05-29 10:19:50
 * @Last Modified by: Conroy
 * @Last Modified time: 2019-05-31 16:15:46
 * */


/**
 *存储localStorage
 *
 * @param {string} name
 * @param {string} content
 * @returns
 */
function setStore (name, content){
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  localStorage.setItem(name, content)
}



/**
 * 获取localStorage
 *
 * @param {string} name
 * @returns
 */
function getStore(name){
  if (!name) return;
  return localStorage.getItem(name)
};


/**
 * 删除localStorage
 * 
 * @param {string} name
 * @returns
 */
function removeStore (name){
  if (!name) return;
  localStorage.removeItem(name)
};

/**
 *存储sessionStorage
 *
 * @param {string} name
 * @param {string} content
 * @returns
 */
function setSessionStore (name, content) {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  sessionStorage.setItem(name, content)
};

/**
 *获取sessionStorage
 *
 * @param {string} name
 * @returns
 */
function getSessionStore (name){
  if (!name) return;
  return sessionStorage.getItem(name)
};

/**
 *删除sessionStorage
 *
 * @param {string} name
 * @returns
 */
function removeSessionStore (name){
  if (!name) return;
  sessionStorage.removeItem(name)
};


export {setStore,getStore,removeStore,setSessionStore,getSessionStore,removeSessionStore}