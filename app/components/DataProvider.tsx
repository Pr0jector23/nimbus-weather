'use client'

import React from "react"
import axios from "axios";
import { useState, useEffect, createContext, useContext } from "react";

const GeoDataContext = createContext<Record<string, any>>([])    /*createContext<Array<Record<string, any>>>([]) */

export const useGeoData = () => {
  return useContext(GeoDataContext);
};

const WeatherDataContext = createContext<Record<string, any>>([])

export const useWeatherData = () => {
  return useContext(WeatherDataContext);
};

const CurrentWeatherDataContext = createContext<Record<string, any>>([])

export const useCurrentWeatherData = () => {
  return useContext(CurrentWeatherDataContext);
};

const AirDataContext = createContext<Record<string, any>>([])

export const useAirData = () => {
  return useContext(AirDataContext);
};


const SearchContext = createContext<(e: React.ChangeEvent<HTMLInputElement>) => void>(() => void {})

export const useSearch = () => {
  return useContext(SearchContext);
};

const SearchSubmitContext = createContext<(e: React.FormEvent<HTMLFormElement>) => void>(() => void {})

export const useSearchSubmit = () => {
  return useContext(SearchSubmitContext);
};


interface DataProviderProps {
  children: React.ReactNode;
}


const DataProvider: React.FC<DataProviderProps> = ({children}) => {

  const [geoData, setGeoData] = useState<Array<Record<string, any>>>([]);
  const [geoLoading, setGeoLoading] = useState(true)

  const fetchGeoData = async (city: string = 'London') => {
    console.log("trying to fetch geo data..")
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    //city = 'London';
    try {
      const res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: city,
          limit: 5,
          appid: API_KEY,
        },
      });
      console.log("Fetched Geo data:", res.data);
      res.data.length == 0 ? fetchGeoData("London") : setGeoData(res.data);
    } catch (err) {
      console.error('Geo Error:', err);
    } finally {
      setGeoLoading(false)
    }
  };


  const [weatherData, setWeatherData] = useState<Record<string, any>>({});

  const fetchWeatherData = async (lat: number = 51.51, lon: number =  0.12) => { //cnt: number = 8
    console.log("trying to fetch weather data..") //ERROR ISSUES HERE
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    //city = 'London';
    try {
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/forecast`, {
        params: {
          lat: lat,
          lon: lon,
          //cnt: cnt,
          units: "metric",
          appid: API_KEY,
        },
      });
      console.log("Fetched Weather data:", res.data);
      setWeatherData(res.data)
    } catch (err) {
      console.error('Weather Error:', err);
    }
  };

  
  const [currentWeatherData, setCurrentWeatherData] = useState<Record<string, any>>({});

  const fetchCurrentWeatherData = async (lat: number = 51.51, lon: number =  0.12, cnt: number = 8) => {
    console.log("trying to fetch current weather data..") //ERROR ISSUES HERE
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    //city = 'London';
    try {
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
          lat: lat,
          lon: lon,
          cnt: cnt,
          units: "metric",
          appid: API_KEY,
        },
      });
      console.log("Fetched Current Weather data:", res.data);
      setCurrentWeatherData(res.data)
    } catch (err) {
      console.error('Current Weather Error:', err);
    }
  };

  const [airData, setAirData] = useState<Record<string, any>>({});
  const [airLoading, setairLoading] = useState(true)

  const fetchAirData = async (lat: number = 51.51, lon: number =  0.12) => {
    console.log("trying to fetch Air data..") //ERROR ISSUES HERE
    const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    try {
      const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution`, {
        params: {
          lat: lat,
          lon: lon,
          appid: API_KEY,
        },
      });
      console.log("Fetched Air data:", res.data);
      setAirData(res.data)
    } catch (err) {
      console.error('Air Error:', err);
    } finally {
      setairLoading(false)
    }
  };




  // const [mapData, setMapData] = useState<Record<string, any>>({});

  // const fetchMapData = async (layer: string = "precipitation_new", z: number =  0, x: number = 1, y: number = 1) => {
  //   console.log("trying to fetch map data..") //ERROR ISSUES HERE
  //   const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
  //   //city = 'London';
  //   try {
  //     const res = await axios.get(`https://tile.openweathermap.org/map/${layer}/${z}/${x}/${y}.png`, {
  //       params: {
  //         appid: API_KEY,
  //       },
  //     });
  //     console.log("Fetched Map data:", res.data);
  //     setMapData(res.data)
  //   } catch (err) {
  //     console.error('Map Error:', err);
  //   }
  // };




  //console.log("component is up")

  useEffect(() => {
    fetchGeoData()
  }, []);

  useEffect(() => {
    if (geoData.length > 0) {
      fetchWeatherData(geoData[0].lat, geoData[0].lon)
      fetchCurrentWeatherData(geoData[0].lat, geoData[0].lon)
      fetchAirData(geoData[0].lat, geoData[0].lon)
    }
  }, [geoData]);



  // HANDLES THE SEARCH OF THE NAVBAR

  const [inputText, setInputText] = useState("London");
  //let inputText = ""
  
  const navbarSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case

    var lowerCase = e.target.value.toLowerCase();

    setInputText(lowerCase);
    //inputText = lowerCase

    //console.log(inputText)
  }


  const navbarSearchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent page reload
    if (inputText.length == 0) return
    console.log("Submitted:", inputText)
    fetchGeoData(inputText)
  }



  return (
    <SearchSubmitContext.Provider value = {navbarSearchSubmitHandler}>
      <SearchContext.Provider value = {navbarSearchHandler}>
        <AirDataContext.Provider value = {airData}>
          <CurrentWeatherDataContext.Provider value = {currentWeatherData}>
            <WeatherDataContext.Provider value = {weatherData}>
              <GeoDataContext.Provider value={{geoData, geoLoading}}>
                {children}
              </GeoDataContext.Provider>
            </WeatherDataContext.Provider>
          </CurrentWeatherDataContext.Provider>
        </AirDataContext.Provider>
      </SearchContext.Provider>
    </SearchSubmitContext.Provider>
  )
};

export default DataProvider;
