import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuDrinks = [
  {
    img: "/menu_recipe/drinks/dalgona_coffee.png",
    title: "Frid Dumplings",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$55",
  },
  {
    img: "/menu_recipe/drinks/ice_tea.png",
    title: "Ice Tea",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$60",
  },
  {
    img: "/menu_recipe/drinks/mango_milk.png",
    title: "Mango Milk",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$75",
  },
  {
    img: "/menu_recipe/drinks/soju_lemonade_cocktail.png",
    title: "Soju Lemonade Cocktail",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$40",
  },
  {
    img: "/menu_recipe/drinks/soju_yakult.png",
    title: "Soju Yakult",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$120",
  },
  {
    img: "/menu_recipe/drinks/strawberry_milk.png",
    title: "Strawberry Milk",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$150",
  },
  {
    img: "/menu_recipe/drinks/Sweet_Rice_Punch.png",
    title: "Sweet Rice Punch",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$125",
  },
];
const Drinks = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[600px] rounded-2xl mb-6"
          src="/menu_recipe/drinks/soju.png"
          width={500}
          height={500}
          alt="drinks"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuDrinks.map((item, index) => (
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

export default Drinks;
