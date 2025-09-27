'use client'

import React from "react"
import { FaSquare } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { useCurrentWeatherData } from '../DataProvider'
import Squares from "../Parts/Squares";
import { FaRegCalendar } from "react-icons/fa6";


const weatherIcons: {[key: string]: string} = { //       public/icons/clouds.svg
  "01d" : "clear_day.svg",      // clear
  "02d" : "few_clouds_day.svg", // few clouds
  "03d" : "clouds.svg",         // scattered clouds
  "04d" : "clouds_broken.svg",  // broken clouds 
  "09d" : "heavy_rain.svg",     // shower rain
  "10d" : "rain.svg",           // rain 
  "11d" : "thunder.svg",        // thunderstorm 
  "13d" : "snow.svg",           // snow 
  "50d" : "mist.svg",               // mist

  "01n" : "clear_night.svg",
  "02n" : "few_clouds_night.svg",
  "03n" : "clouds.svg",
  "04n" : "clouds_broken.svg",
  "09n" : "heavy_rain.svg",
  "10n" : "rain.svg",
  "11n" : "snow.svg",
  "13n" : "snow.svg", 
  "50n" : "mist.svg", 
}



const WeatherSummary = () => {

  const currentWeather = useCurrentWeatherData()

  const date = new Date()
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate(); // added 
  const month = date.getMonth()> 9 ? date.getMonth() : "0" + date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes()
  const dateF = `${day}.${month}.${year}`


  return (
    <div className="h-45 bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
      <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
        WEATHER SUMMARY
        <Squares />
      </div>
      <div className="px-5">
        <div className="mb-2">
          <div className="flex items-center text-5xl mb-2">
            {/*<TiWeatherPartlySunny size={80} className=""/>*/}
            {/* {currentWeather.weather && <img src={`/icons/${weatherIcons[currentWeather.weather[0].icon]}`} alt="Icon" className="w-22" />} */}
            {currentWeather.weather && <img src={`https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`} alt="Icon" className="w-22" />}
            <div className="flex flex-col">
              <div className="mx-2">
                {currentWeather.main && Math.round(currentWeather.main.temp)}°
                <span className="">C</span> {/*text-xl ml-[-20px] */}
              </div>
              <span className="mx-2 text-xl font-light">Feels Like: {currentWeather.main && Math.round(currentWeather.main.feels_like)}°</span>
              
            </div>
          </div>
          <div className="flex justify-between items-start">
            {currentWeather.weather && currentWeather.weather[0].description.toUpperCase()}
            <div className="flex items-center ml-2">
              <FaRegCalendar size = {20}/>
              <span className="ml-2 text-xl font-light">{dateF}</span>
            </div>
          </div>
          
        </div>
        {/* <WeatherGraph/> */}
      </div>
    </div>
  )
};

export default WeatherSummary;
