import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center ">
      <h1
        className="bg-white uppercase 
       w-11/12 text-center mt-[40px] justify-center px-10 py-2
       items-center text-4xl font-bold  rounded-md"
      >
        Random Gifs
      </h1>
      <div className="flex flex-col w-full items-center ">
        <Random></Random>
        <Tag></Tag>
      </div>
    </div>
  );
}
