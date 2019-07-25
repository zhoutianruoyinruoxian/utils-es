import { urlParse } from '../src';
import chai from 'chai';
const assert = chai.assert;

// test('two plus two is four', () => {
//   const demo = location;
//   const result = urlParse(demo);
//   console.log(result);
// });

describe('工具common', function () {
  describe('urlParse测试', function () {
    it('test location', function () {
      const demo = location;
      const result = urlParse(demo);
      console.log(demo, result);
      assert.deepEqual(result, {}, 'result should be object');
    });
    it('test url', function () {
      const demo = 'https://www.chaijs.com/api/assert/#method_assert?number=123&name=demo&zn=%E5%91%A8%E5%A4%A9';
      const result = urlParse(demo, { toNumber: true });
      console.log(demo, result);
      assert.deepEqual(result, { number: 123, name: 'demo', zn: '%E5%91%A8%E5%A4%A9' }, 'result should be object');
    });
    it('test url number', function () {
      const demo = 'https://www.chaijs.com/api/assert/#method_assert?number=123&name=demo&zn=%E5%91%A8%E5%A4%A9';
      const result = urlParse(demo, { transform: true });
      console.log(demo, result);
      assert.deepEqual(result, { number: '123', name: 'demo', zn: '周天' }, 'result should be object');
    });
    it('test url 3', function () {
      const demo = 'https://www.chaijs.com/api/assert?fff';
      const result = urlParse(demo);
      console.log(demo, result);
      assert.deepEqual(result, {}, 'result should be {}');
    });
    it('test url {}', function () {
      const demo = 'https://www.chaijs.com/api/assert/';
      const result = urlParse(demo);
      console.log(demo, result);
      assert.deepEqual(result, {}, 'result should be {}');
    });
    it('test url {}', function () {
      const demo = 'demo';
      const result = urlParse(demo);
      console.log(demo, result);
      assert.deepEqual(result, {}, 'result should be {}');
    });
    it('test url null', function () {
      const demo = null;
      const result = urlParse(demo);
      console.log(demo, result);
      assert.isNull(result, 'result should be null');
    });
  });
});
