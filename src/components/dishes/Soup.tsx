import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuSoup = [
  {
    img: "/menu_recipe/soup/chicken_soup.png",
    title: "Chicken Soup",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$20",
  },
  {
    img: "/menu_recipe/soup/cold_noodles.png",
    title: "Cold Noodles",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$23",
  },
  {
    img: "/menu_recipe/soup/fish_cak_soup.png",
    title: "Fish Cake Soup",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$45",
  },
  {
    img: "/menu_recipe/soup/rice_cake_soup.png",
    title: "Rice Cake Soup",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$65",
  },
  {
    img: "/menu_recipe/soup/samgaetang.png",
    title: "Samgaetang",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$70",
  },
  {
    img: "/menu_recipe/soup/soft_tofu.png",
    title: "Soft Tofu",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$69",
  },
];
const Soup = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[600px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/soup/mandu_guk.png"
          width={500}
          height={500}
          alt="soup"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid w-fit mx-auto sm:grid-cols-2 gap-4">
          {menuSoup.map((item, index) => (
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

export default Soup;
