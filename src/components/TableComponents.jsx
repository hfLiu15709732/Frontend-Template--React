import React, { useEffect, useMemo } from 'react'
import { Table, Avatar, Button } from '@douyinfe/semi-ui';
import { IconMore } from '@douyinfe/semi-icons';


export default function TableComponents(props) {



    const columns = [
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
            title: '',
            dataIndex: 'detail',
            width:"80px",
            render: () => {
                return <Button theme='solid' type='primary'>详情</Button>;
            },
        },
        {
            title: '',
            dataIndex: 'edit',
            width:"80px",
            render: () => {
                return <Button theme='solid' type='warning'>修改</Button>;
            },
        },

        {
            title: '',
            dataIndex: 'delete',
            width:"80px",
            render: () => {
                return <Button theme='solid' type='danger'>删除</Button>;
            },
        },
    ];
    const data = [
        {
            key: '1',
            name: 'Semi Design 设计稿.fig',
            nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
            size: '2M',
            owner: '姜鹏志',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'grey',
        },
        {
            key: '2',
            name: 'Semi Design 分享演示文稿',
            nameIconSrc: 'https://ts1.cn.mm.bing.net/th/id/R-C.90ccbb626f2f4f9522d6b8028a62275b?rik=rh5Kuv6Wq7TcFw&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f00%2f97%2f65%2f0156f3261dba1d2.jpg&ehk=8aJj30dsQ1KSyicUc6vuSz8EK%2b1xKJkUNGVLtxNGKUo%3d&risl=&pid=ImgRaw&r=0',
            size: '2M',
            owner: '郝宣',
            updateTime: '2020-01-17 05:31',
            avatarBg: 'red',
        },
        {
            key: '3',
            name: '设计文档',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'Zoey Edwards',
            updateTime: '2020-01-26 11:01',
            avatarBg: 'light-blue',
        },
        {
            key: '4',
            name: 'Semi Pro 设计稿.fig',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
            size: '2M',
            owner: '姜鹏志',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'grey',
        },
        {
            key: '5',
            name: 'Semi Pro 分享演示文稿',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '2M',
            owner: '郝宣',
            updateTime: '2020-01-17 05:31',
            avatarBg: 'red',
        },
        {
            key: '6',
            name: 'Semi Pro 设计文档',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'Zoey Edwards',
            updateTime: '2020-01-26 11:01',
            avatarBg: 'light-blue',
        },
        {
            key: '7',
            name: 'Semi Design 分享演示文稿',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '2M',
            owner: '郝宣',
            updateTime: '2020-01-17 05:31',
            avatarBg: 'red',
        },
        {
            key: '8',
            name: '设计文档',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'Zoey Edwards',
            updateTime: '2020-01-26 11:01',
            avatarBg: 'light-blue',
        },
        {
            key: '9',
            name: 'Semi Pro 设计稿.fig',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/figma-icon.png',
            size: '2M',
            owner: '姜鹏志',
            updateTime: '2020-02-02 05:13',
            avatarBg: 'grey',
        },
        {
            key: '10',
            name: 'Semi Pro 分享演示文稿',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '2M',
            owner: '郝宣',
            updateTime: '2020-01-17 05:31',
            avatarBg: 'red',
        },
        {
            key: '11',
            name: 'Semi Pro 设计文档',
            nameIconSrc: 'https://lf3-static.bytednsdoc.com/obj/eden-cn/ptlz_zlp/ljhwZthlaukjlkulzlp/docs-icon.png',
            size: '34KB',
            owner: 'Zoey Edwards',
            updateTime: '2020-01-26 11:01',
            avatarBg: 'light-blue',
        },
    ];
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






    useEffect(()=>{
        console.log(props.itemKey);
    })




  return (
    <div className='TableComponents'>
        <Table columns={columns} dataSource={data} rowSelection={rowSelection} pagination={pagination} />
    </div>
  )
}
