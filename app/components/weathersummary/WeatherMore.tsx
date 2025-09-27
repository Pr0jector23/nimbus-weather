'use client'

import React from "react"
import { FaSquare } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useCurrentWeatherData } from '../DataProvider'
import { useAirData } from '../DataProvider'
import WeatherMoreBar from "./WeatherMoreBar";
import Squares from "../Parts/Squares";

const WeatherMore = () => {
    const currentWeather = useCurrentWeatherData()
    const air = useAirData()

    const airQualityValues = ["", "Good", "Fair", "Moderate", "Poor", "Very Poor"]

    return (
      <div className="h-full bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
        <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
          CURRENT WEATHER
          <Squares />
        </div>
        {currentWeather.main && air && air.list && <div className="px-5">
            <WeatherMoreBar label = "Humidity" value = {`${currentWeather.main.humidity} %`}  />
            <WeatherMoreBar label = "Air Quality" value = {`${airQualityValues[air.list[0].main.aqi]}`} />
            <WeatherMoreBar label = "Wind" value = {`${currentWeather.wind.speed} km/h`}  />
            <WeatherMoreBar label = "Wind Gusts" value = {currentWeather.wind.gust ? `${currentWeather.wind.gust} km/h` : "none"}  />
        </div>}
      </div>
    )
};

export default WeatherMore;
