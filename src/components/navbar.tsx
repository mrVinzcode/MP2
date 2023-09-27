"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      <nav className="top-0 left-0 right-0 fixed bg-white">
        <div className="flex justify-between items-center lg:pr-6 pl-4 ">
          {/*Desktop View */}
          <Link href="/">
            <Image
              src="/logo2.png"
              className="lg:mx-5 my-2 inline-block"
              height={50}
              width={50}
              alt="logo"
            />
            <span className="font-bold text-black mx-0 rounded-3xl">
              한국의 맛
            </span>
          </Link>
          <ul className="md:flex hidden gap-8 items-center font-semibold text-[18px] text-black">
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="/">Home</Link>
            </li>
            <li className="cursor-pointer  text-md uppercase border-white hover:text-accent">
              <Link href="#feature">Feature</Link>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="#menutab">Menu</Link>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <Link href="#contact">Contact Us</Link>
            </li>

            <Link href="/reservation">
              <button className="cursor-pointer semi-bold bg-accent text-white px-5 rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out ">
                Reserve Now!
              </button>
            </Link>
          </ul>
          {/* Mobile Menu */}

          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-accent md:hidden mr-3 cursor-pointer"
            size={30}
          />
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[-75%]  md:hidden h-screen p-10 ease-in-out duration-500 bg-slate-300"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={toggleMenu} className="cursor-pointer">
                <AiOutlineClose className="text-accent " size={30} />
              </div>
            </div>
            {/* Mobile Menu Links*/}
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <Link href="/">Home</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <Link href="#feature">Feature</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <Link href="#menutab">Menu</Link>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <Link href="#contact">Contact Us</Link>
              </li>
              <Link href="/signup">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out "
                >
                  Reserve Now!
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
