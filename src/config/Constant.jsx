
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
    
    

    
}


export default ConstantTab;