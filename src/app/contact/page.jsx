"use client";
import React, { useRef, useEffect } from "react";
import Contactcard from "../components/contact/contactcard";
import MessageForm from "../components/contact/messageform";

import contactdata from "@/jsondata/contactdata";

const Contact = () => {
  return (
    <div className="dark:bg-custom-bluish bg-white py-4">
      <div className="dark:lg:bg-[url('/bgpattern.png')] object-contain lg:w-8/12 flex justify-center lg:mx-auto h-40">
        <div
          id="Floow"
          className="relative mb-12 md:mb-0 my-4  flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[160px] after:dark:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[160px] before:lg:dark:h-[360px] z-20 "
        >
          <h1 className="text-3xl md:text-5xl font-[600] mx-2 md:mx-0  md:text-center dark:text-white text-black  z-50">
            Contact Us
          </h1>
          <p className="dark:text-gray-100 text-sm mx-2 lg:mx-0 lg:text-lg text-center my-2 lg:my-0  text-black z-50">
            Visual Computing Technologies
          </p>
        </div>
      </div>

      {/* cards pannel */}
      <div className="flex items-center justify-center gap-4 my-4 flex-wrap lg:flex-nowrap mx-2 lg:mx-0">
        {contactdata.map((item) => {
          return (
            <div className="flex">
              <Contactcard
                message={item.message}
                cmessage={item.cmessage}
                description={item.description}
              />
            </div>
          );
        })}
      </div>

      <div className="mt-8 lg:mt-20">
        {/* message form */}
        <MessageForm />
      </div>
    </div>
  );
};

export default Contact;
