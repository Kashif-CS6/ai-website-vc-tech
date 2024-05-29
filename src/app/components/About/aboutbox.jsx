import { GiSunflower } from "react-icons/gi";

const Aboutbox = () => {
  return (
    <div className="w-80  md:w-[34rem] h-20 rounded-2xl dark:bg-custom-background-used bg-custom-bluish px-4 flex items-center justify-between">
      <div>
        <h1 className="dark:text-[rgba(255,255,255,0.4)] text-normal-black text-lg font-[600]">
          Partners
        </h1>
        <h1 className="text-lg font-[600] dark:text-normal-white text-normal-black">
          230+
        </h1>
      </div>
      <div>
        <GiSunflower
          className="dark:text-yellow-400 text-normal-black"
          size={40}
        />
      </div>
    </div>
  );
};

export default Aboutbox;
