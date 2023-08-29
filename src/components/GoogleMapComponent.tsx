"use client";

import { useState } from "react";
import axios from "axios";

const Mapbox = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  const translateText = async () => {
    const options = {
      method: "POST",
      url: "https://rapid-translate-multi-traduction.p.rapidapi.com/t",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "97b773580bmsh57dacccd8fcdc36p1f2617jsn2ff41c381779",
        "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
      },
      data: {
        from: "en",
        to: "ko",
        e: "",
        q: [`${text}`],
      },
    };

    try {
      const response = await axios.request(options);
      setValue(response.data[0]);
      console.log(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  function handleTranslate() {
    translateText();
  }

  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="translation text"
    //     value={text}
    //     onChange={(e) => setText(e.target.value)}
    //   />
    //   <button
    //     onClick={handleTranslate}
    //     classNameName="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded-3xl py-2 px-5 hover:bg-accent hover:text-black duration-150 ease-in-out"
    //   >
    //     Translate
    //   </button>
    //   <div classNameName="container">
    //     <h1 classNameName="bg-accent border-4 py-3 px-5 border-indigo-500/100 ">
    //       Result :{value}
    //     </h1>
    //   </div>
    // </div>
    // <section className="text-gray-600 body-font">
    //   <div className="container px-5 py-24 mx-auto">
    //     <div className="flex flex-col text-center w-full mb-12">
    //       <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
    //         Master Cleanse Reliac Heirloom
    //       </h1>
    //       <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
    //         Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
    //         gentrify,
    //       </p>
    //     </div>
    //     <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
    //       <div className="relative flex-grow w-full">
    //         <label
    //           htmlFor="full-name"
    //           className="leading-7 text-sm text-gray-600"
    //         >
    //           Translate to Korean Language
    //         </label>
    //         <input
    //           type="text"
    //           value={text}
    //           id="full-name"
    //           name="full-name"
    //           className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    //           onChange={(e) => setText(e.target.value)}
    //         />
    //       </div>
    //       <button
    //         onClick={handleTranslate}
    //         className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
    //       >
    //         Translate
    //       </button>
    //       <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
    //         <h1 className="bg-accent border-4 py-3 px-5 border-indigo-500/100 ">
    //           See Result :{value}
    //         </h1>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify,
          </p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600 block pb-2"
            >
              Translate to Korean Language
            </label>
            <input
              type="text"
              value={text}
              id="full-name"
              name="full-name"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            onClick={handleTranslate}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Translate
          </button>
        </div>
        {/* New div for "See Result" */}
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end pt-4">
          <h1 className=" border-4 py-3 px-5 border-indigo-500/100">
            See Result: {value}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Mapbox;
