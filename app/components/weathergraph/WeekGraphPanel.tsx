'use client'

import React from "react"
import WeekGraph from "./WeekGraph";
import WeekTimeHolder from "./WeekTimeHolder";

const WeatherGraph = () => {
  return (
    // w-125 h-25
    <div className="w-full h-full"> 
        <div className="grid grid-cols-4 grid-rows-3 gap-2 rounded-2xl">
            <div className="col-span-4 bg-back-mid flex justify-around items-center col-start-1 rounded-t-2xl">
            <WeekTimeHolder />
            </div>
            <div className="col-span-4 row-span-2 col-start-1 row-start-2 bg-back-mid p-0 flex justify-center items-center rounded-b-2xl overflow-hidden">
              <WeekGraph />
            </div>
        </div>
    </div>
  )
};

export default WeatherGraph;
