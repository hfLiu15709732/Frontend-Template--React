import React, { useState }  from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

import "../../static/css/listPageMobile.css"
import { getTableForMobile_AVG_CPU } from '../../config/requestUse';

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
      {
          key: '12',
          name: 'Semi Design 设计稿.fig',
          nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
          size: '2M',
          owner: '姜鹏志',
          updateTime: '2020-02-02 05:13',
          avatarBg: 'grey',
      },
      {
          key: '13',
          name: 'Semi Design 分享演示文稿',
          nameIconSrc: 'https://ts1.cn.mm.bing.net/th/id/R-C.90ccbb626f2f4f9522d6b8028a62275b?rik=rh5Kuv6Wq7TcFw&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f00%2f97%2f65%2f0156f3261dba1d2.jpg&ehk=8aJj30dsQ1KSyicUc6vuSz8EK%2b1xKJkUNGVLtxNGKUo%3d&risl=&pid=ImgRaw&r=0',
          size: '2M',
          owner: '郝宣',
          updateTime: '2020-01-17 05:31',
          avatarBg: 'red',
      },
      {
          key: '14',
          name: 'Semi Design 设计稿.fig',
          nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
          size: '2M',
          owner: '姜鹏志',
          updateTime: '2020-02-02 05:13',
          avatarBg: 'grey',
      },
      {
          key: '15',
          name: 'Semi Design 分享演示文稿',
          nameIconSrc: 'https://ts1.cn.mm.bing.net/th/id/R-C.90ccbb626f2f4f9522d6b8028a62275b?rik=rh5Kuv6Wq7TcFw&riu=http%3a%2f%2fbpic.588ku.com%2felement_pic%2f00%2f97%2f65%2f0156f3261dba1d2.jpg&ehk=8aJj30dsQ1KSyicUc6vuSz8EK%2b1xKJkUNGVLtxNGKUo%3d&risl=&pid=ImgRaw&r=0',
          size: '2M',
          owner: '郝宣',
          updateTime: '2020-01-17 05:31',
          avatarBg: 'red',
      },
      {
          key: '16',
          name: 'Semi Design 设计稿.fig',
          nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
          size: '2M',
          owner: '姜鹏志',
          updateTime: '2020-02-02 05:13',
          avatarBg: 'grey',
      },
      {
          key: '17',
          name: 'Semi Design 设计稿.fig',
          nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
          size: '2M',
          owner: '姜鹏志',
          updateTime: '2020-02-02 05:13',
          avatarBg: 'grey',
      },
      {
          key: '18',
          name: 'Semi Design 设计稿.fig',
          nameIconSrc: 'https://tse1-mm.cn.bing.net/th/id/OIP-C.13xj1dN1pnqy88QVAXpQGQHaHw?pid=ImgDet&rs=1',
          size: '2M',
          owner: '姜鹏志',
          updateTime: '2020-02-02 05:13',
          avatarBg: 'grey',
      },
    ];
    

export default function ListPage() {

      const [mainData,changeMainData]=useState(data.slice(11,17));


      const handleTabsChange=(val)=>{
            switch (val) {
                  case "6":
                    changeMainData(data.slice(11,17))
                    break;
                  case "7":
                    changeMainData(data.slice(5,17))
                    break;
                  case "8":
                    changeMainData(data.slice(11,16))
                    break;

                  default:
                    break;
                }


            // getTableForMobile_AVG_CPU().then(
            //       (val)=>{
            //             mainData=val.mainData;
            //       },
            //       ()=>{}
            // )
            // 后端有数据之后就把这里开启就可
      }


  return (
    <div className='listPageMobile'>
      <div className='tabBox'>
            <Tabs tabPosition='top' onChange={handleTabsChange}>
                  <TabPane tab={<span><IconSignal />综合GB6（CPU）</span>}itemKey="6"/>
                  <TabPane tab={<span><IconSignal />综合GFX（GPU）</span>}itemKey="7"/>
                  <TabPane tab={<span><IconSignal />综合3DMark</span>}itemKey="8"/>
            </Tabs>
      </div>


      <TableComponents  rowsData={"mobile"} mainData={mainData}/>
    </div>
  )
}
