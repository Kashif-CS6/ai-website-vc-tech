import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Endingcard = ({ heading, desc }) => {
  return (
    <div className="lg:w-80 dark:bg-gray-800 bg-normal-white rounded-md p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-sm font-[600] dark:text-normal-white text-normal-black ">
          {heading}
        </h1>
        <BsArrowUpRightCircleFill size={25} className="text-violet-600" />
      </div>
      <p className="text-xs dark:text-grey-small text-normal-black my-3 ">
        {desc}
      </p>
    </div>
  );
};

export default Endingcard;
