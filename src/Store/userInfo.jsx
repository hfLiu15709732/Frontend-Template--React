import { create } from 'zustand'//导入zustand的create方法

export const userInfoStore = create((set) => ({
    userInfo:{token:'8F8F63A52E7BC0B2B97B930C2CDE63C4',userName:'hfLiuX',openId:'1686315239433'},
  	modifyInfo: (newObj) => {    
    	set((state) => ({userInfo:newObj}))
  	},
    deleteInfo: () => {    
    	set((state) => ({userInfo:{token:'',userName:'',openId:''}}))
  	},
    
    
}))