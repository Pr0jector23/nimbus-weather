'use client'

import React, {useState, useEffect } from "react"

import { useWeatherData } from '../DataProvider';


  /*
  stroke="black"
  strokeWidth="1" 
  points="0,10 100,10 100,25 0,25 0,10"

  points="0,10    9,20 21,20 33,20 44,10 55,20 66,10 78,20 90,10   99,10 99,25 0,25"
  */


  //og heights were 198 and 50
  // <polygon
  //           points={`0,${pointYList[0]}  
  //                           18,${pointYList[0]} 
  //                           42,${pointYList[1]} 
  //                           66,${pointYList[2]} 
  //                           88,${pointYList[3]} 
  //                           110,${pointYList[4]} 
  //                           132,${pointYList[5]} 
  //                           156,${pointYList[6]}  
  //                           180,${pointYList[7]}   
  //                     198,${pointYList[7]} 198,50 0,50`}
  //           fill="orange"


const graphX = 600
const graphY = 50
const offsetX = graphX / 9

const TempGraph = () => {

  const weatherData = useWeatherData()

  const [tempToYList, SettempToYList] = useState<Array<number>>([])
  const [pointYList, SetPointYList] = useState<Array<number>>([])
  //const [points, setPoints] = useState("")

  useEffect(() => {
    if (weatherData.list){
      SettempToYList(weatherData.list.slice(0, 8).map((weatherListItem: Record<string, any>, index : number) =>
        weatherListItem.main.temp
      ));
    }
    //setPoints("hello there")
    }, [weatherData]);
    
    useEffect(() => {
      const average = Math.round(((tempToYList.reduce((a, b) => a + b, 0) / tempToYList.length)  + Number.EPSILON) * 100) / 100
      console.log("average temperature: ", average)
      console.log("temperatures: ", tempToYList)

      if (weatherData.list){
        SetPointYList(tempToYList.map((listItem: number, index : number) =>
          graphY / 2 - (listItem - average)
        ));
      }
      }, [tempToYList]);

  const tempMarks = tempToYList.map((tempValue: number, index : number) =>
    <span className="mx-[25px]" style={{transform: `translateY(${pointYList[index] * 3.2 - 95}px)`}} key = {index}>
      {`${Math.round(tempValue)}°`}
    </span>
  )

  //console.log('points: ', tempToYList)

  return (
    <>
      <svg className="w-full h-full" viewBox={`0 0 ${graphX} ${graphY}`} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="graph-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#177192" /> {/*213373  ffb900*/}
            <stop offset="0%" stopColor="#177192" /> {/*??????*/}
            <stop offset="10%" stopColor="#ffb900" /> {/*264e92  ffb900*/}
            <stop offset="100%" stopColor="#ffe100" /> {/*e944d3  fd9a00*/}
          </linearGradient>
        </defs>
        <polygon
            points={`-5,${pointYList[0]}  
                            ${graphX / 11},${pointYList[0]} 
                            ${1 * 2 * offsetX},${pointYList[1]} 
                            ${1.5 * 2 * offsetX},${pointYList[2]} 
                            ${2 * 2 * offsetX},${pointYList[3]} 
                            ${2.5 * 2 * offsetX},${pointYList[4]} 
                            ${3 * 2 * offsetX},${pointYList[5]} 
                            ${3.5 * 2 * offsetX},${pointYList[6]}  
                            ${graphX - graphX/ 11},${pointYList[7]}   
                      ${graphX + 10 /*was 0 before major rework */},${pointYList[7]} ${graphX + 15},${pointYList[7] - 23} ${graphX},${graphY + 5} 0,${graphY + 5}`} //replace ALL 5s with 0 or nothing for og position
            
            fill="url(#graph-gradient)"
            fillOpacity='1'
            stroke="#ffb900"
            strokeWidth = {2}
        />
      </svg>
      <div className="text-white text-xl absolute flex justify-center">
        {tempMarks}
      </div>
    </>
  )
};

export default TempGraph;
