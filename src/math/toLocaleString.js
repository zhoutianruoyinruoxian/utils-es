/**
 * @desc 将数字转换为千分制
 */
function toLocaleString(number) {
  return number.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, '$&,');
}

export default toLocaleString;
