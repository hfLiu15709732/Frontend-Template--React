import React,{useState} from 'react';
import { Layout, Nav, Button, Breadcrumb, Skeleton, Avatar, SideSheet, Modal } from '@douyinfe/semi-ui';
import { IconBell, IconHelpCircle, IconBytedanceLogo, IconHome, IconHistogram, IconLive, IconSetting } from '@douyinfe/semi-icons';
import "../../static/css/mainPage.css"

export default function MainPage() {

  const { Header, Footer, Sider, Content } = Layout;

  const [siderVisible, setSiderVisible] = useState(false);
  const [callBackVisible, setCallBackVisible] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [postMailVisible, setPostMailVisible] = useState(false);
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



  return (
    <>
        <Layout style={{ border: '1px solid var(--semi-color-border)' }} className='mainPageLayout'>
            <Sider style={{ backgroundColor: 'var(--semi-color-bg-1)' }}>
                <Nav
                    defaultSelectedKeys={['/adding']}
                    style={{ maxWidth: 220, height: '100%' }}
                    items={[
                        { itemKey: '/adding', text: '添加设备', icon: <IconHome size="large" /> },
                        { itemKey: '/list', text: '列表信息', icon: <IconHistogram size="large" /> },
                        { itemKey: 'Live', text: '信息筛选', icon: <IconLive size="large" /> },
                        { itemKey: 'Setting', text: '个人设置', icon: <IconSetting size="large" /> },
                    ]}
                    header={{
                        logo: <img src="https://www.electronjs.org/zh/assets/img/logo.svg" />,
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
                                />
                                <Button
                                    theme="borderless"
                                    icon={<IconHelpCircle size="large" />}
                                    style={{
                                        color: 'var(--semi-color-text-2)',
                                        marginRight: '12px',
                                    }}
                                />
                                <Avatar color="orange" size="small">
                                    YJ
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
                        routes={['首页', '下一页', '上一页', '详情页']}
                    />
                    <div
                        style={{
                            borderRadius: '10px',
                            border: '1px solid var(--semi-color-border)',
                            height: '376px',
                            padding: '32px',
                        }}
                    >
                        <Skeleton placeholder={<Skeleton.Paragraph rows={2} />} loading={true}>
                            <p>Hi, Bytedance dance dance.</p>
                            <p>Hi, Bytedance dance dance.</p>
                        </Skeleton>
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
