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
      <nav className="container pt-2 top-0 left-0 right-0 fixed">
        <div className="flex justify-between items-center ">
          {/*Desktop View */}
          <a href="/">
            <Image src="/logo2.png" height={70} width={70} alt="logo" />
            <p
              className="semi-bold text-white rounded-3xl"
              style={{ color: "rgba(128, 128, 128, 0.7)" }}
            >
              한국의 맛
            </p>
          </a>
          <ul className="md:flex hidden gap-8 items-center font-semibold text-[18px] text-black">
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <a href="/">Home</a>
            </li>
            <li className="cursor-pointer  text-md uppercase border-white hover:text-accent">
              <a href="#feature">Feature</a>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <a href="#menu">Menu</a>
            </li>
            <li className="cursor-pointer text-md uppercase border-white hover:text-accent">
              <a href="#contact">Contacts</a>
            </li>

            <a href="/signup">
              <button className="cursor-pointer semi-bold bg-accent text-white px-6 rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out ">
                Reserve Now!
              </button>
            </a>
          </ul>
          {/* Mobile Menu */}

          <AiOutlineMenu
            onClick={toggleMenu}
            className="text-accent md:hidden mb-10 cursor-pointer"
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
                <a href="/">Home</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <a href="#feature">Feature</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <a href="#menu">Menu</a>
              </li>
              <li
                onClick={() => setMenuOpen(false)}
                className="py-2 hover:bg-accent rounded-3xl text-xl text-center p-10 my-2"
              >
                <a href="#contact">Contacts</a>
              </li>
              <a href="/signup">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="my-2 p-10 text-center cursor-pointer semi-bold bg-accent text-white rounded-3xl py-2 hover:bg-accent hover:text-black duration-150 ease-in-out "
                >
                  Reserve Now!
                </button>
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
