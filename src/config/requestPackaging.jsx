/**
 * 网络请求配置
 */
import axios from "axios";

axios.defaults.timeout = 100000;
axios.defaults.baseURL = "http://test.mediastack.cn/";


//基本上都是axios的封装与配置
//但本项目是对axios包装了两层（一层是axios的api，一层是统一处理一级封装函数）；留出更多处理数据的空间，也相对更规范些
//最终是将集中处理的函数默认暴露出去，直接在requestUse的集中请求文件中调用他即可
//没了解可以看axios的中文文档：https://www.axios-http.cn/

/**
 * http 请求的统一拦截器
 */
axios.interceptors.request.use(
  (config) => {
    const tokenJson = localStorage.getItem('token');
    //本项目的用户信息存储到localStorage里面了 也可以用store，因为一般登录后还是会将登录信息存到redux里面一份，但不存到localsStorage的话，当前页面刷新时，redux中的内容会消失。
    const tokenStr=JSON.stringify(tokenJson);
    const {token,openID}=tokenStr;
    if(token&&Date.now()-openID<=3600000*2){
        config.headers.jwt_token = token //请求头加上token信息
    }
    //检验token是否存在，和openID是否过期（这里设的是2天，自己根据自己的项目改时间戳就行）

    return config
  },
  (error) => {
    
    //token没有或者已经过期了;这里做出处理(返回登录页并清除token信息)
    return Promise.reject(error);
  }
);



/**
 * http 响应的拦截器
 */
axios.interceptors.response.use(
  (response) => {
    //相应状态码在2XX以内会触发
    if (response.data.errCode === 2) {
      console.log("过期");
    }
    return response;
  },
  (error) => {
    //响应状态码超出2XX会触发这里，如3XX 4XX 5XX;
    console.log("请求出错：", error);
  }
);



/**
 * 封装get方法
 * @param url  请求url
 * @param params  请求参数
 * @returns {Promise}
 * 
 * 注意 axios--get的参数要么接在url后面，要么包一个对象放后面
 */
export function get(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: params}).then(
        (response) => {
        //landing(url, params, response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(
      (response) => {
        //关闭进度条
        resolve(response.data);
      },
      (err) => {
        reject(err);
      }
    );
  });
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data).then(
      (response) => {
        resolve(response.data);
      },
      (err) => {
        msag(err);
        reject(err);
      }
    );
  });
}

//统一接口处理，返回数据
/**
 * @param fetch 请求类型(get/post/put/patch)
 * @param url   请求路径（相对路径，基准路径在baseUrl已经设过
 * @param data  数据体
 * @returns {Promise}
 */
export default function (fecth, url, param) {
  let _data = "";
  return new Promise((resolve, reject) => {
    switch (fecth) {


      case "get":
        console.log("begin a get request,and url:", url);
        get(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request GET failed.", error);
            reject(error);
          });
        break;


      case "post":
        post(url, param)
          .then(function (response) {
            resolve(response);
          })
          .catch(function (error) {
            console.log("get request POST failed.", error);
            reject(error);
          });
        break;


      default:
        break;
    }
  });
}

//失败信息集中处理（可以在外面封装一个专门集中处理错误的库，本项目不涉及过于复杂的请求错误，就不专门封装一层了
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

/**
 * 查看返回的数据
 * @param url
 * @param params
 * @param data
 */
function landing(url, params, data) {
  if (data.code === -1) {
  }
}

