'use client'

import React, { useEffect } from "react"
import { useLocalStorage } from "usehooks-ts";
import SettingsOption from "./SettingsOption";
import { RiCloseCircleFill } from "react-icons/ri";

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
    isOpen, onClose 
}) => {

    const [squares, setSquares] = useLocalStorage('squares', "true")

    useEffect(() => {
        if (isOpen) {
        document.body.classList.add("overflow-hidden");
        } else {
        document.body.classList.remove("overflow-hidden");
        }

        // Cleanup in case component unmounts while modal is open
        return () => {
        document.body.classList.remove("overflow-hidden");
        };
  }, [isOpen]);


    if (!isOpen) return null;
    
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-md p-6 bg-[#5196ae]/90 backdrop-blur-sm rounded-3xl shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white hover:text-gray-800 cursor-pointer"
        >
          <RiCloseCircleFill size={30}/>
        </button>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <SettingsOption label={"Enable Squares"} value = {squares} onSwitch={() => setSquares(squares == "false" ? "true" : "false")}/>
      </div>
    </div>
  )
};

export default SettingsModal;
