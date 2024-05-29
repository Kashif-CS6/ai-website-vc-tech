"use client";
import React, { useState, useEffect } from "react";
import { LuPencil } from "react-icons/lu";
import { SiBookstack } from "react-icons/si";
import { GoStopwatch } from "react-icons/go";
import Image from "next/image";
import ProjectDetailsCard from "@/app/components/project-details/projectdetailscard";
import projectdetail from "@/jsondata/projectdetail";
import { usePathname } from "next/navigation";
import projectdata from "@/jsondata/projectdata";

const ProjectDetails = () => {
  const pathname = usePathname();
  console.log("pathname:", pathname);
  let result1 = pathname.split("/").pop();
  console.log(result1);

  // Find the project that matches the slug
  const project = projectdata.find((item) => item.slug === result1);

  if (!project) {
    return (
      <div className="text-center dark:text-normal-white text-red-400 font-bold py-10 lg:text-3xl">
        Project not found
      </div>
    );
  }

  return (
    <div className="dark:bg-custom-bluish bg-normal-white py-10">
      {/* top section */}
      <div className="flex flex-col items-center justify-center gap-2 ">
        <div className="">
          <h1 className="text-xl lg:text-3xl font-[600] dark:text-normal-white text-normal-black text-center">
            {project.heading}
          </h1>
          {/* <h1 className="text-xl lg:text-3xl font-[600] dark:text-normal-white text-normal-black text-center">
            to break marketers' backs or budgets
          </h1> */}
        </div>
        {/* <h1 className="mx-3 md:mx-0 text-center text-sm lg:text-xl font-[300] dark:text-normal-white text-normal-black">
          6 tips to help you to create stories, Tiktok and snaps more cost
          effectively
        </h1> */}
        {/* <div className="flex items-center gap-8 py-4 text-sm">
          <div className="flex items-center gap-2 dark:text-grey-small text-normal-black cursor-pointer">
            <LuPencil />
            Cihan Ager
          </div>
          <div className="flex items-center gap-2 dark:text-grey-small text-normal-black cursor-pointer">
            <SiBookstack />
            Ideas, Culture
          </div>
          <div className="flex items-center gap-2 dark:text-grey-small text-normal-black cursor-pointer">
            <GoStopwatch />
            4.min
          </div>
        </div> */}
      </div>
      {/* picture */}
      <div className="w-80 md:w-11/12 lg:w-8/12 mx-auto my-4">
        <Image
          src={project.pic}
          width={500}
          height={500}
          className="w-full h-auto md:h-auto"
        />
      </div>
      <div className="w-80 md:w-9/12 lg:w-6/12 mx-auto py-5 dark:text-grey-small text-normal-black text-justify text-sm flex flex-col gap-2">
        <p>{project.desc}</p>
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vitae
          sunt, ex eaque non, sequi architecto praesentium eligendi quibusdam
          distinctio minus molestias! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui iure consequuntur veritatis?Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Saepe excepturi qui nobis.
          ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
        {/* <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae beatae
          optio quia quam cum perspiciatis vero eos ut quas eius! Lorem, ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error vitae
          sunt, ex eaque non, sequi architecto praesentium eligendi quibusdam
          distinctio minus molestias! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Qui iure consequuntur veritatis?Lorem, ipsum dolor
          sit amet consectetur adipisicing elit. Saepe excepturi qui nobis.
          ipsum dolor sit amet consectetur adipisicing elit.
        </p> */}
      </div>

      <h1 className="text-xl md:text-3xl my-10 dark:text-normal-white text-normal-black text-center">
        Key Features
      </h1>
      <div className="flex gap-2 flex-wrap lg:w-11/12 justify-center items-center">
        {project.keyfeatures.map((item, index) => {
          return (
            <div key={index} className="">
              <ProjectDetailsCard
                name={item.name}
                desc={item.description}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
      <h1 className="text-xl md:text-3xl my-10 dark:text-normal-white text-normal-black text-center">
        Benefits
      </h1>
      <div className="flex gap-2 flex-wrap lg:w-11/12 justify-center items-center">
        {project.Benefitts.map((item, index) => {
          return (
            <div key={index} className="">
              <ProjectDetailsCard
                name={item.name}
                desc={item.desc}
                icon={item.icon}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
