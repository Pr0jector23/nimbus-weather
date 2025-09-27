'use client'
import React from "react"
import { MapContainer, TileLayer } from 'react-leaflet';
import { LatLngExpression, LatLngTuple} from 'leaflet';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  center: LatLngExpression | LatLngTuple,
  overlayType: string
  zoom?: number,
}

const MapDisplay: React.FC<MapProps> = ({
  center,zoom, overlayType
}) => {

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  const weatherTileUrl = `https://tile.openweathermap.org/map/${overlayType}/{z}/{x}/{y}.png?appid=${API_KEY}`;
  
  if (!hasMounted) {
    return (<span>LOADING</span>); // Or a loading indicator
  }

  return (
    <div>
      <MapContainer center={center} zoom={zoom} scrollWheelZoom={false} className="h-120 w-275">
      {/* Base map layer (OpenStreetMap) */}
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Weather overlay from OpenWeatherMap */}
      <TileLayer
        url={weatherTileUrl}
        attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
        opacity={0.5}
      />
    </MapContainer>
    </div>
  )
};

export default MapDisplay;
