import { regUrl } from '../src';
import chai from 'chai';
const { assert } = chai;

const testUrl = (url) => regUrl.test(url);

describe('工具common', function () {
  describe('regExp 测试', function () {
    describe('regExp测试，结果为true', function () {
      it('test url 1 location', function () {
        const url = location.href;
        const result = testUrl(url);
        console.log(url, result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 2', function () {
        const url = 'https://www.baidu.com/?f=4';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 3', function () {
        const url = 'https://www.baidu.com/api';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 4', function () {
        const url = 'www.baidu.com/home/';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 5', function () {
        const url = 'www.baidu.com:3333';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 6', function () {
        const url = 'www.baidu.com:3333/';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 7', function () {
        const url = '127.0.0.1';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 8', function () {
        const url = '127.0.0.1/';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 9', function () {
        const url = '127.0.0.1/api';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 10', function () {
        const url = 'www.baidu.com:3333/api/assert/#method_assert?number=123name=demozn=中文';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
      it('test url 11', function () {
        const url = 'www.baidu.com/api/assert/method_assert?number=123name=demozn=66';
        const result = testUrl(url);
        console.log(result);
        assert.isTrue(result, 'result should be true');
      });
    });
    describe('regExp测试，结果为false', function () {
      it('test url 1', function () {
        const url = '127.0.0.1:3333//';
        const result = testUrl(url);
        console.log(result);
        assert.isFalse(result, 'result should be false');
      });
      it('test url 2', function () {
        const url = '127.0.0.1:33333/home/22/#/';
        const result = testUrl(url);
        console.log(result);
        assert.isFalse(result, 'result should be false');
      });
      it('test url 3', function () {
        const url = 'www.baidu.com:333/api/assert/#method_assert?number=123name=demozn=中文';
        const result = testUrl(url);
        console.log(result);
        assert.isFalse(result, 'result should be false');
      });
    });
  });
});
