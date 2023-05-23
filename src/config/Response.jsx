
function msag(err) {
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          alert(err.response.data.error.details);
          break;
        case 401:
          alert("未授权，请登录");
          break;
  
        case 403:
          alert("拒绝访问");
          break;
  
        case 404:
          alert("请求地址出错");
          break;
  
        case 408:
          alert("请求超时");
          break;
  
        case 500:
          alert("服务器内部错误");
          break;
  
        case 501:
          alert("服务未实现");
          break;
  
        case 502:
          alert("网关错误");
          break;
  
        case 503:
          alert("服务不可用");
          break;
  
        case 504:
          alert("网关超时");
          break;
  
        case 505:
          alert("HTTP版本不受支持");
          break;
        default:
      }
    }
  }

  export default msag;
  