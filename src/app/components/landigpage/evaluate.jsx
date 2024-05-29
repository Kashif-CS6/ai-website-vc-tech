import maindata from "@/jsondata/maindata";
import Card from "./card";

const Evaluate = () => {
  return (
    <main className="flex h-auto  md:min-h-screen flex-col items-center md:justify-between p-24 relative md:my-0">
      <div
        className={` "relative mb-12 md:mb-0  flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[30px] before:lg:dark:h-[360px] "
            
        }`}
      >
        <div className="flex md:justify-center flex-col md:items-center dark:text-normal-white text-normal-black">
          <h1 className="text-xl text-center md:text-start mb-6 md:text-3xl font-[600]">
            WHO WE ARE
          </h1>
          <p className="w-80 md:w-[26rem] text-start md:text-center">
            Our specialty is offering value-driven innovations that are
            customized to meet particular business requirements, keeping our
            clients abreast of technology developments.
          </p>
        </div>

        {/* cards list */}

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {maindata.map((item, index) => {
            return (
              <div key={index}>
                <Card heading={item.heading} desc={item.description} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Evaluate;
