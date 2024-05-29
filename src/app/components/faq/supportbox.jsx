import React from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Supportbox = () => {
  return (
    <div className="border border-gray-800 w-80 lg:w-[25rem] py-4 px-10 bg-blue-950 rounded-sm flex items-center gap-3">
      {/* left side */}
      <div className="">
        <IoChatbubbleEllipsesOutline size={30} />
      </div>
      <div className="">
        <h1 className="font-[700]">Connect the chat support</h1>
        <p className="text-sm text-gray-300">24/7 calculate no choclate</p>
      </div>
    </div>
  );
};

export default Supportbox;
