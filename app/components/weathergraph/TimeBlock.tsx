import { SVG } from "leaflet";
import React, { ReactElement } from "react"
import { IconType } from "react-icons";
import { FaCloudSun } from "react-icons/fa";


interface TimeBlockProps {
    temp: number;
    time: string;
    icon?: ReactElement; //icon?: IconType;
}

const TimeBlock: React.FC<TimeBlockProps> = ({
  temp, time, icon
}) => {

  const date = new Date(parseInt(time) * 1000)
  //console.log(date)
  const hours = date.getHours();
  const minutes = "0" + date.getMinutes()
  const formattedTime = `${hours}:${minutes}`

  return (
      <div className="flex-col justify-end items-end text-white font-mono font-bold text-sm text-center">
        <p>{formattedTime}</p>
        <div className="flex justify-center">{icon}</div> {/*<FaCloudSun size={30}/>*/}
        <p>{Math.round(temp)}°C</p>
      </div>
  )
};

export default TimeBlock;
