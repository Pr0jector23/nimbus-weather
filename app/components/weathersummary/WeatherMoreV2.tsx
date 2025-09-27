'use client'

import React from "react"
import { FaSquare } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useCurrentWeatherData } from '../DataProvider'
import WeatherMoreBar from "./WeatherMoreBar";
import Squares from "../Parts/Squares";

const WeatherMoreV2 = () => {
    let currentWeather = useCurrentWeatherData()

    return (
      <div className="h-full bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
        <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
          &nbsp;
          <Squares />
        </div>
        {currentWeather.main && <div className="px-5">
            <WeatherMoreBar label = "Pressure at Sea Level" value = {`${currentWeather.main.sea_level}mb`}  />
            <WeatherMoreBar label = "Pressure at Ground Level" value = {`${currentWeather.main.grnd_level}mb`} />
            <WeatherMoreBar label = "Wind Degree" value = {`${currentWeather.wind.deg}`} />
        </div>}
      </div>
    )
};

export default WeatherMoreV2;
