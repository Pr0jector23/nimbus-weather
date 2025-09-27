import React from "react"
import { FaSquare } from "react-icons/fa";
import WeekGraph from "./WeekGraphPanel";


const WeekGraphContainer = () => {
  return (
    <div className="h-full bg-button-light/75 text-white font-mono font-bold text-xl rounded-2xl">
          <div className="flex justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
            WEATHER FOR TODAY
            <div className="flex justify-between items-center text-back-dark">
              <FaSquare size={12}/>
              &nbsp;
              <FaSquare size={12}/>
              &nbsp;
              <FaSquare size={12}/>
            </div>
          </div>
          <div className="px-5">
            <WeekGraph />
          </div>
        </div>
  )
};

export default WeekGraphContainer;
