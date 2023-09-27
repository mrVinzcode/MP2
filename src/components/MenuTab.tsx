"use client";

import React, { useState } from "react";
import Dash from "./Dash";
import Appetizer from "./dishes/appetizer";
import Meatfish from "./dishes/meatfish";
import Pizza from "./dishes/pizza";
import Salad from "./dishes/Salad";
import Soup from "./dishes/Soup";
import Dessert from "./dishes/Dessert";
import Drinks from "./dishes/Drinks";

const FoodTabs = () => {
  const [activeTab, setActiveTab] = useState("Appetizer");

  const tabs = [
    "Appetizer",
    "Meat & Fish",
    "Pizza",
    "Salad",
    "Soup",
    "Desserts",
    "Drinks",
  ];

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  return (
    <div className="container pt-40" id="menutab">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700 text-xl max-w-[900px]">
          Indulge in the rich and authentic flavors of Korean cuisine at
          <span className="text-accent text-xl"> Taste of Seoul</span>. Our menu
          is carefully crafted to bring you a delightful culinary experience,
          showcasing a wide range of traditional dishes made with love and
          expertise. From savory appetizers to satisfying main courses, we’re
          here to take you on a journey through the vibrant tastes of Korea.
        </p>
        <div className="w-fit">
          <Dash />
        </div>
      </div>
      <div className="p-14">
        <div className="flex flex-wrap md:flex-row justify-center text-xl font-bold mb-4 ">
          {tabs.map((category) => (
            <button
              key={category}
              className={`${
                activeTab === category ? "border-b-4 border-accent" : ""
              } focus:outline-none px-4  py-2 mb-2`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <div
            className={`${
              activeTab === "Appetizer" ? "block" : "hidden"
            } text-gray-700  `}
          >
            <Appetizer />
          </div>
        </div>
        {/* Content for the 'Appetizer' category */}
        {/* Add your content here */}

        <div
          className={`${
            activeTab === "Meat & Fish" ? "block" : "hidden"
          } text-gray-700 `}
        >
          <Meatfish />
        </div>
        <div
          className={`${
            activeTab === "Pizza" ? "block" : "hidden"
          } text-gray-700`}
        >
          <Pizza />
          {/* Content for the 'Pizza' category */}
          {/* Add your content here */}
        </div>
        <div
          className={`${
            activeTab === "Salad" ? "block" : "hidden"
          } text-gray-700`}
        >
          <Salad />
          {/* Content for the 'Salad' category */}
          {/* Add your content here */}
        </div>
        <div
          className={`${
            activeTab === "Soup" ? "block" : "hidden"
          } text-gray-700`}
        >
          <Soup />
          {/* Content for the 'Soup' category */}
          {/* Add your content here */}
        </div>
        <div
          className={`${
            activeTab === "Desserts" ? "block" : "hidden"
          } text-gray-700`}
        >
          <Dessert />
          {/* Content for the 'Desserts' category */}
          {/* Add your content here */}
        </div>
        <div
          className={`${
            activeTab === "Drinks" ? "block" : "hidden"
          } text-gray-700`}
        >
          <Drinks />
          {/* Content for the 'Drinks' category */}
          {/* Add your content here */}
        </div>
      </div>
    </div>
  );
};

export default FoodTabs;
