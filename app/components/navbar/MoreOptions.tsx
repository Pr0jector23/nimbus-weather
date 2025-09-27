'use client'

import React from "react"
//import { useRouter } from 'next/router';
import { GiTreasureMap } from "react-icons/gi";
import { RiTreasureMapFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { FaGlobeAmericas } from "react-icons/fa";

const MoreOptions = () => {

    //const router = useRouter();

    const scrollToSection = (id: string) => {
    //router.push(`#${id}`); // updates URL hash
    const el = document.getElementById(id);
    if (el) {
        const yOffset = -80; // adjust for navbar height
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
    };

  return (
    <div>
        <div className="hidden md:flex justify-around bg-ui-light/25 h-17 p-1 rounded-4xl text-white font-mono font-bold text-xl">
            <div className="group flex items-center mx-5 cursor-pointer hover:text-2xl duration-100 ease-in" onClick={() => scrollToSection("map")}>
                <FaGlobeAmericas className="m-0.5 mr-2 group-hover:scale-125 duration-300 ease-in transition-transform transform group-hover:animate-spin" color = "white" size = "30"/>
                Map
            </div>
            <div className="text-4xl flex items-center">
                |
            </div>
            <div className="flex items-center mx-5 cursor-pointer">
                About Us
            </div>
        </div>

        <div>
            <TiThMenu className=" block md:hidden m-0.5 mr-2" color = "white" size = "50"/>
        </div>
    </div>
  )
};

export default MoreOptions;
