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
                        src='https://demosc.chinaz.net/Files/pic/icons/6403/q1.png'
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
                        src='https://i.52112.com/icon/256/20190506/38524/1836116.png'
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
                        src='https://bpic.588ku.com/element_origin_min_pic/19/04/11/96aafe7b6bf42e3b06b410974b03f86f.jpg'
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
                        src='https://img.51miz.com/Element/00/89/35/78/d1d3c8d1_E893578_d6b37221.png'
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
