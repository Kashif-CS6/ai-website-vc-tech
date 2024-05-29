"use client";
import React, { useState } from "react";

const Indept = () => {
  const [showbutton, setshowbutton] = useState("white paper");
  return (
    <div className="flex  justify-center lg:justify-between flex-wrap  lg:flex-nowrap gap-12 lg:gap-0 p-4 md:p-16">
      {/* left side */}
      <div>
        <button className="p-1 text-gray-300 text-xs bg-gray-700">
          Dives into the details
        </button>
        <h1 className="dark:text-normal-white text-normal-black text-2xl font-[600]">
          Empowering Projects through Custom AI Services
        </h1>
      </div>

      {/* <div className="border border-gray-800 p-[3px] w-fit rounded-md flex gap-1 h-fit dark:text-normal-white text-normal-black ">
        <button
          onClick={() => setshowbutton("white paper")}
          className={`text-xs duration-300 ${
            showbutton === "white paper" ? "bg-gray-800 text-normal-white" : ""
          }  p-2 rounded-md`}
        >
          White papers
        </button>
        <button
          onClick={() => setshowbutton("ebooks")}
          className={`text-xs duration-300  ${
            showbutton === "ebooks" ? "bg-gray-800 text-normal-white" : ""
          } p-2 rounded-md`}
        >
          Ebooks
        </button>
        <button
          onClick={() => setshowbutton("reports")}
          className={`text-xs duration-300  ${
            showbutton === "reports" ? "bg-gray-800 text-normal-white" : ""
          } p-2 rounded-md`}
        >
          Reports
        </button>
      </div> */}
    </div>
  );
};

export default Indept;
