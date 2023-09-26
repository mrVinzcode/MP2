import React from "react";
import Dash from "@/components/Dash";
import Image from "next/image";

const Soup = () => {
  return (
    <section className="container pt-10">
      <div className="space-y-4 w-fit mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold">
          Our <span className="text-accent">Soup</span>
        </h2>
        <p className="text-gray-700 max-w-[900px]">
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
                  src="/menu_recipe/soup/chicken_soup.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Chicken Soup
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/cold_noodles.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Cold Noodles
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/fish_cak_soup.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Fish Cake Soup
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/mandu_guk.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Mandu Guk
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/rib_soup.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rib Soup
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/rice_cake_soup.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Rice Cake Soup
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/samgaetang.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Samgaetang
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
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
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Soft Tofu
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src="/menu_recipe/soup/warm_noodleA_soup.png"
                  width={420}
                  height={260}
                />
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Warm Noodle Soup
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Soup;
