import React from "react";
import { IoLogoTableau } from "react-icons/io5";

const ProjectLogo = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center gap-4 py-10 px-2 lg:px-16">
      {/* left */}
      <div className="logo">
        <IoLogoTableau size={80} className="text-violet-600" />
      </div>
      {/* righ section */}
      <div className="flex flex-col gap-[2px] items-center lg:items-start">
        <button className="text-gray-300 bg-gray-900 p-2 text-xs w-fit">
          Learn,Connect, and innovate
        </button>
        <h1 className="text-2xl font-[600] text-center lg:text-start dark:text-normal-white text-normal-black">
          Effat Eye Diagnostics
        </h1>
        <p className="text-xs dark:text-grey-small text-normal-black md:w-7/12  text-justify">
          For our client Effat University in Saudi Arabia, we successfully built
          and deployed an application for automated diabetic retinopathy
          diagnosis and referral.Additionally, we created a web application that
          allows users to upload photos and receive recommendations while
          lounging in their homes.
        </p>
      </div>
    </div>
  );
};

export default ProjectLogo;
