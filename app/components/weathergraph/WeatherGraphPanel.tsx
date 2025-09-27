'use client'

import React from "react"
import TimeHolder from "./TimeHolder";
import TemperatureBlock from "./TemperatureBlock";
import TempGraph from "./TempGraph";

const WeatherGraphPanel = () => {
  return (
    // w-125 h-25
    <div className="w-full h-full"> 
        <div className="grid grid-cols-4 grid-rows-3 gap-2 rounded-2xl">
            {/* <div className="row-span-4 bg-emerald-700 row-start-2 flex flex-col items-center justify-around">
              <TemperatureBlock />
              <TemperatureBlock />
              <TemperatureBlock />
              <TemperatureBlock />
              <TemperatureBlock />
              <TemperatureBlock />
              <TemperatureBlock />
            </div> */}
            <div className="col-span-4 bg-back-dark flex justify-around items-center col-start-1 rounded-t-2xl">
            <TimeHolder />
              {/*later rework this entire thing into it's own component with all 12 things */}
            </div>
            <div className="col-span-4 row-span-2 col-start-1 row-start-2 bg-back-dark p-0 flex justify-center items-center rounded-b-2xl overflow-hidden">
              <TempGraph />
            </div>
        </div>
    </div>
  )
};

export default WeatherGraphPanel;
