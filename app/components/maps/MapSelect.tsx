import React from "react"
import MapButton from "./MapButton";

interface MapSelectProps{
    onClick: (e: React.MouseEvent<HTMLButtonElement>, mapValue: string) => void;
}


const MapSelect: React.FC<MapSelectProps> = ({onClick}) => {
  return (
    <div className="flex justify-around items-center h-full w-full mt-5 px-45">
      <MapButton label={"CLOUDS"} onClick={onClick} mapValue={"clouds_new"}/>
      <MapButton label={"TEMPERATURE"} onClick={onClick} mapValue={"temp_new"}/>
      <MapButton label={"PRECIPITATION"} onClick={onClick} mapValue={"precipitation_new"}/>
      <MapButton label={"WIND"} onClick={onClick} mapValue={"wind_new"}/> 
    </div>
  )
};

export default MapSelect;
