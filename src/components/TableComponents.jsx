import React, { useEffect, useMemo, useState } from 'react'
import { Table, Avatar, Button, Toast, Popconfirm, Notification } from '@douyinfe/semi-ui';
import ConstantTab from '../config/Constant';





let columns=[];



export default function TableComponents(props) {



    const onDeleteConfirm = () => {
        Notification.success(ConstantTab.DeleteSuccessNotify)
    };

    const onDeleteCancel = () => {
        Notification.warning(ConstantTab.DeleteCanelNotify)
    };


    if(props.rowsData==="mobile"){
        columns = [
            {
                title: '设备信息',
                dataIndex: 'name',
                render: (text, record, index) => {
                    return (
                        <div>
                            <Avatar size="small" shape="square" src={record.nameIconSrc} style={{ marginRight: 12 }}></Avatar>
                            {text}
                        </div>
                    );
                },
            },
            {
                title: '综合测试',
                dataIndex: 'size',
            },
            {
                title: '更新日期',
                dataIndex: 'updateTime',
            },
            {
                title: '详情',
                dataIndex: 'detail',
                width:"80px",
                render: () => {
                    return <Button theme='solid' type='primary'>详情</Button>;
                },
            },
            {
                title: '修改',
                dataIndex: 'edit',
                width:"80px",
                render: () => {
                    return <Button theme='solid' type='warning'>修改</Button>;
                },
            },
    
            {
                title: '删除',
                dataIndex: 'delete',
                width:"80px",
                render: () => {
                    return  <Popconfirm
                                title="确定是否要删除此设备？"
                                content="此修改将不可逆"
                                onConfirm={onDeleteConfirm}
                                onCancel={onDeleteCancel}
                            >
                                <Button theme='solid' type='danger'>删除</Button>
                            </Popconfirm>;
                },
            },
        ];
    }
    else if(props.rowsData==="desktop"){
        columns = [
            {
                title: '设备信息',
                dataIndex: 'name',
                render: (text, record, index) => {
                    return (
                        <div>
                            <Avatar size="small" shape="square" src={record.nameIconSrc} style={{ marginRight: 12 }}></Avatar>
                            {text}
                        </div>
                    );
                },
            },
            {
                title: '单核测试',
                dataIndex: 'size',
            },
            {
                title: '多核测试',
                dataIndex: 'owner',
            },
            {
                title: '更新日期',
                dataIndex: 'updateTime',
            },
            {
                title: '详情',
                dataIndex: 'detail',
                width:"80px",
                render: () => {
                    return <Button theme='solid' type='primary'>详情</Button>;
                },
            },
            {
                title: '修改',
                dataIndex: 'edit',
                width:"80px",
                render: () => {
                    return <Button theme='solid' type='warning'>修改</Button>;
                },
            },
    
            {
                title: '删除',
                dataIndex: 'delete',
                width:"80px",
                render: () => {
                    return  <Popconfirm
                                title="确定是否要删除此设备？"
                                content="此修改将不可逆"
                                onConfirm={onDeleteConfirm}
                                onCancel={onDeleteCancel}
                            >
                                <Button theme='solid' type='danger'>删除</Button>
                            </Popconfirm>;
                },
            },
        ];
    }

    const rowSelection = {
        getCheckboxProps: record => ({
            disabled: record.name === '设计文档', // Column configuration not to be checked
            name: record.name,
        }),
        onSelect: (record, selected) => {
            console.log(`select row: ${selected}`, record);
        },
        onSelectAll: (selected, selectedRows) => {
            console.log(`select all rows: ${selected}`, selectedRows);
        },
        onChange: (selectedRowKeys, selectedRows) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
    };

    const pagination = useMemo(
        () => ({
            pageSize: 6,
        }),
        []
    );






  return (
    <div className='TableComponents'>
        <Table columns={columns} dataSource={props.mainData} rowSelection={rowSelection} pagination={pagination} />
    </div>
  )
}
