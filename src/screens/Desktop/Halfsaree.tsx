import React from "react";

export const HalfSaree = (): JSX.Element => {
  return (
    <div className="overflow-hidden bg-black w-full min-h-screen flex justify-center">
      <div className="w-full max-w-[1440px] h-auto md:h-[814px] relative bg-black">
        <img
          className="absolute top-0 left-0 w-full md:w-[434px] h-[300px] md:h-[814px] object-cover"
          alt="Portrait"
          src="..//frame-40.png"
        />

        <div className="absolute bottom-4 md:top-[643px] left-4 md:left-[437px] right-4 md:w-[1003px] md:h-[171px] flex justify-center md:justify-start z-10">
          <h1 className="w-full md:w-[695px] md:ml-[236px] font-['Poppins',Helvetica] font-light text-[#fefefe] text-[32px] md:text-[64px] tracking-[0] leading-tight md:leading-[normal] text-center md:text-left">
            HALF SAREE CEREMONY
          </h1>
        </div>

        <div className="absolute top-[250px] md:top-0 left-0 md:left-[249px] w-full md:w-[1191px] h-[400px] md:h-[639px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Ceremony"
            src="..//frame-42.png"
          />

          <div className="absolute top-[100px] md:top-[165px] left-0 w-full md:w-[975px] h-[100px] md:h-[175px] bg-[#908b83] opacity-70" />

          <div className="hidden md:block absolute top-[290px] left-[-252px] w-[639px] h-[58px] bg-[#908b83] -rotate-90 opacity-70" />

          <img
            className="absolute bottom-4 md:top-[415px] left-4 md:left-24 w-[120px] md:w-[182px] h-[130px] md:h-[195px] object-cover"
            alt="Jewelry detail"
            src="..//frame-34.png"
          />
        </div>

        <img
          className="absolute bottom-4 md:top-[638px] right-4 md:left-[345px] w-[120px] md:w-[183px] h-[113px] md:h-[173px] object-cover"
          alt="Detail"
          src="..//frame-35.png"
        />
      </div>
    </div>
  );
};
