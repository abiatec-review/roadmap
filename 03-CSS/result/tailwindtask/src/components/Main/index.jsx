import React from 'react';
import AcmeChartComponent from "./AcmeChartComponent/AcmeChartComponent";
import {acmeData} from "./mock";

function Main() {
    return (
        <>
            <div className={'lg:flex lg:flex-row w-full pt-[84px] flex-col'}>
                {acmeData.map((info) => {
                    return <AcmeChartComponent {...info} key={info.name}/>
                })}
            </div>
        </>
    );
}

export default Main;