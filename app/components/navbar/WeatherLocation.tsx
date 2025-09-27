import React from "react"
import { FaLocationDot } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

import { useGeoData } from '../DataProvider';

const WeatherLocation = () => {

  let {geoData, loading} = useGeoData()

  return (
    <div className="hidden md:flex flex-col justify-around bg-ui-light/25 rounded-4xl h-full p-1 px-2 text-white font-mono font-bold text-xl">
      <div className="flex px-2">
        <FaLocationDot className="m-1 mr-3" color = "white" size = "20"/>
        {loading ? "Loading..." : geoData[0] ? geoData[0].name : "no data"}                 {/*{geoData[0] ? geoData[0].name : "No Data"} */}
      </div>
      {/*<div className="flex px-2">
        <MdDateRange className="m-1 mr-3" color = "white" size = "20"/>
        Date Time
      </div>*/}
    </div>
  )
};

export default WeatherLocation;
