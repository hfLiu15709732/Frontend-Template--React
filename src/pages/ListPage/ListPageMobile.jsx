import React, { useState }  from 'react'
import { Tabs, TabPane } from '@douyinfe/semi-ui';
import { IconDesktop,IconSignal} from '@douyinfe/semi-icons';
import TableComponents from '../../components/TableComponents';

import "../../static/css/listPageMobile.css"
import { getTableForMobile_AVG_CPU } from '../../config/requestUse';

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
