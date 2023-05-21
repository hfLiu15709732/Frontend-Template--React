import React from 'react'
import { Card, Avatar, Row, Col, Divider } from '@douyinfe/semi-ui';
import { IconBox,IconExport,IconGallery } from '@douyinfe/semi-icons';
import "../../static/css/settingPage.css"
import LineChart from '../../components/LineChart';
import ColumnChart from '../../components/ColumnChart';
import CircleChart from '../../components/CirclesChart';

const { Meta } = Card;

export default function SettingPage() {
  return (
    <div className='settingPage'>
      <div className='welcomeTitle'>Welcome Back LHF</div>
      <div className='cardGroup'>
      <Row gutter={{ xs: 12, sm: 12, md: 12, lg: 18, xl: 18, xxl: 18 }} >
        <Col  xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className='cardBox'>
          <Card  shadows='hover'  
            bodyStyle={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Meta 
                title="Semi Doc" 
                avatar={
                    <Avatar 
                        alt='Card meta img'
                        size="default"
                        src='https://tse1-mm.cn.bing.net/th/id/OIP-C.fp_l68B10zn31U5SLS72SAAAAA?pid=ImgDet&rs=1'
                    />
                }
                
            />
            222222222
          </Card>
          </div>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
          <div className='cardBox'>
          <Card  shadows='hover'  
            bodyStyle={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Meta 
                title="Semi Doc" 
                avatar={
                    <Avatar 
                        alt='Card meta img'
                        size="default"
                        src='https://ts1.cn.mm.bing.net/th/id/R-C.7f52e5f78f8e82643c77d06f9e3ce15f?rik=UZogmZZpcxt7Bw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fjozef89%2fservices-flat%2f512%2fwebsite-icon.png&ehk=%2bohQI0HF2ZNq4%2bbm4edu%2f%2fcM2jDqj5o99MwwigIvLuk%3d&risl=&pid=ImgRaw&r=0'
                    />
                }
                
            />
            222222222
          </Card>
          </div>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
        <div className='cardBox'>
          <Card  shadows='hover'  
            bodyStyle={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Meta 
                title="Semi Doc" 
                avatar={
                    <Avatar 
                        alt='Card meta img'
                        size="default"
                        src='https://tse3-mm.cn.bing.net/th/id/OIP-C.H1t3ScwgFnBH0yN5yyggAwHaHa?pid=ImgDet&rs=1'
                    />
                }
                
            />
            222222222
          </Card>
          </div>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
        <div className='cardBox'>
          <Card  shadows='hover'  
            bodyStyle={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Meta 
                title="Semi Doc" 
                avatar={
                    <Avatar 
                        alt='Card meta img'
                        size="default"
                        src='https://ekocrm.web.conselio.com/wp-content/uploads/sites/4/2017/08/icon_calendar.png'
                    />
                }
                
            />
            222222222
          </Card>
        </div>
        </Col>
      </Row>

      </div>

      <Divider margin='12px' align='left' className='dividerBox'>
        &nbsp;&nbsp;
        <IconBox size='extra-large'/>
        <span className='dividerTitle'>当月设备总量统计</span>
        &nbsp;&nbsp;
      </Divider>



      <div className='lineChartBox'>
        <LineChart/>
      </div>
      <div className='chartGroup'>
        <Row gutter={{ xs: 12, sm: 12, md: 12, lg: 18, xl: 18, xxl: 18 }} >
          <Col xs={24} sm={24} md={24} lg={16} xl={16} xxl={16}>
            <div className='columnChart'>
              <Divider margin='12px' align='left' className='dividerBox'>
                &nbsp;&nbsp;
                <IconExport  size='extra-large'/>
                <span className='dividerTitle'>设备添加统计</span>
                &nbsp;&nbsp;
              </Divider>
              <div>
                <ColumnChart/>
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={8} xl={8} xxl={8}>
            <div className='circleChart'>
              <Divider margin='12px' align='left' className='dividerBox'>
                &nbsp;&nbsp;
                <IconGallery  size='extra-large'/>
                <span className='dividerTitle'>设备类型统计</span>
                &nbsp;&nbsp;
              </Divider>
              <div>
                <CircleChart/>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    </div>
  )
}
