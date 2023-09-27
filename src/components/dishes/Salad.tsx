import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuSalad = [
  {
    img: "/menu_recipe/salad/broccoli.png",
    title: "Broccoli",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$75",
  },
  {
    img: "/menu_recipe/salad/carrot_salad.png",
    title: "Carrot Salad",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$55",
  },
  {
    img: "/menu_recipe/salad/lettuce_salad.png",
    title: "Lettuce Salad",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$65",
  },
  {
    img: "/menu_recipe/salad/potato_salad.png",
    title: "Potato Salad",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$45",
  },
  {
    img: "/menu_recipe/salad/scallion_salad.png",
    title: "Scallion Salad",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$95",
  },
];
const Salad = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/salad/cucumber_salad.png"
          width={500}
          height={500}
          alt="salad"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuSalad.map((item, index) => (
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

export default Salad;
