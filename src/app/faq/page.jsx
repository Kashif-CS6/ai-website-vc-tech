"use client";
import React, { useState } from "react";
import Supportbox from "../components/faq/supportbox";

import Question from "../components/faq/question";
import faqdata from "@/jsondata/faqdata";

const Faq = () => {
  return (
    <div className="dark:bg-custom-bluish bg-normal-white flex justify-center flex-wrap lg:flex-nowrap gap-3 md:gap-20 lg:gap-0">
      {/* left side */}
      <div className="w-80 lg:w-5/12 py-8 lg:py-24">
        <h1 className="text-3xl lg:text-5xl tracking-wider font-[600] dark:text-normal-white text-normal-black">
          Frequently Asked <br />
          questions
        </h1>
        <div className="mt-12 flex flex-col gap-2">
          <Supportbox />
          <Supportbox />
          <Supportbox />
        </div>
      </div>

      {/* right side div */}
      <div className="w-80 lg:w-5/12 py-8 lg:py-24">
        {/* questions */}
        <div className="flex items-center flex-col gap-4">
          {/* question 1 */}
          {faqdata.map((item, index) => {
            return (
              <div>
                <Question questionnum={item.questionnum} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Faq;
