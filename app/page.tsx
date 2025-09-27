'use client'
import dynamic from 'next/dynamic';
import Image from "next/image";
import WeatherSummary from "./components/weathersummary/WeatherSummary";
import WeatherMore from "./components/weathersummary/WeatherMore";
import WeatherMoreV2 from "./components/weathersummary/WeatherMoreV2";
import WeatherMoreV3 from "./components/weathersummary/WeatherMoreV3";
import WeatherGraphContainer from "./components/weathergraph/WeatherGraphContainer";
// import WeekGraphContainer from "./components/weathergraph/WeekGraphContainer";
import DaySelect from "./components/dayselect/DaySelect";
import MapDisplay from "./components/maps/MapDisplay";
import MapContainer from './components/maps/MapContainer';
import Settings from './components/navbar/Settings';
import BackgroundClouds from './components/Parts/BackgroundClouds';




export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-linear-to-b from-[var(--color-back-dark)] to-[var(--color-back-light)] ">
      {/* <div className="text-rose-500 text-2xl">Funny Text brrr</div> */}
      <div className="h-full grid-main-page gap-10 w-5/7 my-10 py-5 rounded-2xl z-10">
        <div className="a-sum"><WeatherSummary /></div>
        <div className="a-more"><WeatherMore /></div>
        <div className="a-day"><WeatherGraphContainer /></div>
        <div className="a-week"><DaySelect /></div>
        <div className="a-more-2"><WeatherMoreV2 /></div>
        <div className="a-more-3"><WeatherMoreV3 /></div>
        <div className='a-map'><MapContainer/></div>
      </div>
      
    </div>
    
  );
}