import React, { useEffect, useState } from 'react'
import { Input,Card, Button,Typography, SideSheet,Notification, Toast} from '@douyinfe/semi-ui';
import Icon, { IconUser , IconKey,IconMail,IconVerify,IconUnlock } from '@douyinfe/semi-icons';
import "../../static/css/login.css"
import  backgroundPng from "../../static/images/advert_baner.png"
import { useNavigate } from 'react-router-dom';
import ConstantTab from "../../config/Constant"


const { Text } = Typography;

export default function Login() {


    const navigating=useNavigate();



    const [userName,setUserName]=useState("hahaha");
    const [password,setPassword]=useState("123456");


    const [registerName,setRegisterName]=useState("");
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerpassword,setRegisterPassword]=useState("");
    const [registerPwd2,setRegisterPwd2]=useState("");


    const [namePass,setNamePass]=useState(false);

    const [pwdPass,setPwdPass]=useState(false);

    const [pwd2Pass,setPwd2Pass]=useState(false);

    const [emailPass,setEmailPass]=useState(false);


    const [registerPage,setRegisterPage]=useState(false);
    //页面局部状态管理



    useEffect(()=>{
        const tokenJson = localStorage.getItem('token');
        if(tokenJson){
            const tokenStr=JSON.parse(tokenJson);
            const {token,openID}=tokenStr;
            if(token&&Date.now()-openID<=3600000*2){
                Notification.success(ConstantTab.LoginSuccessFreePWDNotify);
                navigating("/index/setting");
            }
            else{
                Notification.error(ConstantTab.TokenExpireNotify)
                navigating("/login");
            }
        }
        else{
            Notification.error(ConstantTab.TokenDisNotify)
            navigating("/login");
        }
    },[])

    const handleSubmit=()=>{
        console.log(userName);
        console.log(password);
        if(userName==="hahaha"&&password==="123456"){
            let openID=new Date().getTime();
            let token="8F8F63A52E7BC0B2B97B930C2CDE63C4";
            let tokenObj={openID,token};
            window.localStorage.setItem("token",JSON.stringify(tokenObj));
            Notification.success(ConstantTab.LoginSuccessNotify)
            navigating("/index/setting");
        }
        else{
            Notification.error(ConstantTab.LoginWrongNotify);
            setPassword("");
            setUserName("");

        }

        //这里实际要发送给服务端做验证的，将上面的去掉，下面调用requestUse里面的方法即可就可以了
        

    }


    const handleRegister=()=>{


        if(namePass==true&&pwdPass==true&&pwd2Pass==true&&emailPass==true){
            Notification.success(ConstantTab.RegisterRightNotify)
        }
        else{
            Toast.error(ConstantTab.registerDisToast)
        }
        //这里实际要发送给服务端做验证的，将上面的去掉，下面调用requestUse里面的方法即可就可以了


    }

    const registerPageChange=()=>{
        setRegisterPage(!registerPage);
    }



    const registerNameBlur=()=>{

        const re = /^[\w\d]{4,15}$/;
        if(re.test(registerName)==true){
            setNamePass(true)
        }
        else{
            Toast.error(ConstantTab.userWrongToast)
            setNamePass(false)
        }
    }

    const registerPwdBlur=()=>{
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,18}$/;
        if(re.test(registerpassword)==true){
            setPwdPass(true)
        }
        else{
            Toast.error(ConstantTab.pwdWrongToast)
            setPwdPass(false)
        }
    }
    const registerPwd2Blur=()=>{
        if(registerPwd2!=registerpassword){
            Toast.error(ConstantTab.pwd2WrongToast)
            setPwd2Pass(false)
        }
        else{
            setPwd2Pass(true)
        }
    }
    const registerEmailBlur=()=>{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(registerEmail)==true){
            setEmailPass(true)
        }
        else{
            Toast.error(ConstantTab.emailWrongToast)
            setEmailPass(false)
        }
    }


    const registerNameChange=(val)=>{
            setRegisterName(val)
    }

    const registerPwdChange=(val)=>{
            setRegisterPassword(val)
    }
    const registerPwd2Change=(val)=>{
            setRegisterPwd2(val)
    }
    const registerEmailChange=(val)=>{
            setRegisterEmail(val)
    }




  return (
    <div className='loginPage' 
    style={{ backgroundImage: `url(${backgroundPng})`,backgroundSize:"100%", }}>
        <Card className='cardBox'
            title={<div className='cardTitle'>小程序管理后台</div>} 
            headerExtraContent={
                <Button className='toRegister' theme='borderless' onClick={registerPageChange}>
                    免费注册
                </Button>
            }
        >
            <div className='mainContent'>
                <div className='iptBox'>
                    <Input prefix={<IconUser />} showClear placeholder="请输入用户名" 
                    value={userName}
                    onChange={(value)=>{setUserName(value);}}>
                    </Input>
                </div>
                <div className='iptBox'>
                    <Input prefix={<IconKey />} mode="password" showClear placeholder="请输入密码"
                    value={password}
                    onChange={(value)=>{setPassword(value)}}>
                    </Input>
                </div>
                <Button theme='solid' size='large' type='primary' style={{ marginRight: 8 }}
                onClick={handleSubmit}>立即登录</Button>
            </div>
        </Card>

        <SideSheet placement='left'
        title={<div className='siderTitleLogin'>管理平台注册</div>} 
        visible={registerPage} onCancel={registerPageChange}>
            <div style={{marginTop:20,marginBottom:25,}}>
                <Text link style={{marginBottom:14}}>昵称：</Text>
                <Input prefix={<IconUser />} showClear placeholder="请输入你的昵称" 
                onBlur={registerNameBlur} onChange={registerNameChange}
                />
            </div >
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>邮箱：</Text>
                <Input prefix={<IconMail />} showClear placeholder="请输入你的注册邮箱" 
                onBlur={registerEmailBlur} onChange={registerEmailChange}
                />
            </div>
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>密码：</Text>
                <Input prefix={<IconUnlock />} showClear placeholder="请输入你的密码" mode='password'
                onBlur={registerPwdBlur} onChange={registerPwdChange}
                />  
            </div>
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>确认密码：</Text>
                <Input prefix={<IconVerify />} showClear placeholder="请确认你的密码" mode='password'
                onBlur={registerPwd2Blur} onChange={registerPwd2Change}
                /> 
            </div>
            <div style={{display:'flex',flexDirection:"row-reverse"}}>
                <Button theme='solid' type='primary' size='large'
                onClick={handleRegister}
                >现在注册</Button>
            </div>
        </SideSheet>
    </div>
  )
}
