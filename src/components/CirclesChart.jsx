import React, { useEffect } from 'react'
import ReactECharts from 'echarts-for-react';
import { getPaiChart } from '../config/requestUse';
 




const mainData=[
  { value: 1048, name: '桌面-CPU' },
  { value: 735, name: '桌面-GPU' },
  { value: 580, name: '移动端-Android' },
  { value: 484, name: '移动端-IOS' },
  { value: 300, name: '移动端比较' }
];

// getPaiChart().then(
//   (res)=>{
//     mainData=res
//   },//成功的回调
//   ()=>{

//   },
// )
//上面注释的代码在有后端的情况下启用即可获得后端来的数据

export default function CircleChart() {




  useEffect(()=>{

  },[])//组件装载前的生命周期钩子，只在组件装载前启用


  const option = {
        tooltip: {
          trigger: 'item'
        },
        toolbox: {
          show: true,
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {}
          }
        },
        legend: {
          orient: 'horizontal',
          bottom:"0px"
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '4%',
          top:"15%",
          containLabel: true
        },
        series: [
          {
            top:"-50px",
            left:"10.5%",

            name: '当前设备类型统计',
            type: 'pie',
            radius: '50%',
            data: mainData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      };



  return (
    <div>
        <ReactECharts option={option} />
    </div>
  )
}
