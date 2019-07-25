/**
 * @desc 自增数组
 */

Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  let num = this.valueOf();
  while (i < num) {
    yield i++;
  }
};

console.log([...5]) // [0, 1, 2, 3, 4]