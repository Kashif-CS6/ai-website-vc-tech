import Image from "next/image";
import React from "react";
import Aboutbox from "./aboutbox";

const Benefits = () => {
  return (
    <div className="py-8">
      <div className=" flex flex-col lg:flex-row gap-20 lg:gap-96 items-center justify-center py-8">
        {/* left side content */}

        <div className="flex flex-col gap-2 w-80 md:w-auto items-center md:items-start dark:text-normal-white text-normal-black">
          <h1 className="text-2xl md:text-4xl font-[600]">Best Quality</h1>
          <h1 className="text-2xl md:text-4xl font-[600]">and world Class</h1>
          <h1 className="text-2xl md:text-4xl font-[600] dark:text-[rgba(255,255,255,0.4)] ">
            AI Models
          </h1>
          <p className="text-sm text-center md:text-start md:text-md py-3 w-80 md:w-[23.3rem]">
            Leading edge technology business vc-tech specializes in artificial
            intelligence (AI)-driven computer vision solutions for edge
            platforms.
          </p>
          <button className="text-xs md:text-sm w-fit py-2 px-2 rounded-full bg-purple-400 text-white font-[400] md:font-[500]">
            Save now
          </button>
        </div>

        {/* right side div */}
        <div className="w-80 flex justify-center lg:justify-normal md:w-11/12 lg:w-96 h-96 rounded-3xl">
          <Image
            src="/ai9.jpg"
            className="h-full rounded-3xl"
            width={500}
            height={500}
            alt=""
          />
        </div>
      </div>

      {/* middle section */}
      <div className="flex flex-col items-center justify-center mt-8 dark:text-normal-white text-normal-black">
        <h1 className="text-2xl md:text-4xl font-[600]">Lets know about us</h1>
        <h1 className="text-2xl md:text-4xl font-[600] dark:text-[rgba(255,255,255,0.3)]">
          WC Tech AI
        </h1>
      </div>
      {/* last section */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Aboutbox />
        <Aboutbox />
        <Aboutbox />
        <Aboutbox />
      </div>
    </div>
  );
};

export default Benefits;
