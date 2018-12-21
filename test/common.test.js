import { urlParse } from '../lib';
// import chai from 'chai';
// const assert = chai.assert;

test('two plus two is four', () => {
  const demo = location;
  const result = urlParse(demo);
  console.log(result);
});

// describe('工具common', function () {
//   describe('urlParse测试', function () {
//     it('test location', function () {
//       const demo = location;
//       const result = urlParse(demo);
//       console.log(result);
//       assert.isObject(result, 'result is an object');
//     });
//     it('test url', function () {
//       const demo = 'https://www.chaijs.com/api/assert/#method_assert?number=123name=demozn=中文';
//       const result = urlParse(demo);
//       console.log(result);
//       assert.isObject(result, 'result is an object');
//     });
//     it('test url number', function () {
//       const demo = 'https://www.chaijs.com/api/assert/#method_assert?number=123name=demozn=中文';
//       const result = urlParse(demo, true);
//       console.log(result);
//       assert.isObject(result, 'result is an object');
//     });
//     it('test url number', function () {
//       const demo = null;
//       const result = urlParse(demo, true);
//       console.log(result);
//       assert.isNull(result, 'result is an object');
//     });
//   });
// });
