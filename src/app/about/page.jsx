"use client";
import React from "react";
import Topsection from "../components/About/topsection";
import Botsection from "../components/About/botsection";
import Benefits from "../components/About/benefits";
import Faq from "../components/About/faq";

const About = () => {
  return (
    <div className="dark:bg-custom-bluish bg-normal-white">
      <Benefits />
      <Faq />
    </div>
  );
};

export default About;
