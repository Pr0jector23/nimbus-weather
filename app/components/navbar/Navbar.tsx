'use client'

import {useEffect, useState, useContext } from 'react';


import Container from "../Container"
import Logo from "./Logo"
import MoreOptions from "./MoreOptions"
import Search from "./Search"
import WeatherLocation from "./WeatherLocation"
import Settings from './Settings';





const Navbar = () => {

    return (
        <div className="flex justify-center bg-back-dark">
            <div className = "justify-between flex items-center bg-back-dark py-2 w-5/7">
                {/* Logo + title, location + temp + icon, search location*/}
                <Logo />
                <Search />
                <WeatherLocation />
                <MoreOptions />
                <Settings />
            </div>   
        </div>
    )

}

export default Navbar