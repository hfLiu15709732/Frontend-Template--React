import React from 'react'
import ReactECharts from 'echarts-for-react';
import { getColumnChart } from '../config/requestUse';
 

let daysArr=[];
let legendData=['桌面-CPU', '桌面-GPU', '移动端-Android', '移动端-IOS',"移动端比较"];
let mainData=[
  [120, 200, 150, 80, 70],
  [120, 200, 50, 40, 230],
  [120, 300, 250, 180, 240],
  [100, 100, 150, 20, 10],
  [120, 20, 110, 220, 80],
]
for(let i=0;i<5;i++){
  var date = new Date(), y = date.getFullYear(), m = date.getMonth(),d=date.getDate();
  daysArr.push(new Date(y,m,d-i).toLocaleDateString());
}
daysArr=daysArr.reverse();



// getColumnChart().then(
//   (res)=>{
//     daysArr=res.daysArr;
//     mainData=res.mainData;
//     legendData=res.legendData;
//   },//成功的回调
//   ()=>{

//   },
// )
//上面注释的代码在有后端的情况下启用即可获得后端来的数据

export default function ColumnChart() {

    const option = {
      toolbox: {
        show: true,
        feature: {
          saveAsImage: {},
          dataView: { readOnly: false },
          magicType: { type: ["stack"] },
          restore: {},
        }
      },
        xAxis: {
          type: 'category',
          data: daysArr,
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
            data: legendData,
            orient: 'horizontal',
            top:"5px",
            left:"50px"
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
            name:legendData[0],
            data: mainData[0],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:legendData[1],
            data: mainData[1],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:legendData[2],
            data: mainData[2],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:legendData[3],
            data: mainData[3],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:legendData[4],
            data:mainData[4],
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
        <ReactECharts option={option} style={{height:"300px"}}/>
    </div>
  )
}
