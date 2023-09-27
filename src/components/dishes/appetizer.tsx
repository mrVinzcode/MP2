import Image from "next/image";
import React from "react";
import MenuCard from "../MenuCard";

const menuAppetizer = [
  {
    img: "/menu_recipe/appetizer/fried_dumplings.png",
    title: "Frid Dumplings",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$80",
  },
  {
    img: "/menu_recipe/appetizer/fried_fish.png",
    title: "Fried Fish",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$90",
  },
  {
    img: "/menu_recipe/appetizer/long_rice.png",
    title: "Long Rice Cake",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$100",
  },
  {
    img: "/menu_recipe/appetizer/seafoodpancake_tizer_1.png",
    title: "Sea Food Pancakes",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$120",
  },
  {
    img: "/menu_recipe/appetizer/tempura.png",
    title: "Tempura",
    desc: "lorem ipsum dolor sit amet, consectetur adipiscing",
    price: "$150",
  },
];

const Appetizer = () => {
  return (
    <section className="flex flex-col lg:flex-row lg:space-x-10 pt-10">
      <div className="w-full lg:w-1/2 order-1 lg:order-1">
        <Image
          className="w-full lg:max-w-[800px] h-auto lg:h-[500px] rounded-2xl mb-6"
          src="/menu_recipe/appetizer/calamari.png"
          width={800}
          height={500}
          alt="appetizer"
        />
      </div>
      <div className="w-full lg:w-1/2 order-2 lg:order-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
          {menuAppetizer.map((item, index) => (
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

export default Appetizer;
