"use client"
import React from "react";

const GPT = ({params}) => {
  console.log(params, "this is params")
  return (
    <div className="px-6 pt-[100px] lg:max-w-screen-2xl m-auto ">
      
      <div className="main max-w-6xl m-auto">

      <div className="topBar  flex flex-col gap-2 items-center justify-center">
        <h2 className="text-4xl font-bold ">Toronto City Council Guide</h2>
        <p className="flex justify-center items-end text-center mt-2 mb-10 gap-4">
          By George Bell <span>2023/11/11</span>
        </p>
      </div>

      <div className="alert alert-warning bg-yellow-400 rounded-xl p-4 mb-5">
        <span className="">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
          temporibus unde harum nulla facere pariatur dignissimos,
        </span>
      </div>
      <div className="Main flex flex-col gap-4 self-start">
        <p className="coloredBtns flex gap-3">
          <span className="text-sm bg-blue-300 px-2 rounded-xl">DALL-E</span>
          <span className="text-sm bg-yellow-300 px-2 rounded-xl">
            BROWSING
          </span>
          <span className="text-sm bg-pink-300 px-2 rounded-xl">
            Data Analysis
          </span>
        </p>

        <p className="theDescription text-green-700 font-bold">
          Description:{" "}
          <span className="text-black font-normal">
            {" "}
            Toronto City Council expert.
          </span>
        </p>
        <p className="theWelcome text-green-700 font-bold">
          Welcome Message:{" "}
          <span className="text-black font-normal">
            {" "}
            Welcome to the Toronto City Council assistant!
          </span>
        </p>

        <div className="thePrompts flex flex-col gap-2">
          <p className=" text-green-700 font-bold">Prompts:</p>
          <ul className="list-disc px-5">
            <li className="">Explain today&apos;s council meeting agenda.</li>
            <li className="">Explain today&apos;s council meeting agenda.</li>
            <li className="">Explain today&apos;s council meeting agenda.</li>
            <li className="">Explain today&apos;s council meeting agenda.</li>
          </ul>
        </div>


      </div>

      <div className=" relative w-full min-h-[600px] border-sky-600/50 border-2 rounded-2xl pointer-events-none select-none overflow-hidden mt-3">

        <iframe src="https://chat.openai.com/g/g-0GxNbgD2H" className="absolute inset-0 w-full h-full" frameBorder="0"></iframe>
</div>

<div className="mt-10">

</div>
</div>
    </div>
  );
};

export default GPT;
