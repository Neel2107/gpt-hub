import React from "react";
import { gpts } from "../data";

const GPT = ({ id }) => {
  console.log("id :", id);
  const filteredData = gpts.filter((item) => item.id === id);
  console.log("filteredData : ", filteredData);
  return (
    <div className="px-6 pt-[100px] lg:max-w-screen-2xl m-auto">
      <div className="main max-w-6xl m-auto">
        {filteredData.map((item) => ( // Added parentheses to properly return JSX content
          <div key={item.id}>
            <div className="topBar flex flex-col gap-2 items-center justify-center">
              <h2 className="text-4xl font-bold">{item.name}</h2>
              <p className="flex justify-center items-end text-center mt-2 mb-10 gap-4">
                By {item.author} <span>2023/11/11</span>
              </p>
            </div>

            <div className="alert alert-warning bg-yellow-400 rounded-xl p-4 mb-5 flex gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
              <span className="">
              Please exercise caution when using data obtained from the internet. Ensure the protection of your personal information to avoid falling prey to scams.
              </span>
            </div>
            <div className="Main flex flex-col gap-4 self-start">
              <p className="coloredBtns flex gap-3">
                
                {item.tools?.[0] ? (
            <span className="text-sm bg-blue-300 px-2 rounded-xl">
              DALL-E
            </span>
          ) : null}

{item.tools?.[1] ? (
            <span className="text-sm bg-yellow-300 px-2 rounded-xl">
            Browsing
            </span>
          ) : null}
                {item.tools?.[2] ? (
            <span className="text-sm bg-pink-300 px-2 rounded-xl">
           Data Analaysis
            </span>
          ) : null}
              </p>

              <p className="theDescription text-green-700 font-bold">
                Description:{" "}
                <span className="text-black font-normal">
                  {item.description}
                </span>
              </p>
              <p className="theWelcome text-green-700 font-bold">
                Welcome Message:{" "}
                <span className="text-black font-normal">
                 {item.welcome_message}
                </span>
              </p>

              <div className="thePrompts flex flex-col gap-2">
                <p className="text-green-700 font-bold">Prompts:</p>
                <ul className="list-disc px-5">
                  
                  {item.prompt_starters?.map((prompt)=>{
                    return(
                   // eslint-disable-next-line react/jsx-key
                   <li>{prompt?.toString()}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        ))} {/* Closing parenthesis for the map function within JSX */}

        <div className="relative w-full min-h-[600px] border-sky-600/50 border-2 rounded-2xl pointer-events-none select-none overflow-hidden mt-3">
          <iframe
            src={"https://chat.openai.com/g/" + id}
            className="absolute inset-0 w-full h-full"
            frameBorder="0"
          ></iframe>
        </div>

        <div className="mt-10"></div>
      </div>
    </div>
  );
};

export default GPT;
