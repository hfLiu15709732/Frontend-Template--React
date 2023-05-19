import React, { useState } from 'react'
import { Input,Card, Button,Typography, SideSheet} from '@douyinfe/semi-ui';
import Icon, { IconUser , IconKey,IconMail,IconVerify,IconUnlock } from '@douyinfe/semi-icons';
import "../../static/css/login.css"

const { Text } = Typography;

export default function Login() {

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");

    const [registerPage,setRegisterPage]=useState(false);
    //页面局部状态管理



    const handleSubmit=()=>{
        console.log(userName);
        console.log(password);
    }

    const registerPageChange=()=>{
        setRegisterPage(!registerPage);
    }



  return (
    <div className='loginPage'>
        <Card 
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
                    onChange={(value)=>{setUserName(value);}}>
                    </Input>
                </div>
                <div className='iptBox'>
                    <Input prefix={<IconKey />} mode="password" showClear placeholder="请输入密码"
                    onChange={(value)=>{setPassword(value)}}>
                    </Input>
                </div>
                <Button theme='solid' size='large' type='primary' style={{ marginRight: 8 }}
                onClick={handleSubmit}>立即登录</Button>
            </div>
        </Card>

        <SideSheet title={<div className='siderTitleLogin'>管理平台注册</div>} visible={registerPage} onCancel={registerPageChange}>
            <div style={{marginTop:20,marginBottom:25,}}>
                <Text link style={{marginBottom:14}}>昵称：</Text>
                <Input prefix={<IconUser />} showClear placeholder="请输入你的昵称"  />
            </div >
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>邮箱：</Text>
                <Input prefix={<IconMail />} showClear placeholder="请输入你的注册邮箱" />
            </div>
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>密码：</Text>
                <Input prefix={<IconUnlock />} showClear placeholder="请输入你的密码" mode='password'/>  
            </div>
            <div style={{marginTop:20,marginBottom:25}}>
                <Text link style={{marginBottom:14}}>确认密码：</Text>
                <Input prefix={<IconVerify />} showClear placeholder="请确认你的密码" mode='password'/> 
            </div>
            <div style={{display:'flex',flexDirection:"row-reverse"}}>
                <Button theme='solid' type='primary' size='large'>现在注册</Button>
            </div>
        </SideSheet>
    </div>
  )
}
