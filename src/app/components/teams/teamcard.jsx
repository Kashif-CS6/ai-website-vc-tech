"use client";
import React from "react";
import { BsLinkedin } from "react-icons/bs";

const TeamCard = () => {
  return (
    <div className="dark:text-normal-white text-normal-black flex flex-col gap-2 ">
      <img
        src="https://plus.unsplash.com/premium_photo-1674939148088-d71acc1541ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-20 h-20 rounded-full mx-1"
        alt=""
      />
      <h1 className="mt-4 font-[600]">Emma Johnson</h1>
      <h1 className="text-sm">CEO</h1>
      <div className="flex flex-col gap-[2px]">
        <a href="#" className="underline text-xs">
          email@gmail.com
        </a>
        <a href="#" className="underline text-xs">
          30303003030
        </a>
      </div>
      <button className="flex items-center gap-1 bg-blue-700 px-2 rounded-md w-fit">
        <BsLinkedin className="dark:text-normal-white text-normal-black"/>
        LinkedIn
      </button>
    </div>
  );
};

export default TeamCard;
