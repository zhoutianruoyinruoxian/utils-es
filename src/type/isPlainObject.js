import checktype from '../internal/checktype';

function isObject(value){
  return checktype(value) === 'object';
}

export default isObject;
