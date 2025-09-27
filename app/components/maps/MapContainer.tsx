'use client'

import React from "react"
import dynamic from 'next/dynamic';
import MapSelect from "./MapSelect";
import {useState } from 'react';
import { FaSquare } from "react-icons/fa";
import Squares from "../Parts/Squares";

const WeatherMap = dynamic(() => import('@/app/components/maps/MapDisplay'), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

const MapContainer = () => {

    const [mapType, setMapType] = useState("clouds_new")

    const handleMapSwap = (e: React.MouseEvent<HTMLButtonElement>, mapValue: string) => {
        console.log('MAP SWAP!', e.currentTarget.name, mapValue);
        setMapType(mapValue)
    };


  return (
    <div className="flex flex-col-reverse justify-between w-full h-full" id="map">
        <MapSelect onClick={handleMapSwap}/>
        <div className="h-fit pb-5 flex flex-col items-center bg-ui-light/25 backdrop-blur-sm text-white font-mono font-bold text-xl rounded-2xl">
            <div className="flex w-full justify-between items-center my-2  rounded-t-2xl px-5 border-back-dark border-b-4">
                WEATHER MAP
                <Squares />
            </div>
            <div className="px-5">
                <WeatherMap center={[51.505, -0.09]} zoom={3} overlayType={mapType}/>
            </div>
        </div>
    </div>
  )
};

export default MapContainer;
