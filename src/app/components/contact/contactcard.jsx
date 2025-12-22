import React from "react";
import { TfiCommentsSmiley } from "react-icons/tfi";
import { BiMessageRoundedDots } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

const Contactcard = ({ message, description, cmessage }) => {
  return (
    <div className=" border dark:border-gray-600  border-gray-200 w-80 lg:w-60 h-56 rounded-md flex flex-col justify-between">
      <div className="bg-blue-900 text-white rounded-md p-2 w-fit m-2">
        {message.includes("Data Insights") ? <TfiCommentsSmiley /> : ""}

        {message.includes("Global Connectivity") ? (
          <BiMessageRoundedDots />
        ) : (
          ""
        )}
        {message.includes("Secure Interactions") ? <IoLocationOutline /> : ""}
        {message.includes("Efficient Automation") ? <IoCallOutline /> : ""}
      </div>
      <div className="mb-3 flex flex-col gap-3 m-2">
        <h1 className="dark:text-white text-black font-[600] ">{message}</h1>
        <p className="dark:text-grey-small text-black text-sm">{description}</p>
        <button className="font-[600] dark:text-white text-black border dark:border-gray-600 border-gray-200 cursor-pointer p-1 rounded-md w-fit text-sm">
          {cmessage}
        </button>
      </div>
    </div>
  );
};

export default Contactcard;
