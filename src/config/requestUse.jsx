import http from "./requestPackaging";//引入axios的封装文件
import { Notification} from '@douyinfe/semi-ui';
import servicePath from "./apiUrls";  //引入请求路径库




/**
 * 获取首页列表
 */
const getArticleList=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getArticleList).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}


const registerByUserName=()=>{
  return new Promise((resolve, reject) => {
    http("post",servicePath.registerByUserName).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

const registerByEmail=()=>{
  return new Promise((resolve, reject) => {
    http("post",servicePath.registerByEmail).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}


const loginByUserName=()=>{
  return new Promise((resolve, reject) => {
    http("post",servicePath.loginByUserName).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}



const loginByEmail=()=>{
  return new Promise((resolve, reject) => {
    http("post",servicePath.loginByEmail).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}



const getTableForCPU_R23=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getTableForCPU_R23).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取表格（关于cpu_r23）的数据


const getTableForMobile_AVG_CPU=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getTableForMobile_AVG_CPU).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取表格（关于移动端cpu平均的数据）的数据

//所有的获取表格数据和上面类似，每一个类型的表格数据写一个函数再暴露出去即可
//已经在表格中的数据不需要考虑分页 排序等问题，semi_ui封装的表格组件已经做好了，配置一下就行
//本项目做了基础的配置，想自定义需求的，暂时就只当pages文件夹里面去改了



const getTableFilter=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getTableFilter).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取表格（指定筛选后的信息）的数据


const getLineChart=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getLineChart).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取折线图的数据



const getPaiChart=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getPaiChart).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取饼状图的数据



const getColumnChart=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getColumnChart).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取柱状图的数据



const getCardData=()=>{
  return new Promise((resolve, reject) => {
    http("get",servicePath.getCardData).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}//获取个人中心卡片数据

export {
   getArticleList,
   getTableForCPU_R23,
   getTableForMobile_AVG_CPU,
   getTableFilter,
   registerByEmail,
   registerByUserName,
   loginByEmail,
   loginByUserName,
   getColumnChart,
   getPaiChart,
   getLineChart,
   getCardData,
}

