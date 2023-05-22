import React from 'react'
import ReactECharts from 'echarts-for-react';
import { getLineChart } from '../config/requestUse';
 





let legendData=['CPU测试数', 'GPU测试数', 'IOS测试数', 'Android测试数', '移动端比较数'];

let date = new Date(), y = date.getFullYear(), m = date.getMonth();
let lastDay = new Date(y, m + 1, 0);
lastDay=parseInt(lastDay.toLocaleDateString().split("/")[2]);
let daysArr=[];
let mainData={cpu:[456],gpu:[346],ios:[273],android:[176],mobile:[453]}
for(let i=1;i<=lastDay;i++){
  daysArr.push(i);
  let tmp=parseInt(Math.random()*(10-0)+0)
  mainData.cpu.push(parseInt(Math.random()*(500-140)+140));
  mainData.gpu.push(parseInt(Math.random()*(500-140)+140));
  mainData.ios.push(parseInt(Math.random()*(500-140)+140));
  mainData.android.push(parseInt(Math.random()*(500-140)+140));
  mainData.mobile.push(parseInt(Math.random()*(500-140)+140));
}//生成虚拟数据 （正经的数据从服务端获取，放到状态里面去就行



// getLineChart().then(
//   (res)=>{
//     daysArr=res.daysArr;
//     mainData=res.mainData;
//     legendData=res.legendData;
//   },//成功的回调
//   ()=>{

//   },
// )
//上面注释的代码在有后端的情况下启用即可获得后端来的数据


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
          data: legendData,
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
            name:legendData[0],
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: mainData.cpu,
            smooth:true,
          },
          {
            name:legendData[1],
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: mainData.gpu,
            smooth:true,
          },
          {
            name:legendData[2],
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: mainData.ios,
            smooth:true,
          },
          {
            name: legendData[3],
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: mainData.android,
            smooth:true,
          },
          {
            name:legendData[4],
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
            data: mainData.mobile,
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
