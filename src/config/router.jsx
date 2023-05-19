import { Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import MainPage from '../pages/MainPage/MainPage'

let routerTab=[
	{
		path:'/login',
		element:<Login/>
	},
    {
		index:true,
		element:<Navigate to="/login"/>
	},//路由重定向到登录界面
	{
		path:"/index",
		element:<MainPage/>,
	}
]


export default routerTab;