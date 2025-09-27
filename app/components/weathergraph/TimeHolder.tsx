'use client'

import React from "react"
import axios from 'axios';
import {useEffect, useState, useContext } from 'react';
import { useWeatherData } from '../DataProvider';
import TimeBlock from "./TimeBlock";

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




const TimeHolder = () => {


  let weatherData = useWeatherData()

  const [weatherItems, setWeatherItems] = useState()
  useEffect(() => {
    if (weatherData.list){
      console.log(weatherData)
      setWeatherItems(weatherData.list.map((weatherListItem: Record<string, any>, index : number) =>
        index < 8 && <TimeBlock 
          key = {index}
          temp = {weatherListItem.main.temp}
          time = {weatherListItem.dt}
          // icon = {<img src={`/icons/${weatherIcons[weatherListItem.weather[0].icon]}`} alt="Icon" className="h-8" />}
          icon = {<img src={`https://openweathermap.org/img/wn/${weatherListItem.weather[0].icon}@2x.png`} alt="Icon" className="h-12" />}
        />
      ));
    }
  }, [weatherData]);
  


  




  if (!weatherData || weatherData.length == 0) return <p>Loading...</p>;
  
  
  //console.log(weather)

  return (
    <div className="flex justify-evenly w-full">
      {/*<h2>{ weatherData.length > 0 ? geoData[0].local_names.ru : null}</h2>*/}
        {weatherItems}
    </div>
  )
};

export default TimeHolder;
