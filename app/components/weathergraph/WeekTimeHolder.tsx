'use client'

import React from "react"
import {useEffect, useState, useContext } from 'react';
import { useWeatherData } from '../DataProvider';
import TimeBlock from "./TimeBlock";

const WeekTimeHolder = () => {

  let weatherData = useWeatherData()

  const [weatherItems, setWeatherItems] = useState()
  useEffect(() => {
    if (weatherData.list){
      console.log(weatherData)
      setWeatherItems(weatherData.list.map((weatherListItem: Record<string, any>, index : number) =>
        <TimeBlock 
          key = {index}
          temp = {weatherListItem.main.temp}
          time = {weatherListItem.dt}
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

export default WeekTimeHolder;
