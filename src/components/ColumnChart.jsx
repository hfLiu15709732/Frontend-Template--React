import React from 'react'
import ReactECharts from 'echarts-for-react';
 


export default function ColumnChart() {

    const option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
        },
        legend: {
            data: ['桌面-CPU', '桌面-GPU', '移动端-Android', '移动端-IOS'],
            orient: 'horizontal',
            bottom:"0px"
        },
        series: [
          {
            name:"桌面-CPU",
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"桌面-GPU",
            data: [120, 200, 50, 40, 230, 210, 230],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"移动端-Android",
            data: [120, 300, 250, 180, 240, 10, 190],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"移动端-IOS",
            data: [100, 100, 150, 20, 10, 210, 130],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
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
