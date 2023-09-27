import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuDessert = [
  {
    img: "/menu_recipe/desserts/doughnut.png",
    title: "Doughnut",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$80",
  },
  {
    img: "/menu_recipe/desserts/easy_dango.png",
    title: "Easy Dango",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$90",
  },
  {
    img: "/menu_recipe/desserts/mango_pancake.png",
    title: "Mango Pancakes",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$100",
  },
  {
    img: "/menu_recipe/desserts/pressed_cookies.png",
    title: "Pressed Cookies",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$120",
  },
];
const Dessert = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/desserts/corndog.png"
          width={500}
          height={500}
          alt="desserts"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuDessert.map((item, index) => (
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

export default Dessert;
