
const duringFast=3;
const duringSlow=5;

let ConstantTab={

    DeleteSuccessNotify:{
        title: '删除成功',
        content: '你删除了一条设备信息！该操作不可逆',
        position: 'topRight',
        duration: duringFast,
    },
    DeleteCanelNotify:{
        title: '删除取消',
        position: 'topRight',
        duration: duringFast,
    },
    DeleteServiceErrorNotify:{
        title: '删除失败',
        content: '服务器出错，过段时间在提交，或联系开发人员',
        position: 'topRight',
        duration: duringSlow,
    },
    DeleteUserErrorNotify:{
        title: '删除失败',
        content: '删除不合规或Token过期，请重新删除',
        position: 'topRight',
        duration: duringSlow,
    },
//删除提示常量语言库



    EditSuccessNotify:{
        title: '修改成功',
        content: '你修改了一条设备信息！该操作不可逆',
        position: 'topRight',
        duration: duringFast,
    },
    EditCanelNotify:{
        title: '取消修改',
        position: 'topRight',
        duration: duringFast,
    },
    EditeServiceErrorNotify:{
        title: '修改失败',
        content: '服务器出错，过段时间在提交，或联系开发人员',
        position: 'topRight',
        duration: duringSlow,
    },
    EditUserErrorNotify:{
        title: '修改失败',
        content: '修改不合规或Token过期，请重新修改',
        position: 'topRight',
        duration: duringSlow,
    },

    //修改提示常量语言库


    TokenExpireNotify:{
        title: 'Token过期',
        content: '您当前Token已经过期，请现行登录进入',
        position: 'topRight',
        duration: duringFast,
    },

    
    TokenDisNotify:{
        title: '尚未登录',
        content: '您尚未登录，请现行登录进入',
        position: 'topRight',
        duration: duringFast,
    },
    



    LoginSuccessNotify:{
        title: '登录成功',
        content: '可免密登录48小时',
        position: 'topRight',
        duration: duringFast,
    },

    LoginSuccessFreePWDNotify:{
        title: '免密登录成功',
        content: '可免密登录48小时',
        position: 'topRight',
        duration: duringFast,
    },

    LoginWrongNotify:{
        title: '登录失败',
        content: '密码或账号错误，请重新填写',
        position: 'topRight',
        duration: duringFast,
    },


    RegisterWrongNotify:{
        title: '注册失败',
        content: '服务器错误，请联系管理员后重试',
        position: 'topRight',
        duration: duringFast,
    },

    RegisterRightNotify:{
        title: '注册成功',
        content: '这是一个模板，注册了也没啥用 哈哈哈！',
        position: 'topRight',
        duration: duringFast,
    },




    emailWrongToast:{
        content: '请输入正确的邮箱',
        duration: duringFast,
    },
    pwdWrongToast:{
        content: '密码不符合规定，密码必须是6-18位，包含字母和数字',
        duration: duringFast,
    },
    pwd2WrongToast:{
        content: '密码与之前一次输入不符，请重新输入',
        duration: duringFast,
    },
    userWrongToast:{
        content: '用户名不合规，应该为4-15位的字母或数字',
        duration: duringFast,
    },

    registerDisToast:{
        content: '请先填写完注册信息再注册',
        duration: duringSlow,
    },


    
    

    
}


export default ConstantTab;