import React from "react";

const Namecard = ({ title, date }) => {
  return (
    <div className="border py-3 px-3 w-full md:w-52 lg:w-60 bg-gray-800 rounded-md border-gray-800 flex flex-col justify-center">
      <p>{title}</p>
      <h1>{date}</h1>
    </div>
  );
};

export default Namecard;
