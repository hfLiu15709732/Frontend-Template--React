import React from 'react'
import ReactECharts from 'echarts-for-react';
 

let daysArr=[];
for(let i=0;i<5;i++){
  var date = new Date(), y = date.getFullYear(), m = date.getMonth(),d=date.getDate();
  daysArr.push(new Date(y,m,d-i).toLocaleDateString());
}
daysArr=daysArr.reverse();

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
            data: ['桌面-CPU', '桌面-GPU', '移动端-Android', '移动端-IOS',"移动端比较"],
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
            name:"桌面-CPU",
            data: [120, 200, 150, 80, 70, ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"桌面-GPU",
            data: [120, 200, 50, 40, 230, ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"移动端-Android",
            data: [120, 300, 250, 180, 240,],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"移动端-IOS",
            data: [100, 100, 150, 20, 10, ],
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)'
            }
          },
          {
            name:"移动端比较",
            data: [120, 20, 110, 220, 80 ],
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
