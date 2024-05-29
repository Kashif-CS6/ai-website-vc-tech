"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoFlowerSharp } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { usePathname } from "next/navigation";

import Image from "next/image";

const Navbar = ({ shownav, setshow }) => {
  const [theme, setTheme] = useState(localStorage.getItem("mode"));

  const pathname = usePathname();
  console.log("pathname:", pathname);
  let result1 = pathname.split("/").pop();
  console.log(result1);

  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("mode", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("mode");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const [active, setActive] = useState(result1);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the shownav state
  const toggleNav = () => {
    setshow(!shownav); // Toggle the value of shownav
  };

  return (
    <div>
      <div
        className={`dark:bg-custom-bluish bg-white  border border-gray-700 flex items-center justify-between p-4 ${
          shownav ? "p-0 md:p-4 blur-sm lg:blur-0" : "p-4 blur-0"
        }`}
      >
        {/* left side */}
        <div className="flex items-center gap-2">
          <Image src={"/vc-Logo.png"} height={50} width={50} className="" />
          <h1 className="dark:text-white text-black  font-[600]">VC Tech</h1>
        </div>
        {/* middle */}
        <div className="dark:text-gray-300 text-black md:flex items-center gap-4 hidden ">
          <Link
            href={"/"}
            onClick={() => setActive("")}
            className={`duration-200 ${
              active === ""
                ? "border p-1 h-fit border-gray-500 dark:text-white text-black rounded-md w-fit"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setActive("projects")}
            className={`duration-200 ${
              active === "projects"
                ? "border p-1 h-fit border-gray-500 dark:text-white text-black  rounded-md w-fit"
                : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/teams"
            onClick={() => setActive("teams")}
            className={` duration-200 ${
              active === "teams"
                ? "border p-1 h-fit border-gray-500 dark:text-white text-black  rounded-md w-fit"
                : ""
            }`}
          >
            Teams
          </Link>
          <Link
            href="/about"
            onClick={() => setActive("about")}
            className={`duration-200 ${
              active === "about"
                ? "border p-1 h-fit border-gray-500 dark:text-white text-black  rounded-md w-fit"
                : ""
            }`}
          >
            About
          </Link>
        </div>

        {/* right */}
        <div className="flex items-center gap-8">
          <button
            onClick={handleThemeSwitch}
            className="text-black dark:text-white hidden md:block"
          >
            {theme === "dark" ? <FaMoon className="" /> : <FaSun />}
          </button>
          <Link
            href="/contact"
            className={`bg-violet-600 text-white text-sm rounded-md p-2 hidden md:block `}
          >
            Contact us
          </Link>
        </div>

        <button
          className="dark:text-normal-white text-normal-black md:hidden"
          onClick={toggleNav}
        >
          <CiMenuFries size={30} />
        </button>
      </div>

      {/* for medium screens */}

      <div
        className={`w-64 duration-300 lg:hidden ${
          shownav ? "left-0 duration-300" : "left-[-100%] duration-300 "
        } dark:bg-normal-black bg-normal-white px-6 py-4 inset-0 z-50 fixed flex flex-col items-center  `}
      >
        <div className="flex flex-col gap-5 mt-20 duration-300">
          <button
            onClick={toggleNav}
            className="cursor-pointer top-4 absolute right-6 text-xl"
          >
            X
          </button>
          <Link
            href={"/"}
            onClick={() => setActive("")}
            className={`duration-200 ${
              active === ""
                ? "border p-1 h-fit border-gray-500 dark:text-normal-white text-normal-black rounded-md w-fit"
                : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            onClick={() => setActive("projects")}
            className={`duration-200 ${
              active === "projects"
                ? "border p-1 h-fit border-gray-500 dark:text-normal-white text-normal-black rounded-md w-fit"
                : ""
            }`}
          >
            Projects
          </Link>
          <Link
            href="/teams"
            onClick={() => setActive("teams")}
            className={`duration-200 ${
              active === "teams"
                ? "border p-1 h-fit border-gray-500 dark:text-normal-white text-normal-black rounded-md w-fit"
                : ""
            }`}
          >
            Teams
          </Link>
          <Link
            href="/about"
            onClick={() => setActive("about")}
            className={`duration-200 ${
              active === "about"
                ? "border p-1 h-fit border-gray-500 dark:text-normal-white text-normal-black rounded-md w-fit"
                : ""
            }`}
          >
            About
          </Link>
          <div className="flex flex-col gap-4">
            <button
              onClick={handleThemeSwitch}
              className="text-black dark:text-white"
            >
              {theme === "dark" ? <FaMoon className="" /> : <FaSun />}
            </button>
            <Link
              href="/contact"
              className="bg-violet-600 dark:text-normal-white text-normal-black text-sm rounded-md p-2"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
