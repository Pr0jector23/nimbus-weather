'use client'
import React, { useEffect, useState } from "react"
import { FaSquare } from "react-icons/fa";
import DayItem from "./DayItem";
import { useWeatherData } from '../DataProvider';
import { useCurrentWeatherData } from '../DataProvider'
import Squares from "../Parts/Squares";

const DaySelect = () => {

  const weatherData = useWeatherData()
  const currentWeather = useCurrentWeatherData()

    const [dayItems, setDayItems] = useState()
      useEffect(() => {
        console.log("has been updated", weatherData.list, currentWeather, currentWeather.main)
        if (weatherData.list != undefined && currentWeather != undefined && currentWeather.main != undefined /*weatherData.list && currentWeather && currentWeather.main && weatherData.list.length > 0*/){
            //console.log("has passed inspection")
            const firstDay = new Date(parseInt(weatherData.list[0].dt) * 1000).getDate()
            let skipToIndex = 1
            //determine where the second day starts
            for (let i = 1; i < weatherData.list.length; i++) {
              if (new Date(parseInt(weatherData.list[i].dt) * 1000).getDate() != firstDay) {
                skipToIndex = i
                //console.log(new Date(parseInt(weatherData.list[i].dt) * 1000),'vs' ,new Date(parseInt(weatherData.list[0].dt) * 1000))
                //console.log(new Date(parseInt(weatherData.list[i].dt) * 1000).getDate(),'vs' ,new Date(parseInt(weatherData.list[0].dt) * 1000).getDate())
                break
              }
            }
            //calculate min and max temperatures for each day but the first
            let minTemps = [0]
            let maxTemps = [0]
            for (let i = skipToIndex; i < weatherData.list.length - 8; i+=8) {
              let minsOfDay = []
              let maxOfDay = []
              for (let j = i; j < i + 8; j++) {
                //console.log(`i is ${i} J is ${j} ; stuff is ${weatherData.list[j]}`)
                minsOfDay.push(weatherData.list[j].main.temp_min)
                maxOfDay.push(weatherData.list[j].main.temp_max)
              }
              minTemps.push(Math.min(...minsOfDay))
              maxTemps.push(Math.max(...maxOfDay))
            }

            //map the values
            setDayItems(weatherData.list.map((weatherListItem: Record<string, any>, index : number) =>
            {
              if (index == 0) {
                return <DayItem 
                          key = {index}
                          temp_min = {currentWeather.main.temp_min}
                          temp_max = {currentWeather.main.temp_max}
                          time = {weatherListItem.dt} //so, i separated this thing, make others pull min and max, them make this do the same from current weather
                        />
              }
              else if (index % 8 == 0 && index >= skipToIndex) {
              return <DayItem 
                        key = {index}
                        temp_min = {minTemps[index / 8]}
                        temp_max = {maxTemps[index / 8]}
                        time = {weatherListItem.dt}
                      />
              }
            }
          ));
        }
      }, [weatherData,currentWeather]);


  return (
    <div className="h-45 bg-ui-light/25 text-white font-mono font-bold text-xl rounded-2xl pb-15">
          <div className="flex justify-between items-center my-2 rounded-t-2xl px-5 border-back-dark border-b-4">
            WEATHER FOR THE WEEK
            <Squares />
          </div>
          <div className="h-full px-5 flex justify-around items-center mt-4">
            {dayItems ? dayItems : <span>Loading...</span>}
          </div>
        </div>
  )
};

export default DaySelect;
