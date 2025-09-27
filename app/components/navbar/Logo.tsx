import React from "react"
import { SiAccuweather } from "react-icons/si";
import { GiFluffyCloud } from "react-icons/gi";

const Search = () => {
  return (
    <div className="flex items-center justify-around ">
      <GiFluffyCloud className="m-0.5" color = "white" size = "50"/>
      {/*#c41437 */}
      <p className="hidden sm:block m-0.5 text-white font-mono font-bold text-2xl">NIMBUS</p>
    </div>
  )
};

export default Search;
