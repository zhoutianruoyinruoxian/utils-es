/**
 * @desc 将url的查询参数转为对象
 * @param {object|string} location|url location对象或者url字符串
 * @param {boolean} toNumber 是否把参数转为数字类型(例：'1' => 1),无法转为数字的不动（默认值false）
 */

function urlParse(location, {
  toNumber = false,
  transform = false,
} = {}) {
  const type = Object.prototype.toString.call(location);
  let query = null;
  if (type === '[object Location]') {
    query = location.search.slice(1);
  } else if (type === '[object String]') {
    const index = location.indexOf('?');
    if (~index) {
      query = location.slice(index + 1);
    } else {
      return {};
    }
  } else {
    return null;
  }
  let params = {};
  if (!query) return params;
  let paramsList = [];
  paramsList = query.split('&');
  paramsList.forEach(item => {
    let [key, value] = item.split('=');
    toNumber && !isNaN(Number(value)) && !isNaN(parseInt(value)) && (value = parseInt(value));
    transform && decodeURIComponent(value);
    params[key] = value;
  });
  return params;
}

export default urlParse;
