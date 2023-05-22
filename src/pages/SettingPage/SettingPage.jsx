import React from 'react'
import { Card, Avatar, Row, Col, Divider } from '@douyinfe/semi-ui';
import { IconBox,IconExport,IconGallery,IconArrowUp,IconArrowDown } from '@douyinfe/semi-icons';
import "../../static/css/settingPage.css"
import LineChart from '../../components/LineChart';
import ColumnChart from '../../components/ColumnChart';
import CircleChart from '../../components/CirclesChart';

const { Meta } = Card;



const tmpData=[
  {title:"测试总数",index:"1237",isPositiove:true,Suffix:"份"},
  {title:"本月访客总量",index:"198",isPositiove:false,Suffix:"次"},
  {title:"本月测试数",index:"145",isPositiove:false,Suffix:"份"},
  {title:"测试频率",index:"3.7",isPositiove:true,Suffix:"份/天"},
]
const iconSrc=[
  "https://tse1-mm.cn.bing.net/th/id/OIP-C.fp_l68B10zn31U5SLS72SAAAAA?pid=ImgDet&rs=1",
  "https://ts1.cn.mm.bing.net/th/id/R-C.7f52e5f78f8e82643c77d06f9e3ce15f?rik=UZogmZZpcxt7Bw&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fjozef89%2fservices-flat%2f512%2fwebsite-icon.png&ehk=%2bohQI0HF2ZNq4%2bbm4edu%2f%2fcM2jDqj5o99MwwigIvLuk%3d&risl=&pid=ImgRaw&r=0",
  "https://tse3-mm.cn.bing.net/th/id/OIP-C.H1t3ScwgFnBH0yN5yyggAwHaHa?pid=ImgDet&rs=1",
  "https://ekocrm.web.conselio.com/wp-content/uploads/sites/4/2017/08/icon_calendar.png",


]

export default function SettingPage() {
  return (
    <div className='settingPage'>
      <div className='welcomeTitle'>Welcome Back &nbsp;&nbsp;LHF</div>
      {/* 这里的姓名应该在store里面或者在localstorage里面 */}
      <div className='cardGroup'>
      <Row gutter={{ xs: 12, sm: 12, md: 12, lg: 18, xl: 18, xxl: 18 }} >

        {tmpData.map((val,index)=>{
          return (
            <Col  xs={24} sm={12} md={12} lg={12} xl={6} xxl={6}>
            <div className='cardBox'>
            <Card  shadows='hover'  
              bodyStyle={{  display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <Meta 
                  title={val.title} 
                  avatar={
                      <Avatar 
                          alt='Card meta img'
                          size="default"
                          src={iconSrc[index]}
                      />
                  }
                  
              />
              <div className='indexBox'>
                <div className='indexData'>{val.index} {val.Suffix}</div>
                <div className='indexIconP' 
                style={{display: val.isPositiove==true ? "block" : "none"}}>
                <IconArrowUp size='extra-large'/>
                </div>
                <div className='indexIconN'
                style={{display: val.isPositiove==false ? "block" : "none"}}>
                <IconArrowDown size='large'/>
                </div>
              </div>
            </Card>
            </div>
          </Col>
          )
        })}
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
