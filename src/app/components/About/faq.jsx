import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Faqcard from "./faqcard";

const Faq = () => {
  return (
    <main className="flex h-auto min-h-screen flex-col items-center  p-24 relative md:my-0">
      <div className="relative mb-12 md:mb-0  flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:dark:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40  before:lg:dark:h-[180px] before:lg:h-[0px] dark:-z-10 ">
        {/* heading div */}
        <div className="flex flex-col gap-2 justify-center items-center ">
          <h1 className="text-2xl md:text-4xl font-[600] dark:text-normal-white text-normal-black">
            Frequently asked questions
          </h1>
          <h1 className="text-2xl md:text-4xl font-[600] dark:text-normal-white text-normal-black">about astraLogic</h1>
          <p className="dark:text-gray-400 text-normal-black w-80 md:w-auto  text-sm font-[400] text-center">
            These are frequently asked questions from logic friends about <br />
            astraLogic. Hopefully, all of this answers your questions.
          </p>
        </div>

        {/* boxes container */}
      </div>
      <div className="flex items-center flex-col">
        <div className="p-2 flex flex-wrap  lg:flex-nowrap gap-2 justify-center items-center mt-10 mb-7">
          {/* left side */}
          <div>
            <Faqcard questionnum={"question1"} />
          </div>
          <div className="flex flex-col gap-1">
            <Faqcard />
            <Faqcard />
          </div>
          <div className="flex flex-col gap-1">
            <Faqcard />
            <Faqcard />
          </div>
        </div>
        <button className="bg-violet-600 text-sm text-white  rounded-3xl px-2 py-2 font-[600] cursor-pointer flex justify-center">
          Ask some question
        </button>
      </div>
    </main>
  );
};

export default Faq;
