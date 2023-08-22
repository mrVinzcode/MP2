import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className="relative">
      <div className="container pt-6 fixed top-0 left-0 right-0">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" height={50} width={50} alt="logo" />
          </Link>
          <ul className="md:flex hidden gap-8 items-center font-semibold text-[14px]">
            <li>Home</li>
            <li>About</li>
            <li>Food</li>
            <li>Dish</li>
            <li>Contact</li>

            <button className="semi-bold bg-accent text-white px-6 rounded-3xl py-2 ">
              SignUp
            </button>
          </ul>

          <AiOutlineMenu className="md:hidden text-accent" size={30} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
