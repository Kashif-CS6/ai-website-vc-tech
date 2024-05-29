import React from "react";
import { BsChat, BsChatDotsFill } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Card = ({ heading, desc }) => {
  return (
    <div className="w-72 h-auto lg:h-72  rounded-md rounded-tr-[2.9rem] p-[1px] bg-gradient-to-tr from-blue-500 via-purple-600 to-yellow-300 ">
      <div className="dark:bg-normal-black bg-normal-white rounded-md rounded-tr-[2.9rem] p-[1px] h-full ">
        {/* top icon */}
        <div className="bg-purple-800 py-2 px-2 rounded-md w-fit my-3 mx-2">
          <BsChatDotsFill size={10} fill="white " />
        </div>
        <div className="mx-2 flex flex-col justify-between dark:text-normal-white text-normal-black ">
          <div>
            <h1 className="text-2xl font-[600]">{heading}</h1>
            <p className="text-sm my-3">{desc}</p>
          </div>
          <button className="flex items-center text-sm my-3">
            <p>Explore More</p>
            <IoIosArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
