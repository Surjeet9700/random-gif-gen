import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;
const  Random = () => {  



  const {gif,loading,fetchData} = useGif();

  
  function changeHandler(e){
    fetchData();
  }




  return (
    <div className="w-1/2  bg-green-400 flex flex-col items-center gap-y-5 mt-[15px]  rounded-lg border-black text-center">
      <h1 className="text-2xl mt-[15px] underline uppercase font-semibold"> A Random Gif</h1>
      {
        loading ? (<Spinner></Spinner>):( <img src={gif} width={450} alt="rand gif" />)
      }
      <button className="w-10/12 mb-[15px] opacity-50 bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg" 
      
      onClick={() => fetchData()}>Generate</button>
      </div>
  );
}

export default Random;

