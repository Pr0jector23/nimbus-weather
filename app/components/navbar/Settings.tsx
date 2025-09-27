'use client'

import React, { useState } from "react"
import { IoSettingsSharp } from "react-icons/io5";
import SettingsModal from "../SettingsModal";


const Settings = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  

  return (
    <div className="text-white">
      <IoSettingsSharp className="cursor-pointer" size={45} onClick={openModal}/>
      <SettingsModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
};
export default Settings;
