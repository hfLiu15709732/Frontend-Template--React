import { Divider,Row,Col,Form, Button } from '@douyinfe/semi-ui'
import React from 'react'
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





export default function FilterPage() {
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
            <TableComponents/>
        </div>
    </div>
  )
}
