import React from 'react'
import ReactECharts from 'echarts-for-react';
 





var date = new Date(), y = date.getFullYear(), m = date.getMonth();
let lastDay = new Date(y, m + 1, 0);
lastDay=parseInt(lastDay.toLocaleDateString().split("/")[2]);
let daysArr=[];
let tmpData={cpu:[456],gpu:[346],ios:[273],android:[176],mobile:[453]}
for(let i=1;i<=lastDay;i++){
  daysArr.push(i);
  let tmp=parseInt(Math.random()*(10-0)+0)
  tmpData.cpu.push(parseInt(Math.random()*(500-140)+140));
  tmpData.gpu.push(parseInt(Math.random()*(500-140)+140));
  tmpData.ios.push(parseInt(Math.random()*(500-140)+140));
  tmpData.android.push(parseInt(Math.random()*(500-140)+140));
  tmpData.mobile.push(parseInt(Math.random()*(500-140)+140));
}//生成虚拟数据 （正经的数据从服务端获取，放到状态里面去就行


export default function LineChart() {

    const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          data: ['CPU测试数', 'GPU测试数', 'IOS测试数', 'Android测试数', '移动端比较数'],
          top:"10px"
          
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {},
            dataView: { readOnly: false },
            magicType: { type: ["stack","bar"] },
            restore: {},
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: daysArr
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'CPU测试数',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: tmpData.cpu,
            smooth:true,
          },
          {
            name: 'GPU测试数',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: tmpData.gpu,
            smooth:true,
          },
          {
            name: 'IOS测试数',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: tmpData.ios,
            smooth:true,
          },
          {
            name: 'Android测试数',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: tmpData.android,
            smooth:true,
          },
          {
            name: '移动端比较数',
            type: 'line',
            stack: 'Total',
            label: {
              show: true,
              position: 'top'
            },
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: tmpData.mobile,
            smooth:true,
          }
        ]
      };


  return (
    <div>
        <ReactECharts option={option} style={{height:"370px"}}/>
    </div>
  )
}
