import urlGenerator from '../type/urlGenerator';
import axios from 'axios';

function downloadFile({ method = 'post', url, data }) {
  if (method === 'get') {
    window.open(urlGenerator(url, data));
  }
  if (method !== 'get') {
    axios[method](url, data, { responseType: 'blob' }).then(res => {
      const fileName = decodeURIComponent(res.headers['content-disposition'].match(/(?<=filename=).*$/g)[0]); // 后端传文件名需encode转义
      const blob = new Blob([res.data], { type: 'application/octet-stream;charset=utf-8' });
      const href = window.URL.createObjectURL(blob); //创建下载的链接
      const a = document.createElement('a');
      a.href = href;
      a.download = fileName; //下载后文件名
      document.body.appendChild(a);
      a.click(); //点击下载
      document.body.removeChild(a); //下载完成移除元素
      window.URL.revokeObjectURL(href); //释放掉blob对象
    });
  }
  // throw new Error(`The 'method' option must be 'get' or 'post'.`);
}
export default downloadFile;
