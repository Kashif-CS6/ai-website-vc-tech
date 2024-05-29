import Image from "next/image";
import { FaTelegramPlane } from "react-icons/fa";

const Topsection = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 md:gap-12 py-2 md:mx-4 justify-center items-center p-4">
      {/* left */}
      <div className="relative w-80 flex-wrap md:w-auto flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-3xl md:text-7xl font-[600]">BUILD</h1>
          <h1 className="text-3xl md:text-7xl font-[600]">IMAGINATION</h1>
          <h1 className=" text-3xl md:text-7xl font-[600]">ON YOUR MIND</h1>
          <h1 className="text-3xl md:text-7xl font-[600]">WITH LOGIC AI</h1>
          <p className="md:text-xl w-80  md:w-[33rem] mt-4 md:mt-6 mb-6 md:mb-10 font-[200] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atimnk.
            sapiente odit. Lorem ipsum
          </p>
        </div>
        <div className="border w-80 md:w-[33rem] rounded-3xl px-4 h-36 flex flex-col justify-between py-4 bg-custom-background-used">
          <h1>Prompt your long text to imagination</h1>
          <button className="flex items-center w-fit gap-1 px-3 py-2 bg-white text-sm text-orange-400 font-[600] rounded-full">
            <FaTelegramPlane className="text-violet-500" /> <p className="bg-gradient-to-r from-blue-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text">Generate now</p>
          </button>
        </div>
      </div>

      {/* right */}

      <div className="h-auto md:h-[42rem]  md:w-[34rem] bg-custom-bluish p-[1px] rounded-3xl">
        <Image src="/robot(1).jpg" className="h-full w-80 md:w-full rounded-3xl" width={500} height={500} />
      </div>
    </div>
  );
};

export default Topsection;
