"use client";
import { useState, useEffect } from "react";
import { TbBallpenFilled } from "react-icons/tb";
import { IoPlay } from "react-icons/io5";
import { BsSlashLg } from "react-icons/bs";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="flex h-auto dark:bg-custom-bluish bg-normal-white    md:min-h-screen flex-col items-center md:justify-between p-24 relative md:my-0">
      <div
        className={`relative mb-12 md:mb-0  flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[360px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:dark:-z-20 after:-z-0 after:dark:h-[180px] after:h-[0] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:dark:h-[360px] before:lg:h-[0px] `}
      >
        <div className="flex gap-2 flex-col relative">
          <div className="hidden md:block md:absolute -top-10 left-12  h-60 rotate-45 border-r dark:border-gray-900"></div>
          <div className="hidden md:block md:absolute -right-20  h-60 rotate-45 border-r dark:border-gray-900"></div>
          <div className="hidden md:block absolute top-52 left-40 h-36 rotate-45 border-r dark:border-gray-900"></div>
          <div className="hidden md:block absolute -left-20 -bottom-96 h-32 rotate-45 border-r dark:border-gray-900"></div>
          {/* top button */}
          <div className="flex justify-center items-center ">
            <div className="flex gap-2 border-violet-500 items-center justify-center px-3 text-sm md:text-md py-1 border rounded-3xl w-fit mb-6 z-50 ">
              <TbBallpenFilled className="text-blue-500" />
              <p className="bg-gradient-to-r from-blue-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                Our AI generator support at all times
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-2">
            <h1 className="dark:text-normal-white text-normal-black  text-2xl md:text-5xl font-[600]">
              vc-tech: Unleashing
            </h1>

            <div className="flex flex-col items-center w-[40rem] md:w-[42.6rem]">
              <h1 className="text-2xl md:text-5xl font-[600] dark:text-normal-white text-normal-black">
                Intelligent{" "}
                <span className="bg-gradient-to-r from-orange-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                  Solution
                </span>
              </h1>
              <div className="w-80 md:w-[29rem] ">
                <p className="text-md w-full text-start dark:text-normal-white text-normal-black  md:text-center my-4">
                  We use the most recent machine learning and deep learning
                  techniques to create state-of-the-art artificial intelligence
                  models.
                </p>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-3 justify-center">
            <button className="py-1 px-3 border border-violet-500 rounded-full bg-gradient-to-r from-blue-900 via-violet-900 to-indigo-900 text-sm dark:text-normal-white text-normal-white">
              Get Started
            </button>
            <div className="flex items-center gap-1 py-2 px-3 w-fit dark:text-normal-white text-normal-black">
              <IoPlay className="text-sm " />
              <p className="text-sm ">How it works</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-80 h-60 mt-12 md:w-auto lg:w-auto  md:my-6">
        <Image
          src="/banner.jpg"
          className="w-full h-full object-cover lg:object-none lg:h-auto"
          width={1000}
          height={400}
        />
      </div>
    </main>
  );
};

export default Hero;
