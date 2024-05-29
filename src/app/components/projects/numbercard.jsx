import React from "react";

const Numbercard = ({ number, heading }) => {
  return (
    <div className="w-48 md:w-80 h-28 md:h-44  md:border-l lg:border-l-0 border-r border-gray-800 border-t border-b  flex flex-col justify-center items-center">
      <h1 className="text-xl md:text-4xl font-[600] dark:text-normal-white text-normal-black flex items-center justify-center">
        {number}
        <span className="text-yellow-600">+</span>
      </h1>
      <p className="text-xs md:text-sm dark:text-grey-small text-normal-black my-2">{heading}</p>
    </div>
  );
};

export default Numbercard;
