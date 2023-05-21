import React from 'react'
import ReactECharts from 'echarts-for-react';
 


export default function CircleChart() {

    const option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          bottom:"0px"
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
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
