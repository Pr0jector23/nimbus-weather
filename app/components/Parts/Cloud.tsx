'use client'

import React from "react"

interface CloudProps {
  x: string
  y: string
}

const Cloud:React.FC<CloudProps> = ({
    x,y
}) => {
  return (
    <div className={`absolute ${x} ${y} pointer-events-none`}>
      <img src="/background_cloud.svg" className="h-15 w-auto" />
    </div>
  )
};

export default Cloud;
