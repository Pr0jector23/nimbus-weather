import React, { useState } from "react"
import { FaSearchLocation } from "react-icons/fa";
import { useSearch, useSearchSubmit } from '../DataProvider';

const Search = () => {

  return (
    <div className="bg-ui-light/25 w-1/2 sm:w-2/5 h-17 flex justify-center items-center rounded-4xl">
      <div className="flex justify-center h-10 py-0 my-0 rounded-md w-9/10">

        <div className="bg-white rounded-l-2xl px-3 h-auto flex justify-start items-center w-full">
          <form onSubmit={useSearchSubmit()} className="w-full">
            <input type="text" onChange={useSearch()} placeholder = "Search Locations"className=" bg-white focus:outline-none px-2 py-1 h-full w-full" />
          </form>
        </div>
        <div className="flex justify-around items-center p-1 rounded-r-2xl bg-white border-l-5 border-l-back-light">
          <FaSearchLocation className="m-0.5" color = "#177192" size = "25"/>
        </div>
      </div>
    </div>
  )
};

export default Search;
