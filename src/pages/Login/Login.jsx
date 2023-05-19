import React, { useState } from 'react'
import { Input,Card, Button} from '@douyinfe/semi-ui';
import Icon, { IconUser , IconKey } from '@douyinfe/semi-icons';
import "../../static/css/login.css"

export default function Login() {

    const [userName,setUserName]=useState("");
    const [password,setPassword]=useState("");


    const handleSubmit=()=>{
        console.log(userName);
        console.log(password);
    }



  return (
    <div className='loginPage'>
        <Card 
            title={<div className='cardTitle'>小程序管理后台</div>} 
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
    </div>
  )
}
