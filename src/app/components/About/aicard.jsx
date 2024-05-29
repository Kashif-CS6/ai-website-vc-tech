import Image from "next/image";
import React from "react";

const Aicard = () => {
  return (
    <div className="w-80 h-96 mb-2 md:p-1 ">
      <Image src="/robot(2).jpg" width={500} height={500} className="w-full h-64 rounded-xl" />
      <div className="mt-6 flex flex-col gap-2">
      <h1 className="text-xl font-[600] text-center">Interactive chatbot</h1>
      <p className="text-center text-sm">this is chatbot for sample data</p>
      <p className="text-center text-sm">this ichatbot for sample data unique info</p>
      </div>
    </div>
  );
};

export default Aicard;
