import React from 'react';
import Chart from "react-apexcharts";
import {chartSettings} from "./chartSettings";
import Options from "./Options";

const logos = {
    "plus": 'https://preview.cruip.com/mosaic/images/icon-01.svg',
    "advanced": "https://preview.cruip.com/mosaic/images/icon-02.svg",
    "professional": "https://preview.cruip.com/mosaic/images/icon-03.svg"
}

const isPositive = (str) => {
   return str.includes('+')
}

function AcmeChartComponent({series, type, options, name, sales, percent}) {

    return (
        <div className={'flex flex-col border border-slate-200 p-5 lg:w-[30%] w-[90%] ml-[5%] lg:ml-8 bg-white lg:mb-0 mb-5'}>
            <div className='flex justify-between'>
                <img src={logos[type]} alt={"triangle logo"}/>
                <Options options={options} type={type}/>
            </div>
            <h2 className="mt-3 text-slate-800 font-medium text-xl">{name}</h2>
            <div className={"mt-1 text-gray-400 font-medium text-sm"}>SALES</div>
            <div className='flex'>
                <div className={'text-3xl font-bold text-slate-800 mr-2'}>{sales}</div>
                <div className={`text-sm rounded-full ${isPositive(percent) ? 'bg-green-500' : 'bg-orange-500'} text-white flex items-center justify-center h-[20px] p-1.5`}>{percent}</div>
            </div>
            <Chart options={chartSettings.options} series={series} type="area" height={350}/>
        </div>
    );
}

export default AcmeChartComponent;