'use client'

import React from "react"
import { FaSquare } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useCurrentWeatherData } from '../DataProvider'
import WeatherMoreBar from "./WeatherMoreBar";
import Squares from "../Parts/Squares";
import constants from "node:constants";





const WeatherMoreV3 = () => {
    const currentWeather = useCurrentWeatherData()

    let setF = ""
    let riseF = ""
    if (currentWeather.sys) {
    const sunRise = new Date(parseInt(currentWeather.sys.sunrise) * 1000)
    const riseH = sunRise.getHours();
    const riseM = sunRise.getMinutes() > 9 ? sunRise.getMinutes() : "0" + sunRise.getMinutes()
    riseF = `${riseH}:${riseM}`

    const sunSet = new Date(parseInt(currentWeather.sys.sunset) * 1000)
    const setH = sunSet.getHours();
    const setM = sunSet.getMinutes() > 9 ? sunSet.getMinutes() : "0" + sunSet.getMinutes()
    setF = `${setH}:${setM}`


    }


    return (
      <div className="h-full bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
        <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
          &nbsp;
          <Squares />
        </div>
        {currentWeather.main && <div className="px-5">
            <WeatherMoreBar label = "Sunrise" value = {`${riseF}`}  />
            <WeatherMoreBar label = "Sunset" value = {`${setF}`} />
            <WeatherMoreBar label = "Visibility" value = {`${currentWeather.visibility / 1000}km`} />
        </div>}
      </div>
    )
};

export default WeatherMoreV3;
