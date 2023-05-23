import { Divider,Row,Col,Form, Button } from '@douyinfe/semi-ui'
import React, { useState } from 'react'
import { IconHistogram,IconCheckList } from '@douyinfe/semi-icons';
import "../../static/css/filterPage.css"
import TableComponents from '../../components/TableComponents';


const treeData = [
    {
        label: '桌面端',
        value: 'desktop',
        key: 'desktop',
        children: [
            {
                label: 'CPU',
                value: 'CPU',
                key: 'CPU',
                children:[
                  {
                    label: 'R23',
                    value: 'R23',
                    key: 'R23',
                  },
                  {
                    label: 'R20',
                    value: 'R20',
                    key: 'R20',
                  },
                  {
                    label: 'R15',
                    value: 'R15',
                    key: 'R15',
                  },
                ]
            },
            {
              label: 'GPU',
              value: 'GPU',
              key: 'GPU',
              children:[
                {
                  label: 'TimeSpy',
                  value: 'TimeSpy',
                  key: 'TimeSpy',
                },
                {
                  label: 'FireStrike',
                  value: 'FireStrike',
                  key: 'FireStrike',
                },
                {
                  label: 'PassMark',
                  value: 'PassMark',
                  key: 'PassMark',
                },
              ]
          },
        ],
    },
    {
        label: '移动端',
        value: 'mobile',
        key: 'mobile',
        children: [
          {
              label: 'android',
              value: 'android',
              key: 'android',
              children:[
                {
                  label: 'GB6',
                  value: 'GB6',
                  key: 'GB6',
                },
              ]
          },
          {
            label: 'ios',
            value: 'ios',
            key: 'ios',
          },
          {
            label: '综合',
            value: 'mobile_avg',
            key: 'mobile_avg',
          },
      ],
    }
];


const pngIntel="https://ts1.cn.mm.bing.net/th/id/R-C.90ccbb626f2f4f9522d6b8028a62275b?rik=rh5Kuv6Wq7TcFw&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f00%2f97%2f65%2f0156f3261dba1d2.jpg&ehk=8aJj30dsQ1KSyicUc6vuSz8EK%2b1xKJkUNGVLtxNGKUo%3d&risl=&pid=ImgRaw&r=0";

const pngAmd="https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1"

const data = [
  {
      key: '1',
      name: 'AMD Ryzen Threadripper 3990X',
      nameIconSrc:pngAmd,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '2',
      name: 'AMD Ryzen Threadripper Pro 3995WX',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '3',
      name: 'Intel Xeon Platinum 8280L',
      nameIconSrc: pngIntel,
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
  },
  {
      key: '4',
      name: 'AMD Epyc 7702P',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '5',
      name: 'AMD Ryzen Threadripper 3970X',
      nameIconSrc:pngAmd,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '6',
      name: 'Intel Core i9-13900KS',
      nameIconSrc: pngIntel,
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
  },
  {
      key: '7',
      name: 'AMD Ryzen Threadripper Pro 5965WX',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '8',
      name: 'Intel Core i9-13900KF',
      nameIconSrc: pngAmd,
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
  },
  {
      key: '9',
      name: 'AMD Ryzen 9 7950X',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '10',
      name: 'AMD Ryzen Threadripper 3960X',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '11',
      name: 'Intel Core i9-13900F',
      nameIconSrc: pngIntel,
      size: '34KB',
      owner: 'Zoey Edwards',
      updateTime: '2020-01-26 11:01',
      avatarBg: 'light-blue',
  },
  {
      key: '12',
      name: 'Intel Xeon W-3175X',
      nameIconSrc: pngIntel,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '13',
      name: 'Intel Core i7-13700KF',
      nameIconSrc: pngIntel,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '14',
      name: 'AMD Ryzen 9 7900X',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '15',
      name: 'AMD Ryzen 9 5950X',
      nameIconSrc: pngAmd,
      size: '2M',
      owner: '郝宣',
      updateTime: '2020-01-17 05:31',
      avatarBg: 'red',
  },
  {
      key: '16',
      name: 'Intel Core i9-7980XE',
      nameIconSrc: pngIntel,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '17',
      name: 'Intel Xeon W-3275M',
      nameIconSrc: pngIntel,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
  {
      key: '18',
      name: 'Intel Xeon W-3275',
      nameIconSrc: pngIntel,
      size: '2M',
      owner: '姜鹏志',
      updateTime: '2020-02-02 05:13',
      avatarBg: 'grey',
  },
];




export default function FilterPage() {

  const [mainData,changeMainData]=useState(data);



  return (
    <div className='filterPage'>

        <Divider margin='30px' align='left' className='dividerText'>
            <IconCheckList size='extra-large' color='rgba(var(--semi-blue-5), 1)'/>
            <span className='title'>可筛选信息</span>
        </Divider>


        <div className='filterData'>
            <Form
                wrapperCol={{ span: 18 }}
                labelCol={{ span: 8 }}
                labelPosition='left'
                labelAlign='right'
            >
                <Row>
                    <Col span={12}>
                    <Form.Cascader
                        placeholder="请选择所在地区"
                        treeData={treeData}
                        field='area'
                        label='测试信息类型'
                        style={{ width: 350 }}
                    >
                    </Form.Cascader>
                    </Col>
                    <Col span={12}>
                        <Form.Input field='name' style={{ width: 350 }} label='设备名称' trigger='blur' placeholder='请输入设备'/>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                    <   Form.Input field='name' style={{ width: 350 }} label='单核分数' trigger='blur' placeholder='请输入姓名'/>
                    </Col>
                    <Col span={12}>
                        <Form.Input field='name' style={{ width: 350 }} label='多核分数' trigger='blur' placeholder='请输入姓名'/>
                    </Col>
                </Row>

                <Row>
                    <Col span={12}>
                        <Form.DatePicker field='datepicker' style={{ width: 350 }} 
                        label='设备日期' trigger='blur' initValue={new Date()} />
                    </Col>
                    <Col span={12}>
                        <Form.Input field='name' style={{ width: 350 }} label='多核分数' trigger='blur' placeholder='请输入姓名'/>
                    </Col>
                </Row>
                <Row className='btnGroup'>
                    <Button theme='solid' type='warning' size='large'  className='btn'>重置搜索</Button>
                    <Button theme='solid' type='primary' size='large' className='btn'>立即查询</Button>

                </Row>
            </Form>
        </div>





        <Divider margin='30px' align='left' className='dividerText'>
            <IconHistogram size='extra-large' color='rgba(var(--semi-blue-5), 1)'/>
            <span className='title'>筛选结果表</span>
        </Divider>
        <div className='filterTable'>
          <TableComponents  rowsData={"desktop"} mainData={mainData}/>
        </div>
    </div>
  )
}
