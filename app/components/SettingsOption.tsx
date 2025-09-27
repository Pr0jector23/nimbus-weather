'use client'

import React from "react"


interface SettingsOptionProps {
  label: string;
  value: string;
  onSwitch: () => void;
}

const SettingsOption : React.FC<SettingsOptionProps> = ({
    label, value, onSwitch
}) => {

    const boolValue = (value === "true")

  return (
    <div className=" border-b-white border-b-3 w-full p-4 flex justify-between items-center font-mono font-bold text-3xl">
        <span>{label}</span>
        <div className={`rounded-4xl bg-white w-16 flex cursor-pointer p-1 justify-start`} onClick={onSwitch}>
            <div className={`rounded-full w-8 h-8 duration-150 ease-in-out ${boolValue ? "bg-green-600 translate-x-6" : "bg-red-600 translate-x-0"} `}>
                <span></span>
            </div>
        </div>
    </div>
  )
};

export default SettingsOption;
