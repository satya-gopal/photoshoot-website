import React from "react";

export const NewBorn = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-[linear-gradient(270deg,rgba(255,222,163,1)_0%,rgba(255,129,145,1)_100%)] w-full min-h-screen flex justify-center items-center relative">
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-[54px] gap-8 w-full max-w-[1440px] px-4">
        {/* Left Section */}
        <div className="relative w-full lg:w-[985px] h-auto lg:h-[719px] bg-[url('/frame-16.png')] bg-cover bg-center flex flex-col lg:flex-row justify-center items-center">
         

          <div className=" lg:mt-[-130px] w-[180px] sm:w-[220px] md:w-[250px] lg:w-64 h-[220px] md:h-[280px] lg:h-[328px] bg-[url('/frame-45.svg')] bg-cover bg-center" />
        </div>

        {/* Right Section */}
        <img
          className= "w-[80%] sm:w-[60%] md:w-[400px] lg:w-[455px] h-auto mt-10 lg:mt-[95px] object-contain"
          alt="Group"
          src="/group-3.png"
        />
      </div>
    </div>
  );
};
