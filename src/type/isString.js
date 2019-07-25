import checkType from '../internal/checkType';

function isString(value){
  return typeof value === 'string' || checkType(value) === 'string';
}

export default isString;
