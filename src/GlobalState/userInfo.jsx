import React, { createContext,useState ,useReducer} from "react";



export const userInfoContext = createContext({});
//创建用户信息的全局状态



export const UPDATE_USER_INFO = "UPDATE_USER_INFO"//更新数据列表
export const ADDING_USER_INFO = "ADDING_USER_INFO"//添加数据项
export const DELETE_USER_INFO = "DELETE_USER_INFO"//删除数据项
export const UPLOAD_USER_ITEM = "UPLOAD_USER_ITEM"//更新数据项


const reducer = (state, action) => {
    switch(action.type) {
        case UPDATE_USER_INFO:
          return action.userInfo;
    
        case ADDING_USER_INFO:
          return [action.item,...state];
    
          case DELETE_USER_INFO:
              let id=action.id;
    
              let newList=state.filter((value,index)=>{
                return value.id!=id;
              })
    
              return newList;
    
          case UPLOAD_USER_ITEM:
              let newUserInfo=action.newUserInfo;
    
              state.forEach((val,index)=>{
                if(val.id==newUserInfo.id){
                  state[index]=newUserInfo;
                }
              })
              return state
            
    
        default:
        return state  //state为状态初始值
    }
    }

    


    


export const UserInfo = props => {


    const [userInfo,dispatch]=useReducer(reducer, []);
  
  
  
    return (
      <userInfoContext.Provider value={{userInfo,dispatch}}>
        {props.children}
      </userInfoContext.Provider>
      // 将状态共享给所以子组件
    );
  };
  