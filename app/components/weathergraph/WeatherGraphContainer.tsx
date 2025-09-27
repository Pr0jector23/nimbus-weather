'use client'

import React from "react"
import WeatherGraphPanel from "./WeatherGraphPanel";
import { FaSquare } from "react-icons/fa";
import Squares from "../Parts/Squares";


const WeatherGraphContainer = () => {

  return (
    <div className="h-full bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
          <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
            WEATHER FOR TODAY
            <Squares />
          </div>
          <div className="px-5">
            <WeatherGraphPanel/>
          </div>
        </div>
  )
};

export default WeatherGraphContainer;
