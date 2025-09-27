'use client'

import React from "react"
import Cloud from "./Cloud";

const BackgroundClouds = () => {
  return (
    <div>
        <Cloud x={"translate-x-140"} y = {"-translate-y-10"}/>
        <Cloud x={"-translate-x-190"} y = {"translate-y-20"}/>
        <Cloud x={"translate-x-150"} y = {"translate-y-50"}/>
        <Cloud x={"-translate-x-175"} y = {"translate-y-80"}/>
        <Cloud x={"translate-x-140"} y = {"translate-y-110"}/>
        <Cloud x={"-translate-x-185"} y = {"translate-y-140"}/>
        <Cloud x={"translate-x-155"} y = {"translate-y-170"}/>
        <Cloud x={"-translate-x-175"} y = {"translate-y-200"}/>

        <Cloud x={"translate-x-145"} y = {"translate-y-230"}/>
        <Cloud x={"-translate-x-190"} y = {"translate-y-260"}/>
        <Cloud x={"translate-x-150"} y = {"translate-y-290"}/>
        <Cloud x={"-translate-x-175"} y = {"translate-y-320"}/>
        <Cloud x={"translate-x-140"} y = {"translate-y-350"}/>
    </div>
  )
};

export default BackgroundClouds;
