import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="dark:bg-custom-bluish bg-normal-white border border-gray-800">
      <div className="flex flex-wrap md:flex-nowrap p-10 gap-4 md:gap-0">
        {/* 1st section */}
        <div className="dark:text-grey-small text-normal-black w-32 md:w-60   font-[400] flex flex-col gap-2 text-sm ">
          <h1 className="font-[600] ">Home</h1>
          <p>Features</p>
          <p>Blogs</p>
          <p>
            Resoures{" "}
            <button className="p-1 text-xs border border-gray-800 rounded-sm">
              New
            </button>
          </p>
          <p>Testimonials</p>
          <p>Contact Us</p>
          <p>Newletter</p>
        </div>
        {/* 2nd section */}
        <div className="dark:text-grey-small text-normal-black w-32 md:w-60  font-[400] flex flex-col gap-2  text-sm">
          <h1 className="font-[600] ">News</h1>
          <p>Trending stories</p>
          <p>Featured videos</p>
          <p>Technology </p>
          <p>Health</p>
          <p>Politics</p>
          <p>Enviroment</p>
        </div>
        {/* 3rd section */}
        <div className="dark:text-grey-small text-normal-black w-32 md:w-60   font-[400] flex flex-col gap-2 text-sm">
          <h1 className="font-[600] ">Blogs</h1>
          <p>Quantum computing</p>
          <p>AI ethics</p>
          <p>Space Exploration </p>
          <p>
            Biotechnology{" "}
            <button className="p-1 text-xs border border-gray-800 rounded-sm">
              New
            </button>
          </p>
          <p>Renewable Energy</p>
          <p>Biohacking</p>
        </div>
        {/* 4th section */}
        <div className="dark:text-grey-small text-normal-black w-32 md:w-60 font-[400] flex flex-col gap-2 text-sm ">
          <h1 className="font-[600]">Podcasts</h1>
          <p>AI revolution</p>

          <p>
            AI revolution{" "}
            <button className="p-1 text-xs border border-gray-800 rounded-sm">
              New
            </button>
          </p>
          <p>TechTalk AI</p>
          <p>AI conversations</p>
        </div>
        {/* 5th section */}
        <div className="dark:text-grey-small text-normal-black w-60  font-[400] flex-col  text-sm ">
          <h1 className="font-[600] mb-1 ">Resources</h1>

          <button className="p-[6px] my-1 flex items-center gap-2 text-xs border border-gray-800 rounded-sm w-fit">
            Whitepapers <HiArrowUpRight className="text-yellow-300" />
          </button>
          <button className="p-[6px] my-1 flex items-center gap-2 text-xs border border-gray-800 rounded-sm w-fit">
            Ebook <HiArrowUpRight className="text-yellow-300" />
          </button>
          <button className="p-[6px] my-1 flex items-center gap-2 text-xs border border-gray-800 rounded-sm w-fit">
            Reports <HiArrowUpRight className="text-yellow-300" />
          </button>
          <button className="p-[6px] my-1 flex items-center gap-2 text-xs border border-gray-800 rounded-sm w-fit">
            Research Papers <HiArrowUpRight className="text-yellow-300" />
          </button>
        </div>
      </div>
      {/* ending footer */}
      <div className="mx-10 border-t border-gray-800 p-6 ">
        <div className="flex justify-center md:justify-between gap-4 md:gap-0 items-center flex-wrap md:flex-nowrap">
          {/* left side */}
          <div className="text-sm dark:text-grey-small text-normal-black flex  items-center gap-5">
            <p>Terms&Conditions</p>
            <p>Privacy Policy</p>
          </div>
          {/* middle side */}
          <div className="flex  items-center gap-4">
            <FaTwitter className="text-white" />
            <FaMedium className="text-white" />
            <FaLinkedin className="text-white" />
          </div>
          {/* right side */}
          <div className="dark:text-grey-small text-normal-black text-sm">
            <p>@2024 FutureTech. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
