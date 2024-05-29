"use client";
import React from "react";
import Numbercard from "../components/projects/numbercard";
import Indept from "../components/projects/indept";
import Quantum from "../components/projects/quantum";
import Projectcard from "../components/projects/projectcard";
import ProjectLogo from "../components/projects/projectlogo";
import Endingcard from "../components/projects/endingcard";

import quontumdata from "@/jsondata/qountam";
import projectdata from "@/jsondata/projectdata";

const Projects = () => {
  return (
    <div className="dark:bg-custom-bluish bg-normal-white ">
      <h1 className="text-2xl md:text-5xl font-[600] dark:text-normal-white text-normal-black text-center lg:text-start md:px-16 pt-16">
        Fully Integrated
      </h1>
      <div className="flex px-2 md:px-16 items-center justify-center lg:justify-normal flex-wrap lg:flex-nowrap gap-2 md:gap-14">
        <h1 className="text-2xl md:text-5xl font-[600] dark:text-normal-white text-normal-black ">
          Products
        </h1>
        <p className="dark:text-grey-small text-black  text-xs text-center lg:text-start">
          As part of a six-year research initiative, Visual Computing technology
          is offering consulting services to the New Zealand Leather and Shoe
          Research Association with the goal of developing machine vision
          technology to measure the quality of leather.
        </p>
      </div>
      {/* number cards */}
      <div className="flex px-2 lg:px-0 flex-wrap lg:flex-nowrap justify-center lg:justify-normal items-center mt-6 lg:mt-24">
        <Numbercard number="300" heading="Resources available" />
        <Numbercard number="12K" heading="Total downloads" />
        <Numbercard number="10K" heading="Active users" />
        <Numbercard number="100" heading="Countries access our content" />
      </div>
      <div className="">
        <Indept />
        {/* {quontumdata.map((item) => {
          return (
            <div>
              <Quantum
                fullname={item.fullname}
                first={item.first}
                second={item.second}
                rdesc={item.rdesc}
                ldesc={item.ldesc}
                pic={item.pic}
              />
            </div>
          );
        })} */}
      </div>
      {/* card section */}
      <div className="flex items-center flex-wrap  justify-center border border-gray-800 md:gap-4 lg:gap-0">
        {projectdata.map((item) => {
          return (
            <div key={item.heading}>
              <Projectcard
                middle={item.middle}
                heading={item.heading}
                desc={item.desc}
                pic={item.pic}
                slug={item.slug}
              />
            </div>
          );
        })}
      </div>
      {/* logo section */}
      <div>
        <ProjectLogo />
      </div>
      <div className="p-2 lg:p-16">
        <div className=" rounded-md bg-black flex items-center justify-center lg:justify-start flex-wrap lg:flex-nowrap p-3 md:p-2 lg:p-3 gap-2 w-fit">
          <Endingcard
            heading="Machine Learning"
            desc="With the help of our machine learning services, venture into the domain "
          />
          <Endingcard
            heading="Cloud Solution"
            desc="With our Cloud Solutions, discover how technology may be seamlessly integrated. "
          />
          <Endingcard
            heading="Image Processing"
            desc="Unleash the full potential of your digital images with our Image Processing services."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
