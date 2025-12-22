import { FaArrowRight } from "react-icons/fa";
import { SiConsul } from "react-icons/si";
import { TbEyeSearch } from "react-icons/tb";
import { FaAsymmetrik } from "react-icons/fa";

const Middle = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
        {/* top section */}
        <div className="flex flex-col gap-2 items-center justify-center relative">
          {/* icon that used as property of absolute and relative concept  */}

          <div className="hidden md:block absolute -left-1 -top-8">
            <SiConsul color="purple" size={100} />
          </div>

          <div className="hidden md:block absolute -right-1">
            <SiConsul color="purple" size={100} />
          </div>

          {/* end of icons */}

          <h1 className="text-2xl md:text-5xl dark:text-normal-white text-normal-black">
            {" "}
            BETTER{" "}
            <span className="bg-gradient-to-r from-orange-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text">
              DATA
            </span>
          </h1>
          <h1 className="text-2xl md:text-5xl dark:text-normal-white text-normal-black">
            OPTIMIZING AI.
          </h1>

          <p className="text-md w-80 mt-6 md:mt-0 md:w-[27rem]   px-1 md:text-center dark:text-normal-white text-normal-black">
            At vc-tech, we're committed to providing cutting-edge AI services
            and solutions, with an emphasis on adding value and resolving client
            business issues.
          </p>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-2 justify-center my-6">
            {/* button 1 */}

            <button className="flex items-center gap-2 py-2 px-2 border-violet-500 rounded-lg bg-gradient-to-r from-blue-900 via-violet-900 to-indigo-900 text-md dark:text-normal-white text-normal-white">
              <p>Back Demo</p>
              <FaArrowRight />
            </button>
            {/* button 2 */}

            <button className="flex items-center gap-2 py-2 px-2 rounded-lg text-md dark:text-normal-white text-normal-black">
              <p>Build AI</p>
              <FaArrowRight />
            </button>
            {/* ----end here */}
          </div>

          <div className="w-80 md:w-[40rem] mt-4 md:mt-16 dark:text-normal-white text-normal-black">
            <p className="text-sm">
              Scale works with Generation AI Companies. US Government Agencies,
              Enterprises & Startups
            </p>
          </div>
        </div>
      </div>
      {/* companies logo */}
      <div className="flex flex-wrap  flex-col dark:text-normal-white text-normal-black md:flex-row justify-center items-center gap-4 md:gap-24 mt-4 md:mt-8">
        <div className="flex items-center text-2xl font-[700] gap-2">
          <TbEyeSearch fontSize={30} />
          <h1>waverio</h1>
        </div>
        <div className="flex items-center text-2xl font-[700] gap-2">
          <TbEyeSearch fontSize={30} />
          <h1>waverio</h1>
        </div>
        <div className="flex items-center text-2xl font-[700] gap-2">
          <h1>waverio</h1>
        </div>
        <div className="flex items-center text-2xl font-[700] gap-2">
          <h1>waverio</h1>
          <TbEyeSearch fontSize={30} />
        </div>
        <div className="flex items-center text-2xl font-[700] gap-2">
          <TbEyeSearch fontSize={30} />
          <p>waverio</p>
        </div>

        <div className="border-t border-purple-400 w-80 md:w-full relative">
          <div className="absolute hidden md:block -top-24 -left-32">
            <FaAsymmetrik size={100} className="text-purple-400" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Middle;
