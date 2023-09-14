import React from "react";
import Dash from "./Dash";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <section className="container pt-40" id="menu">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-6xl md:text-4xl font-bold">
          Our <span className="text-accent">Menu</span>
        </h2>
        <p className="text-gray-700 text-xl max-w-[900px]">
          Indulge in the rich and authentic flavors of Korean cuisine at
          <span className="text-accent text-xl"> Taste of Seoul</span>. Our menu
          is carefully crafted to bring you a delightful culinary experience,
          showcasing a wide range of traditional dishes made with love and
          expertise. From savory appetizers to satisfying main courses,
          we&rsquo;re here to take you on a journey through the vibrant tastes
          of Korea.
        </p>
        <div className="w-fit">
          <Dash />
        </div>
      </div>
      <div className="text-gray-600 body-font py-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/appetizer/fried_dumplings.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Appetizers
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fried Dumplings
                </h2>
                <p className="mt-1">$16.00</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/appetizer">See more</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/meat_fish/bulgogi.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Meat & Fish
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Bulgogi
                </h2>
                <p className="mt-1">$21.15</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/meat_fish">See More</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/pizza/Bulgogi-Pizza.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Pizza
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Bulgogi Pizza
                </h2>
                <p className="mt-1">$12.00</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/pizza">See More</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/salad/potato_salad.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Salad
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Potato Salad
                </h2>
                <p className="mt-1">$18.40</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/salad">See More</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/soft_tofu.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Soup
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Soft Tofu Stew
                </h2>
                <p className="mt-1">$16.00</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/soup">See More</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/deserts/easy_dango.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Deserts
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Easy Dango
                </h2>
                <p className="mt-1">$21.15</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/desert">See More</Link>
                </button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/drinks/soju_yakult.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  Drinks
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Soju Yakult
                </h2>
                <p className="mt-1">$12.00</p>
                <button className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded py-1 px-2 hover:bg-accent hover:text-black duration-150 ease-in-out">
                  <Link href="/drinks">See More</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center "></div>
      </div>
    </section>
  );
};

export default Menu;
