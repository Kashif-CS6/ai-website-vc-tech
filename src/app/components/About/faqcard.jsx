"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Faqcard = ({ heading, description, questionnum }) => {
  const [showanswer, setshowanswer] = useState(
    questionnum === "question1" ? true : false
  );

  return (
    <div className="bg-[rgba(128,128,128,0.2)] w-80 lg:w-96 md:h-fit border rounded-3xl py-6">
      {/* top section */}
      <div className="dark:text-normal-white text-normal-black items-center flex justify-between mx-4 pb-2 font-semibold">
        <h1>How astraLogic AI work?</h1>
        {showanswer ? (
          <button
            className="cursor-pointer dark:text-normal-white text-normal-black hover:text-blue-400"
            onClick={() => {
              setshowanswer(!showanswer);
            }}
          >
            <FaMinus />
          </button>
        ) : (
          <button
            className="cursor-pointer dark:text-normal-white text-normal-black hover:text-blue-400"
            onClick={() => {
              setshowanswer(!showanswer);
            }}
          >
            <FaPlus />
          </button>
        )}
      </div>
      {showanswer ? (
        <p className="mx-4 text-sm dark:text-normal-white text-normal-black">
          elit. Nulla recusandae voluptas rerum earum, laudantium alias tempora
          repellendus culpa ad inventore doloremque abcd lor mfdldsj djfjsa
          jslkjfu erun sjfj ut minus, fuga laboriosam enim sed temporibus porro?
          Dolorem hic quam modisdfasldf safasdfsff sdjf sdfjlsjf hello sir jjr.
        </p>
      ) : (
        <p className="mx-4 text-sm dark:text-normal-white text-normal-black">
          Lorem ipsum dolor sit amet consectetur adipisicing
        </p>
      )}
    </div>
  );
};

export default Faqcard;
