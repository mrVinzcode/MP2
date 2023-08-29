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
        "X-RapidAPI-Key": "5f52b783f5msh27e3af414540a07p1d1ab1jsn82ebe9495d7a",
        "X-RapidAPI-Host": "rapid-translate-multi-traduction.p.rapidapi.com",
      },
      data: {
        from: "en",
        to: "ar",
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
    <section>
      <div className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              English to Korean Translation Services
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              🌏 Are you looking to bridge the language gap? We&rsquo;ve got you
              covered! 🌏
            </p>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <div className="relative flex-grow w-full">
              <label
                htmlFor="full-name"
                className="leading-7 text-sm text-gray-600"
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
              className="text-white bg-accent border-0 py-2 px-8 focus:outline-none hover:text-black rounded text-lg"
            >
              Translate
            </button>
          </div>
          <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
            <h1 className="text-2xl py-3 px-5 w-full text-accent text-center sm:w-auto">
              <span className="text-xl text-black font-semibold">
                See Result :
              </span>
              {value}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mapbox;
