import React from "react"

interface WeatherMoreBarProps {
    label: string;
    value: string;
}


const WeatherMoreBar: React.FC<WeatherMoreBarProps> = ({
  label, value
}) => {
  return (
    <div className="flex justify-between border-b-2 border-white mb-2 py-2 px-3">
      <span>{label}</span>
      <span>{value}</span>
    </div>
  )
};

export default WeatherMoreBar;
