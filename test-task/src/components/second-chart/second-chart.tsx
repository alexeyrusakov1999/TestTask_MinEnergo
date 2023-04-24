import './second-chart.css';
import { FC } from 'react';
import ReactEchartsCore from 'echarts-for-react/lib/core';
import * as echarts from 'echarts/core';
import {getData, ResponseData, SecondChartData} from '../utils/get-data.ts'

const DATA_URL = '/data/Всего/RegionalStructure_PieChart.json';

const data: ResponseData = await getData(DATA_URL);

const names: string[] | undefined = (data as SecondChartData[])?.map(item=>item.name);


const option = {
  tooltip: {
    trigger: 'item',
    formatter: function(params: any) {
      console.log(params);
      const newData = params.data;
      const currentValue = newData.value;
      const prevValue = newData.prev;
      const growth = ((currentValue - prevValue) / prevValue) * 100;
      const checkPlus = growth > 0? '+' : '';
      
      return (
        '<strong>' +
        newData.name +
        '</strong><br/>' +
        'Текущее значение: ' +
        currentValue +
        '<br/>' +
        'Предыдущее значение: ' +
        prevValue +
        '<br/>' +
        'Сравнение с предыдущим годом: ' + checkPlus +
        growth.toFixed(2) +
        '%'
      );
    },
  },
  grid: {
    top: '100%',
    left: 100,
    bottom: 10,
    right: 120,
  },
  legend: {
    hoverLink: true,
    top: '15%',
    itemWidth: 0,
    itemHeight: 0,
    orient: 'vertical',
    left: 10,
    data: names,
    textStyle: {
      fontSize: '12',
      itemHeight: 100,
      color: '#333',
      backgroundColor: '#ddd',
      borderRadius: 5,
      padding: [20, 50, 20, 10],
      margin: [15, 50, 15, 10],
      width: 230,
    },
  },
  series: [
    {
      name: 'My Pie Chart',
      type: 'pie',
      radius: ['50%', '70%'],
      avoidLabelOverlap: true,
      label: {
        show: false,
        position: 'center',
        formatter: '{c}%',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '20',
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: data,
    },
  ],
};



const SecondChart: FC = () => {

  return (
    <div className="secondChart_container">
      <h3 className="secondChart_name">Региональная структура</h3>
      <ReactEchartsCore
        echarts={echarts}
        option={option}
        style={{ height: '300px' }}
        className="secondChart_chart"
      />
    </div>
  );
};

export { SecondChart };
