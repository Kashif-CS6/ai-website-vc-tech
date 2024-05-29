import { TbBallpenFilled } from "react-icons/tb";
import { IoPlay } from "react-icons/io5";
import { BsSlashLg } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FiTriangle } from "react-icons/fi";
import Image from "next/image";

const Architicture = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
        <div className="flex gap-2 flex-col relative">
          {/* adjust traingle icon */}

          <div>
            <FiTriangle
              size={100}
              className="text-purple-500 hidden lg:block absolute rotate-45 -right-80"
            />
          </div>
          {/* top button */}
          <div className="flex justify-center w-80 md:w-auto ">
            <div className="flex gap-2  border-violet-500 items-center justify-center px-3 py-1 text-sm border rounded-3xl w-fit mb-6">
              <p className="bg-gradient-to-r from-blue-600 via-violet-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                All solution for the enterprice
              </p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-center gap-2 dark:text-normal-white text-normal-black">
            <h1 className="text-2xl md:text-5xl font-[600]">
              Discover and Planning
            </h1>

            <div className="w-80 md:w-[37rem]  ">
              <p className="text-md w-full text-start  md:text-center my-4 dark:text-normal-white text-normal-black">
                We methodically and strategically create an all-inclusive
                project plan that includes all necessary procedures.
              </p>
            </div>
          </div>

          {/* buttons */}
          <div className="flex gap-3 justify-center">
            <button className="py-1 px-3 border border-violet-500 rounded-lg flex items-center gap-1 bg-gradient-to-r from-blue-900 via-violet-900 to-indigo-900 text-sm dark:text-normal-white text-normal-white">
              <p>Talk to generative AI Expert</p> <FaArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-10/12 mt-14 flex flex-col lg:flex-row relative place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px]  after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[20px] before:lg:dark:h-[360px] ">
        {/* left */}
        <div className="w-80 md:w-full lg:w-6/12 flex flex-col p-2 gap-3 dark:text-normal-white text-normal-black">
          <div className="mb-4 flex flex-col gap-1">
            <h1 className="text-lg font-[700] md:text-center lg:text-start mb-2">
              Security & Surveillance
            </h1>
            <p className="text-sm text-justify leading-5">
              Fortify your security infrastructure with our Security &
              Surveillance solutions. Utilize state-of-the-art technologies,
              including facial recognition and intelligent video analytics, to
              enhance threat detection and response. From safeguarding critical
              assets to ensuring public safety, our solutions provide robust
              security
            </p>
          </div>
          <div className=" border-t border-purple-400 w-full"></div>
          <div className="mt-4 flex flex-col gap-1">
            <h1 className="text-lg font-[700] md:text-center lg:text-start mb-2">
              Driver Assistance and Security
            </h1>
            <p className="text-sm leading-5">
              With our solutions for driver assistance and security, you can
              drive with confidence. Put modern driver aid features into
              practice, improve car security, and put road safety first. We use
              technology, such as real-time monitoring and collision avoidance
              systems, to make driving safer and more secure for everyone.
            </p>
          </div>
        </div>

        {/* right */}
        <div className="w-80 md:w-full lg:w-6/12 lg:h-[26rem] p-4 flex items-end justify-center">
          <Image
            src="/Images-1.png"
            className="h-full"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default Architicture;
