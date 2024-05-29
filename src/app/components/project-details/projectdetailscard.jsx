import Image from "next/image";
import React, { useState } from "react";
import { FaUserAstronaut } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuArrowBigUp } from "react-icons/lu";
import {
  FaEyeSlash,
  FaMicrochip,
  FaHeart,
  FaUserCheck,
  FaShieldAlt,
  FaCog,
  FaDatabase,
  FaChalkboardTeacher,
  FaChartLine,
  FaGraduationCap,
  FaEye,
  FaBullseye,
  FaChartBar,
  FaUserTie,
  FaBookOpen,
  FaStream,
  FaLightbulb,
  FaPuzzlePiece,
  FaRobot,
  FaLock,
  FaExchangeAlt,
  FaMobileAlt,
  FaMobile,
  FaArrowsAltH,
  FaStar,
  FaFileAlt,
  FaBalanceScale,
  FaLayerGroup,
  FaBoxOpen,
  FaCheckCircle,
  FaSmile,
  FaClipboardCheck,
  FaSortNumericDown,
  FaExclamationTriangle,
  FaSearch,
  FaClock,
} from "react-icons/fa";
import { GiRoad } from "react-icons/gi";

const iconsMap = {
  FaEyeSlash: FaEyeSlash,
  FaMicrochip: FaMicrochip,
  FaHeart: FaHeart,
  FaUserCheck: FaUserCheck,
  FaShieldAlt: FaShieldAlt,
  FaCog: FaCog,
  FaDatabase: FaDatabase,
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaChartLine: FaChartLine,
  FaGraduationCap: FaGraduationCap,
  FaEye: FaEye,
  FaBullseye: FaBullseye,
  FaChartBar: FaChartBar,
  FaUserTie: FaUserTie,
  FaBookOpen: FaBookOpen,
  FaStream: FaStream,
  FaLightbulb: FaLightbulb,
  FaPuzzlePiece: FaPuzzlePiece,
  FaRobot: FaRobot,
  FaLock: FaLock,
  FaExchangeAlt: FaExchangeAlt,
  FaMobileAlt: FaMobileAlt,
  FaMobile: FaMobile,
  FaArrowsAltH: FaArrowsAltH,
  FaStar: FaStar,
  FaFileAlt: FaFileAlt,
  FaClock: FaClock,
  FaBalanceScale: FaBalanceScale,
  FaLayerGroup: FaLayerGroup,
  FaBoxOpen: FaBoxOpen,
  FaCheckCircle: FaCheckCircle,
  FaSmile: FaSmile,
  FaClipboardCheck: FaClipboardCheck,
  FaSortNumericDown: FaSortNumericDown,
  FaExclamationTriangle: FaExclamationTriangle,
  FaSearch: FaSearch,
  GiRoad: GiRoad,
};

const ProjectDetailsCard = ({ name, views, desc, comment, date, icon }) => {
  const IconComponent = iconsMap[icon];
  const [showmore, setShowmore] = useState(true);

  return (
    <div
      className={`w-80 md:w-60 lg:w-72 ${
        showmore ? "h-[28rem]" : "h-[34rem]"
      }   border border-gray-800 rounded-md`}
    >
      <div className="h-52 relative">
        <div className="border rounded-md h-full w-full flex items-center justify-center border-gray-800 border-l-0 border-r-0 border-t-0">
          {IconComponent && (
            <IconComponent size={140} className="text-violet-600" />
          )}
        </div>
        {/* <div className="text-xs py-[2px] flex items-center justify-between text-white bg-violet-600 w-fit px-4 rounded-xl absolute bottom-3 font-[600] right-4">
          2 min read
        </div> */}
        {/* profile */}
        {/* <div className="flex items-center justify-center bg-violet-600 w-8 h-8 rounded-full absolute -bottom-3 left-4 ">
          <FaUserAstronaut
            className="dark:text-normal-white text-normal-white"
            size={25}
          />
        </div> */}
      </div>
      {/* <p className="text-xs rounded-xl bg-blue-950 dark:text-normal-white text-normal-white w-fit px-4 py-[1px] my-6 mx-4 cursor-pointer font-[600]">
        social
      </p> */}
      <h1 className="font-[600] dark:text-normal-white text-normal-black mx-4 text-left text-sm mb-6 mt-3">
        {name}
      </h1>
      <p className=" dark:text-normal-white text-normal-black mx-4 text-left text-sm mb-6">
        {showmore ? <p>{desc.substring(0, 120)} ...</p> : desc}
      </p>
      <div className="mx-4 flex items-center justify-between mb-5 ">
        {/* left */}
        {/* <div className="flex items-center gap-5 text-xs dark:text-grey-small text-normal-black">
          <p className="flex items-center gap-2">
            <IoEyeSharp /> 1200
          </p>
          <p className="flex items-center gap-2">
            <IoChatboxEllipsesOutline /> 3
          </p>
        </div> */}
        {/* right */}
        {/* <div className="text-xs dark:text-grey-small text-normal-black flex items-center gap-2">
          <LuArrowBigUp /> 12 Feb, 2023
        </div> */}
      </div>
      <button
        onClick={() => setShowmore(!showmore)}
        className="text-xs dark:text-normal-white text-normal-black hover:text-violet-600 border rounded-md mx-auto p-[2px] flex items-center justify-center"
      >
        {showmore ? "show more" : "show less"}
      </button>
    </div>
  );
};

export default ProjectDetailsCard;
