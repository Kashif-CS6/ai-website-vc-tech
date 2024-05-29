"use client";
import React, { useState } from "react";
import { HiChevronUp, HiChevronUpDown } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
const Question = ({ questionnum, heading, answer }) => {
  const [showanswer, setshowanswer] = useState(
    questionnum === "question1" ? true : false
  );
  return (
    <div
      className="w-80 lg:w-96 cursor-pointer dark:text-normal-white text-normal-black"
      onClick={() => {
        setshowanswer(!showanswer);
      }}
    >
      <div className="flex items-center justify-between font-[600] pb-4">
        <h1 className="text-xl">How it will works</h1>
        {showanswer ? <HiChevronUp /> : <HiChevronDown />}
      </div>
      {showanswer ? (
        <p className="text-sm text-justify dark:text-gray-300 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quae
          illo facilis harum fugit. Fugiat quae suscipit culpa rem consequuntur
          tempore doloribus libero quia quos quibusdam,Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quia, laudantium!
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Question;
