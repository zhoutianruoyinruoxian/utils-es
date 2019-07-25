import isString from '../type/isString';
import isPlainObject from '../type/isPlainObject';
//数组会有问题
function urlGenator(url = '', params = {}) {
  if (!isString(url)) {
    throw new TypeError(`The 'url' option must be a string.`);
  }
  if (!isPlainObject(params)) {
    throw new TypeError(`The 'params' option must be a object.`);
  }
  let search = '';
  for (let key in params) {
    search += `${key}=${encodeURIComponent(params[key])}`;
  }
  return url + search && '?' + search;
}
export default urlGenator;
