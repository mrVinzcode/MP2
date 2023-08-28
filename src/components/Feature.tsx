import React from "react";
import Dash from "./Dash";
import Image from "next/image";

const Feature = () => {
  return (
    <section className="container pt-20">
      <h2 className="text-6xl font-bold">Our</h2>
      <h2 className="text-6xl font-bold pt-2">
        Featured <span className="text-accent">Food</span>
      </h2>

      <p className="max-w-[800px] pt-10 text-gray-700 text-2xl">
        &quot;Experience a feast of authentic Korean flavors at our table! From
        the irresistible crunch of Korean fried chicken to the colorful artistry
        of bibimbap and the delightful rolls of gimbap, each dish tells a story
        of tradition and taste. Join us in savoring these iconic flavors and
        embark on a culinary journey through Korea&rsquo;s finest
        delicacies!&quot;
      </p>

      <Dash />

      <div className="grid md:grid-cols-[1fr,37%,1fr] gap-16 mt-10">
        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] rounded-sm sm:max-w-full h-auto shadow-2xl"
            src="/grid_1.png"
            width={300}
            height={600}
            alt="grid image"
          />

          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Korean Bibimbap</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              &quot;Korean Bibimbap: A Colorful Harmony of Fresh Ingredients.
              Each Bowl Offers a Burst of Flavors and Textures, a Journey
              Through Korean Cuisine.&quot;
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto">
          <Image
            className="w-[100%] max-w-[400px] sm:max-w-full h-auto rounded-sm shadow-2xl"
            src="/grid_2.png"
            width={500}
            height={900}
            alt="grid image"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Korean Gimbap</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              &quot;Korean Gimbap: A Flavorful Symphony Rolled into Every Bite.
              Fresh Ingredients, Delightful Textures, and a Taste of
              Korea&rsquo;s Culinary Artistry.&quot;
            </p>
          </div>
        </div>

        <div className="w-fit mx-auto self-end">
          <Image
            className="w-[100%] max-w-[400px] rounded-sm sm:max-w-full h-auto shadow-2xl"
            src="/grid_3.png"
            width={500}
            height={900}
            alt="grid image"
          />
          <div className="space-y-4">
            <Dash />
            <h2 className="font-medium text-xl">Korean Fried Chicken</h2>
            <p className="text-gray-700 text-[14px] xl:text-[16px]">
              &quot;Korean Fried Chicken: Irresistibly Crispy, Bursting with
              Bold Flavors. A Crunchy Delight That Takes Taste to New
              Heights!&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
