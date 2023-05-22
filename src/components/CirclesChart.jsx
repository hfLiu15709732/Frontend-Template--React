import React from 'react'
import ReactECharts from 'echarts-for-react';
 


export default function CircleChart() {

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
            data: [
              { value: 1048, name: '桌面-CPU' },
              { value: 735, name: '桌面-GPU' },
              { value: 580, name: '移动端-Android' },
              { value: 484, name: '移动端-IOS' },
              { value: 300, name: '移动端比较' }
            ],
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
