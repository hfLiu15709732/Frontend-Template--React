import { Navigate } from 'react-router-dom'
import Login from '../pages/Login/Login'
import MainPage from '../pages/MainPage/MainPage'
import AddingPage from '../pages/AddingPage/AddingPage';
import ListPage from '../pages/ListPage/ListPage';
import ListPageMobile from '../pages/ListPage/ListPageMobile';
import DashBoard from '../pages/DashBoard/DashBoard';
import SettingPage from '../pages/SettingPage/SettingPage';

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
		children:[
			{
				path:"/index/adding",
				element:<AddingPage/>
			},
			{
				path:"/index/listDesktop",
				element:<ListPage/>
			},
			{
				path:"/index/listMobile",
				element:<ListPageMobile/>
			},
			{
				path:"/index/dashboard",
				element:<DashBoard/>
			},
			{
				path:"/index/setting",
				element:<SettingPage/>
			},
			{
				index:true,
				element:<Navigate to="/index/adding"/>
			},
		]
	}
]


export default routerTab;