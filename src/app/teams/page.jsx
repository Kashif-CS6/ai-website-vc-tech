"use client";
import React from "react";
import TeamCard from "../components/teams/teamcard";

function Teams() {
  return (
    <div
      className="dark:bg-custom-bluish bg-normal-white py-4 md:h-[140vh] lg:h-[160vh]"
      
    >
      <div className="lg:bg-[url('/bgpattern.png')] object-contain lg:w-8/12 flex justify-center lg:mx-auto h-32">
        <div className="relative mb-12 md:mb-0 my-4  flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:dark:h-[360px] before:lg:h-[200px]   ">
          <h1 className="text-3xl md:text-5xl font-[600] mx-2 md:mx-0  md:text-center dark:text-normal-white text-normal-black  ">
            Meet our Team
          </h1>
        </div>
      </div>
      {/* meet our teams */}
      <div
        className="flex items-center flex-wrap gap-10 md:gap-20 lg:gap-36 justify-center  lg:p-20"
        
      >
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
}

export default Teams;
