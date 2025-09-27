'use client'

import React from "react"
import { FaCalendar } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";

interface DayItemProps{
    temp_min: number;
    temp_max: number
    time: string
}

const DayItem: React.FC<DayItemProps> = ({
  temp_min, temp_max, time
}) => {

    


    const date = new Date(parseInt(time) * 1000)
    const day = date.getDate()

  return (
    <div className="rounded-2xl flex flex-col justify-center items-center">
      <FaCalendar size={60} className="mb-1"/>
      <div className="absolute -translate-y-3/6 text-back-dark font-mono font-bold text-4xl text-center">{day}</div>
      <div className="text-lg text-center">
        <div className="flex items-center justify-between"><FaSun size={20} className="mr-1"/>{`${Math.round(temp_max)}°`}</div>
        <div className="flex items-center justify-between"><IoMoon className="mr-1"/>{`${Math.round(temp_min)}°`}</div>
      </div>
    </div>
  )
};

export default DayItem;
