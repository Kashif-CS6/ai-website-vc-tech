import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Projectcard = ({ middle, heading, desc, pic, slug }) => {
  const router = useRouter();

  const NextpageRoute = () => {
    router.push(`/project-details/${slug}`);
  };
  return (
    <div
      className={`w-96 md:w-80 lg:w-96 
      
      border   border-gray-200 dark:border-gray-800 p-2 lg:p-10 h-[32rem]`}
    >
      {/* card section started here */}
      <div>
        {/* image section */}
        <Image src={pic} width={400} height={400} className="w-full h-auto" />
        <h1 className="font-[600] my-2">{heading}</h1>
        <p className="text-xs dark:text-grey-small text-normal-black my-2 ">
          {desc.substring(0, 150)}
        </p>
        <div className="flex items-center justify-between my-2">
          <button
            onClick={NextpageRoute}
            className="text-white dark:text-gray-500 bg-gray-900 rounded-md text-xs p-2 flex items-center gap-1 border border-gray-800"
          >
            View Details
          </button>
          {/* <button className="text-gray-500 border border-gray-800 bg-gray-900 rounded-md text-xs p-2 flex items-center gap-1">
            Download PDF Now
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Projectcard;
