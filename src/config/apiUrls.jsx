

// let baseURL={
//     local:"http://localhost:7001/admin/",
//     online:"/api/admin/",
// }

// let ipUrl=baseURL.local;

let servicePath = {

    getArticleList:'/article/home/index',
    
    registerByUserName:'/register/username',

    registerByEmail:'/register/email',

    loginByUserName:'/login/username',

    loginByEmail:'/login/email',

    getTableForCPU_R23:'/login/email',

    getTableForMobile_AVG_CPU:'/table/mobile/avgcpu',

    getTableFilter:'/table/mobile/filter',

    getLineChart:'/chart/linechart',

    getPaiChart:'/chart/paichart',

    getColumnChart:'/table/chart/column',

    getCardData:'/card/data',

}

export default servicePath;