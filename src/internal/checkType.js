function CheckType(content) {
  const type = Object.prototype.toString.call(content);
  const getType = type.match(/(?<=^\[object\s).+(?=\]$)/g);
  return getType ? getType[0].toLowerCase() : type;
}

export default CheckType;
