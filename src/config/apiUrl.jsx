

let baseURL={
    local:"http://localhost:7001/admin/",
    online:"/api/admin/",
}

let ipUrl=baseURL.local;

let servicePath = {
    getTypeInfo:ipUrl + 'getTypeInfo' ,  //  获得文章类别信息
    addArticle:ipUrl + 'addArticle' ,  //  添加文章
    checkLogin:ipUrl + 'checkLogin' ,  //  检查用户名密码是否正确
    updateArticle:ipUrl + 'updateArticle' ,  //  修改文章第api地址
    getArticleList:ipUrl + 'getArticleList' ,  //  文章列表 
    delArticle:ipUrl + 'delArticle/' ,  //  删除文章
    getArticleById:ipUrl + 'getArticleById' ,  //  根据ID获得文章详情
    pullCallBack:ipUrl + 'pullCallBack' ,  //  获取反馈情况信息
    pullComments:ipUrl + 'pullComments' ,  //  获取文章评论区信息
    deleteComments:ipUrl + 'deleteComments' ,  //  删除文章评论区信息
    deleteMessage:ipUrl + 'deleteMessage' ,  //  删除文章反馈信息

}

export default servicePath;