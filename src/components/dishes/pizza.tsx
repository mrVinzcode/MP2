import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuPizza = [
  {
    img: "/menu_recipe/pizza/Bulgogi-Pizza.png",
    title: "Bulgogi Pizza",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$120",
  },
  {
    img: "/menu_recipe/pizza/corn_pizza.png",
    title: "Corn Pizza",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$180",
  },
  {
    img: "/menu_recipe/pizza/sweet_potato.png",
    title: "Sweet Potato",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$125",
  },
];

const pizza = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/pizza/Spicy-Korean-Kimchi-Pizza.png"
          width={500}
          height={500}
          alt="pizza"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuPizza.map((item, index) => (
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

export default pizza;
