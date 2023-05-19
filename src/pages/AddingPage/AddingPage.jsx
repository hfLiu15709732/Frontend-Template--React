import React from 'react'
import { Form, Row ,Col, Button, TextArea} from '@douyinfe/semi-ui';
import { IconUpload } from '@douyinfe/semi-icons';
import "../../static/css/adding.css"

export default function AddingPage() {

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


  return (
    <div className='addingPage'>
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
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Input field='name' style={{ width: 350 }} label='设备名称' trigger='blur' placeholder='请输入设备'/>
            </Col>
            <Col span={12}>
              <Form.Input field='name' style={{ width: 350 }} label='设备时间' trigger='blur' placeholder='请输入姓名'/>
            </Col>
          </Row>

          <Row>
            <Col span={12}>
              <Form.Input field='name' style={{ width: 350 }} label='设备链接' trigger='blur' placeholder='请输入姓名'/>
            </Col>
            <Col span={12}>
              <Form.DatePicker field='datepicker' style={{ width: 350 }} 
              label='设备日期' trigger='blur' initValue={new Date()} />
            </Col>
          </Row>


          <Row>
            <Col span={12}>
              <Form.Input field='name' style={{ width: 350 }} label='单核分数' trigger='blur' placeholder='请输入姓名'/>
            </Col>
            <Col span={12}>
              <Form.Input field='name' style={{ width: 350 }} label='多核分数' trigger='blur' placeholder='请输入姓名'/>
            </Col>
          </Row>



          <Row>
            <Col span={12}>
              <Form.Select field="role" label='角色' placeholder='请选择角色:' style={{ width: 350 }}>
                <Form.Select.Option value="operate">运营</Form.Select.Option>
                <Form.Select.Option value="rd">开发</Form.Select.Option>
                <Form.Select.Option value="pm">产品</Form.Select.Option>
                <Form.Select.Option value="ued">设计</Form.Select.Option>
              </Form.Select>
            </Col>
          </Row>
          <Row>
              <Col span={12}>
                  <Form.Upload
                      field='files'
                      label='相关文件'
                      action='//semi.design/api/upload'
                  >
                      <Button icon={<IconUpload />} theme="light">
                          点击上传
                      </Button>
                  </Form.Upload>
              </Col>
              <Col span={12}>
                <Form.TextArea    style={{ width:350, height: 120 }} field='description' label='申请理由（TextArea）' placeholder='请填写申请资源理由'/>
            </Col>
          </Row>

      </Form>
    </div>
  )
}
