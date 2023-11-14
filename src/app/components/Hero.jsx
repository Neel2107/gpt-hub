"use client";
import React, { useState } from "react";
import Card from "./Card";
import { gpts } from "../data";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredGpts, setFilteredGpts] = useState(gpts.slice(0, 20));

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredResults = gpts.filter((gpt) => {
      return (
      
        gpt.name?.toLowerCase().includes(query) ||
        gpt.author?.toLowerCase().includes(query) ||
        gpt.description?.toLowerCase().includes(query)
      );
    }).slice(0, 20);

    setFilteredGpts(filteredResults);
  };
  return (
    <div className="px-6 pt-[100px] lg:max-w-screen-2xl m-auto ">
    <div className="theHero h-[70vh] bg-cover flex flex-col rounded-3xl my-3 justify-center ">
        <h2 className="text-5xl p-5 text-white font-bold">
          Search Any GPT Here..
        </h2>
        <div className="searchBox px-5 py-3">
          <input
            type="text"
            placeholder="Search"
            className="border-zinc-100 border-2 px-2 py-1 rounded-xl"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className=" flex flex-col gap-4">
        {/* <div className="alert alert-warning bg-yellow-400 rounded-xl p-4">
          <span className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            temporibus unde harum nulla facere pariatur dignissimos,
          </span>
        </div> */}

        {/* <div className="searchBar flex justify-between items-center border-zinc-100 border-4 rounded-xl p-3">
  
          <span>Total : {gpts.length}</span>
          <div className="searchBox">
            <input
              type="text"
              placeholder="Search"
              className="border-zinc-100 border-2 px-2 py-1 rounded-xl"
            />
          </div>
        </div> */}
        <div className="cards grid grid-cols-3 gap-5 my-5">
          {/* {gpts.map((gpt) => {
            return (
              <Card
                key={gpt.id}
                name={gpt.name}
                author={gpt.author}
                description={gpt.description}
                logo={gpt.logo}
                tools={gpt.tools}
                id={gpt.id}
              />
            );
          })} */}
          {filteredGpts.map((gpt) => (
            <Card
              key={gpt.id}
              name={gpt.name}
              author={gpt.author}
              description={gpt.description}
              logo={gpt.logo}
              tools={gpt.tools}
              id={gpt.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
