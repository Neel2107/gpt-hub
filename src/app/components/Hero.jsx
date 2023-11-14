"use client"
import React from "react";
import Card from "./Card";
import { gpts } from "../data";

const Hero = () => {
  return (
    <div className="px-6 pt-[100px] lg:max-w-screen-2xl m-auto">
      <div className=" flex flex-col gap-4">

        <div className="alert alert-warning bg-yellow-400 rounded-xl p-4">
          <span className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            temporibus unde harum nulla facere pariatur dignissimos,
          </span>
        </div>
        <div className="searchBar flex justify-between items-center border-zinc-100 border-4 rounded-xl p-3">
  
          <span>Total : {gpts.length}</span>
          <div className="searchBox">
            <input
              type="text"
              placeholder="Search"
              className="border-zinc-100 border-2 px-2 py-1 rounded-xl"
            />
          </div>
        </div>
        <div className="cards grid grid-cols-3 gap-5">

          
      {gpts.map((gpt) => {
  
          
            return (
              <Card  key={gpt.id } name={gpt.name}
              
              author={gpt.author}
              description={gpt.description}
              logo={gpt.logo}
              tools={gpt.tools}
              id={gpt.id}
              />
            );
       
        
        })}
          
          

         
        </div>
      </div>
    </div>
  );
};

export default Hero;
