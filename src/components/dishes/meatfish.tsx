import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuMeatFish = [
  {
    img: "/menu_recipe/meat_fish/bulgogi.png",
    title: "Bulgogi",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$175",
  },
  {
    img: "/menu_recipe/meat_fish/fried_chicken.png",
    title: "Fried Chicken",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$180",
  },
  {
    img: "/menu_recipe/meat_fish/fried_fish.png",
    title: "Fried Fish",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$120",
  },
  {
    img: "/menu_recipe/meat_fish/kimchi_friedrice.png",
    title: "Kimchi Fried Rice",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$200",
  },
  {
    img: "/menu_recipe/meat_fish/pigs_feet.png",
    title: "Pig's Feet",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$255",
  },
  {
    img: "/menu_recipe/meat_fish/samgaetang.png",
    title: "Samgaetang",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$225",
  },
  {
    img: "/menu_recipe/meat_fish/samgyupsal.png",
    title: "Samgyupsal",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$210",
  },
];

const meatfish = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/meat_fish/fish_cake_stirfried.png"
          width={500}
          height={500}
          alt="meat&fish"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuMeatFish.map((item, index) => (
            <MenuCard
              key={index}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default meatfish;
