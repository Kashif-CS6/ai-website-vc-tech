"use client";
import Image from "next/image";
import Middle from "./components/landigpage/middle";
import Hero from "./components/landigpage/hero";
import Architicture from "./components/landigpage/architicture";
import Evaluate from "./components/landigpage/evaluate";
import Realtime from "./components/landigpage/realtime";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <div className=" dark:bg-custom-bluish bg-normal-white ">
      <Hero />
      <Middle />
      <Architicture />
      <Evaluate />
      <Realtime />
    </div>
  );
}
