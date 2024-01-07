import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";


const API_KEY =process.env.REACT_APP_GIPHY_API_KEY;
const  Tag = () => {  
  
  const [tag, setTag] = useState('car')

  const {gif,loading,fetchData} = useGif();


  return (
    <div className="w-1/2  bg-blue-500 flex flex-col items-center gap-y-5 mt-[15px]  rounded-lg border-black text-center">
      <h1 className="text-2xl mt-[15px] underline uppercase font-semibold">  Random {tag} Gif</h1>
      {
        loading ? (<Spinner></Spinner>):( <img src={gif} width={450} alt="rand gif" />)
      }

      <input 
      type="text"
      className="w-10/12 mb-[3px] opacity-50 text-center font-bold py-2 px-4 rounded-lg"
      onChange={(e) => setTag(e.target.value)}
      value={tag}
       />
      <button className="w-10/12 mb-[15px] opacity-50 bg-blue-900 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-lg" 
      
      onClick={() => fetchData(tag)}>Generate</button>
      </div>
  );
}

export default Tag;

