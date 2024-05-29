import Image from "next/image";
import React from "react";
import { IoLogoBitbucket } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import Namecard from "./namecard";

const Quantum = ({ fullname, first, second, rdesc, ldesc, pic }) => {
  return (
    <div className="border lg:h-[30rem] border-gray-800 flex flex-wrap gap-4 lg:gap-0 lg:flex-nowrap py-4 lg:py-0 ">
      {/* left side */}
      <div className="w-80 md:w-[26.5rem] lg:w-96  h-full flex justify-center items-center">
        <div className="text-white flex flex-col gap-2">
          <IoLogoBitbucket size={40} className="text-violet-700" />
          <h1 className="text-2xl font-[600]">{first} </h1>
          <h1 className="text-2xl font-[600]">{second}</h1>
          <p className="text-gray-300 text-xs w-72 text-justify">{ldesc}</p>
        </div>
      </div>
      {/* right side  */}
      <div className="flex-1 flex flex-wrap md:flex-nowrap flex-col items-center justify-center border-l border-l-gray-800">
        {/* image div */}
        <div className="w-80 mx-2 md:mx-0 md:w-10/12 h-56 py-3 md:py-0">
          <Image src={pic} className="w-full h-full" width={400} height={400} />
        </div>
        <div className="lg:w-10/12 flex items-center flex-wrap  justify-center lg:flex-nowrap lg:justify-between">
          <div className="py-1 flex flex-col gap-1 justify-center items-center lg:items-start px-2 lg:px-0">
            <h1 className="text-xl text-white font-[600]">{fullname}</h1>
            <p className="text-xs text-gray-300 md:w-[33rem] lg:w-[28rem] text-justify">
              {rdesc}
            </p>
          </div>
          <button className="text-gray-500 bg-gray-900 rounded-md text-xs p-2 flex justify-center mx-2 md:mx-0 items-center gap-1 w-full md:w-fit">
            Download PDF Now <FiArrowUpRight className="text-yellow-400" />{" "}
          </button>
        </div>
        {/* name section */}
        <div className="flex px-2 md:px-0 flex-wrap md:flex-nowrap items-center justify-between gap-3 lg:gap-0 lg:w-10/12 pt-3 ">
          <Namecard title="pulication date" date="July 2023" />
          <Namecard title="pulication date" date="July 2023" />
          <Namecard title="pulication date" date="July 2023" />
        </div>
      </div>
    </div>
  );
};

export default Quantum;
