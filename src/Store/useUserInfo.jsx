import { create } from 'zustand'//导入zustand的create方法

export const useStuStore = create((set) => ({
    userInfo:{token:'',userName:'',openId:''},

  	modifyInfo: (newObj) => {    
    	set((state) => ({userInfo:newObj}))
  	},
    deleteInfo: () => {    
    	set((state) => ({userInfo:{token:'',userName:'',openId:''}}))
  	},
    
    
}))