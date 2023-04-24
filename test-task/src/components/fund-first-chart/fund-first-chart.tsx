import {FC, useState} from 'react';
import './fund-first-chart.css'
import ReactEcharts from 'echarts-for-react';
import {getData, ResponseData, ChartDescription, FirstChartData} from '../utils/get-data'

const FIRST_CHART_URL = '/data/fund/WellStockDynamics_BarChart.json';
const DESCRIPTION_URL = '/data/fund/WellStockDynamics_BarChart_description.json';




const jsonChartData: ResponseData = await getData(FIRST_CHART_URL);
const jsonDescription: ResponseData = await getData(DESCRIPTION_URL);

const dataYears: number[] | undefined = (jsonChartData as FirstChartData[])?.map(item => item.year);
const dataValues: number[] | undefined = (jsonChartData as FirstChartData[])?.map(item => item.value);

const descriptionLeft: string | undefined = (jsonDescription as ChartDescription)?.description?.left;
const descriptionRight: string | undefined = (jsonDescription as ChartDescription)?.description?.right;
  

const option = {
    title: {
      text: 'ТЫС. СКВ.'
    },
    tooltip: {},
    legend: {
      data: [],
    },
    xAxis: {
      data: dataYears,
    },
    yAxis: {},
    series: [{
      name: 'Продажи',
      type: 'bar',
      data: dataValues,
      itemStyle: {
        normal: {
            color: function(params: {dataIndex: number}) { 
            return params.dataIndex !== 
                   (dataYears.length-1) ? 'orange' : 'red'} 
          },
          emphasis: {
            color: 'red', 
          },
      },
    }]
  };

const FundFirstChart: FC = () => {


    const finalColumnValue = dataValues[dataValues.length-1];

    const [selectedValue, setSelectedValue] = useState<number | null>(null);
   
    

    const finalResultInCubes = () => {
   if (selectedValue === null) return null;
   const finalResult = selectedValue - finalColumnValue;
   return `${selectedValue > finalColumnValue ? '+' : ''}${finalResult.toFixed(2)}`
    }

    const finalResultInPercents = () => {
        if (selectedValue === null) return null;
        const finalResult = (selectedValue - finalColumnValue)/finalColumnValue * 100;
        return `${selectedValue > finalColumnValue ? '+' : ''}${finalResult.toFixed(2)}%`
        
    }

    const handleMouseOver = (params: any) => {
        if (params.componentType === 'series' && params.seriesType === 'bar') {
            const value = params.value; 
            setSelectedValue(value);
          }
    }


    return (
        <div className='page_container'>
            <h3 className='page_name'>Динамика ввода скважин</h3>
            <div className='chart_container'>
                <ReactEcharts
                  option={option}
                  onEvents={{
                     'mouseover': handleMouseOver,
                             }}
                  style={{ height: '350px', width: '60%', color:'yellow' }}
                  className='react_for_echarts'
                />
                <div className='chart_description'>
                  <p className='chart_text'>Изменения к отчетному году</p>
                  <p  className='chart_numbers'>{finalResultInPercents()}</p>
                  <p className='chart_numbers'>{finalResultInCubes()}</p>
                  <p className='chart_text'>млрд. куб</p>
                </div>

            </div>
            <div className='description_container'>
                <div className='left_description'>{descriptionLeft}</div>
                <div className='border'></div>
                <div className='right_description'>{descriptionRight}</div>
            </div>
        </div>
    )
}

export {FundFirstChart}