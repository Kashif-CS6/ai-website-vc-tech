import Image from "next/image";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Realtime = () => {
  return (
    <main className="flex h-auto  md:min-h-screen flex-col items-center md:justify-between p-24 relative md:my-0">
      <div className="relative mb-12 md:mb-0  flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[36px] before:lg:dark:h-[360px]">
        {/* upper container */}
        <div className="flex flex-wrap  flex-col md:flex-row items-center lg:items-center gap-4 lg:gap-48 lg:justify-between justify-center">
          {/* left */}
          <div className="w-80  md:w-96">
            <h1 className="text-3xl font-[600] dark:text-normal-white text-normal-black">Real-time data</h1>
            <div className="mt-3 mb-2">
              <div className="flex items-center gap-2 dark:text-normal-white text-normal-black">
                <BsFillCheckCircleFill className="text-green-400" />
                <span>What it takes to create an image?</span>
              </div>
              <p className="text-sm mt-2 dark:text-normal-white text-normal-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda et nobis exercitationem.
              </p>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="flex items-center gap-2 my-2 dark:text-normal-white text-normal-black">
              <BsFillCheckCircleFill className="text-green-400" />
              <span>What it takes to create an image?</span>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="flex items-center gap-2 my-2 dark:text-normal-white text-normal-black">
              <BsFillCheckCircleFill className="text-green-400" />
              <span>What it takes to create an image?</span>
            </div>
            <div className="border-b border-gray-900"></div>
          </div>

          {/* right */}
          <div className="md:p-4 ">
            <Image
              src="/Images-2.png"
              className="w-80 md:w-full h-auto lg:h-auto lg:w-80 "
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* bottom div */}

        <div className="flex flex-wrap  flex-col md:flex-row items-center lg:items-center gap-4 lg:gap-48 lg:justify-between justify-center my-4">
          {/* left */}
          <div className="md:p-4">
            <Image
              src="/Images-3.png"
              className="w-80 md:w-full h-auto lg:h-auto lg:w-80 rounded-xl"
              width={500}
              height={300}
            />
          </div>
          {/* right */}
          <div className="w-80 md:w-96 dark:text-normal-white text-normal-black">
            <h1 className="text-3xl font-[600]">
              We develop bright digital future.
            </h1>
            <div className="mt-3 mb-2">
              <div className="flex items-center gap-2 dark:text-normal-white text-normal-black">
                <BsFillCheckCircleFill className="text-green-400" />
                <span>What it takes to create an image?</span>
              </div>
              <p className="text-sm mt-2 dark:text-normal-white text-normal-black">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda et nobis exercitationem.
              </p>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="flex items-center gap-2 my-2">
              <BsFillCheckCircleFill className="text-green-400" />
              <span>What it takes to create an image?</span>
            </div>
            <div className="border-b border-gray-900"></div>
            <div className="flex items-center gap-2 my-2 dark:text-normal-white text-normal-black">
              <BsFillCheckCircleFill className="text-green-400" />
              <span>What it takes to create an image?</span>
            </div>
            <div className="border-b border-gray-900"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Realtime;
