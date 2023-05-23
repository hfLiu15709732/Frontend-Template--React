import React,{useEffect, useState} from 'react';
import { Layout, Nav, Button, Breadcrumb,  Avatar, SideSheet, Modal, Notification } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconCustomize, IconHistogram, IconDesktop, IconSetting ,IconPhoneStroke,IconCommand,IconApps} from '@douyinfe/semi-icons';
import "../../static/css/mainPage.css"
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import ConstantTab from '../../config/Constant';

export default function MainPage() {

  const { Header, Footer, Sider, Content } = Layout;
  const navigating=useNavigate();
  const urlMap=useLocation();
  const urlMapChinese=["","添加设备页面","桌面端设备列表页面","移动端设备列表页面","信息筛选页面","个人中心页面"];
  const urlMapEng=["","adding","listDesktop","listMobile","filter","setting"];

  const [siderVisible, setSiderVisible] = useState(false);
  const [callBackVisible, setCallBackVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [postMailVisible, setPostMailVisible] = useState(false);



  //页面局部状态管理区域


  const siderChange= () => {
      setSiderVisible(!siderVisible);
  };
  const showDialog = () => {
      setCallBackVisible(true);
  };
  const closeDialog=()=>{
      setCallBackVisible(false);
  }


  const showPostMailDialog = () => {
    setPostMailVisible(true);
    };
    const closePostMailDialog=()=>{
        setPostMailVisible(false);
    }



    const showQuestionDialog = () => {
    setQuestionVisible(true);
    };
    const closeQuestionDialog=()=>{
    setQuestionVisible(false);
    }



//组件交互回调函数区域


useEffect(()=>{
    const tokenJson = localStorage.getItem('token');
    if(tokenJson){
        const tokenStr=JSON.parse(tokenJson);
        const {token,openID}=tokenStr;
        if(token&&Date.now()-openID<=3600000*2){
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



const routerChange=(val)=>{
    if(val.itemKey!="list"){
        navigating(`/index/${val.itemKey}`);
    }
}



//业务函数区域



  return (
    <>
        <Layout style={{ border: '1px solid var(--semi-color-border)' }} className='mainPageLayout'>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }} breakpoint={["md"]}>
                <Nav
                    onClick={routerChange}
                    defaultSelectedKeys={[urlMap.pathname.split("/")[2]]}
                    style={{ maxWidth: 220, height: '100%' }}
                    items={[
                        { itemKey: 'adding', text: '添加设备', icon: <IconCustomize  size="large" /> },
                        {
                            text: '设备管理',
                            icon: <IconHistogram  />,
                            itemKey:"list",
                            items: [
                                { itemKey: 'listDesktop', text: '桌面端列表信息', icon: <IconDesktop size="large" /> },
                                , 
                                { itemKey: 'listMobile', text: '移动端列表信息', icon: <IconPhoneStroke size="large" /> },
                            ],
                        },
                        { itemKey: 'filter', text: '信息筛选', icon: <IconCommand size="large" /> },
                        { itemKey: 'setting', text: '个人设置', icon: <IconSetting size="large" /> },
                    ]}
                    header={{
                        logo: <img src="https://project-use-1316646528.cos.ap-nanjing.myqcloud.com/%E5%90%8E%E5%8F%B0%E6%A8%A1%E6%9D%BF%E9%A1%B9%E7%9B%AE%E4%BD%BF%E7%94%A8/%E7%BD%91%E7%AB%99%E9%9D%99%E6%80%81%E8%B5%84%E6%BA%90/%E5%9B%BE%E7%89%87/react-logo.png" />,
                        text: '小程序运营后台',
                    }}
                    footer={{
                        collapseButton: true,
                    }}
                />
            </Sider>
            <Layout>
                <Header style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                    <Nav
                        mode="horizontal"
                        footer={
                            <>
                                <Button
                                    theme="borderless"
                                    icon={<IconBell size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                    onClick={showPostMailDialog}
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconApps size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                    onClick={showQuestionDialog}
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconHelpCircle size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                    onClick={showQuestionDialog}
                                />
                                <Avatar color="orange" size="small" onClick={()=>{ navigating(`/index/setting`)}}>
                                    LHF
                                </Avatar>
                            </>
                        }
                    ></Nav>
                </Header>
                <Content
                    style={{
                        padding: '24px',
                        backgroundColor: 'var(--semi-color-bg-0)',
                    }}
                >
                    <Breadcrumb
                        style={{
                            marginBottom: '24px',
                        }}
                        routes={['首页', urlMapChinese[urlMapEng.indexOf(urlMap.pathname.split("/")[2])]]}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            minHeight: '480px',
                            padding: '32px',
                            paddingTop:"16px",
                        }}
                    >
                        <Outlet/>
                    </div>
                </Content>
                <Footer
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        padding: '20px',
                        color: 'var(--semi-color-text-2)',
                        backgroundColor: 'rgba(var(--semi-grey-0), 1)',
                    }}
                >
                    <span
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <IconBytedanceLogo size="large" style={{ marginRight: '8px' }} />
                        <span>Copyright © 2023 hfLiu.com. All Rights Reserved. </span>
                    </span>
                    <span>
                        <Button style={{ marginRight: '24px' }} theme='solid' type='primary'
                        onClick={siderChange}>平台客服</Button>
                        <Button onClick={showDialog} theme='solid' type='warning'>反馈建议</Button>
                    </span>
                </Footer>
            </Layout>
        </Layout>


        <SideSheet title="滑动侧边栏" visible={siderVisible} onCancel={siderChange}>
        <p>This is the content of a basic sidesheet.</p>
        <p>Here is more content...</p>
        </SideSheet>

        <Modal title="意见反馈" visible={callBackVisible} closeOnEsc={true}
        onCancel={closeDialog} onOk={closeDialog}>
              这里是意见反馈<br />More content...
        </Modal>

        <Modal title="收件箱" visible={postMailVisible} closeOnEsc={true}
        onCancel={closePostMailDialog} onOk={closePostMailDialog}>
              这里是收件箱<br />More content...
        </Modal>


        <Modal title="问题解答" visible={questionVisible} closeOnEsc={true}
        onCancel={closeQuestionDialog} onOk={closeQuestionDialog}>
              这里是问题反馈<br />More content...
        </Modal>
      </>
  )
}
