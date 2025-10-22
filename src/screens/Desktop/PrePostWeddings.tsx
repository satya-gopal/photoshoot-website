import React from "react";

export const PrePostWeddings = (): JSX.Element => {
  return (
    <div id="prepostweddings"
      className="flex flex-col md:flex-row w-full md:min-w-[768px] lg:min-w-[1440px] min-h-screen md:min-h-[813.69px] overflow-hidden bg-cover bg-center bg-no-repeat bg-white"
    >
      {/* Right section (Frame 55) - appears first on mobile */}
      <div
        className="relative order-1 md:order-2 w-full md:w-[calc(100%-350px)] lg:w-[975px] min-h-[500px] md:h-[814px] bg-[#fefefe]"
      >
        <div
          className="absolute top-20 left-1/2 -translate-x-1/2 md:top-24 md:left-[120px] md:translate-x-0 lg:top-36 lg:left-[235px] w-[300px] md:w-[400px] lg:w-[606px] h-[250px] md:h-[350px] lg:h-[525px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(../frame-55.png)" }}
        />

        <div className="absolute top-[10px] left-[5%] md:top-[30px] md:left-[60px] lg:top-[45px] lg:left-[108px] w-[90%] md:w-[calc(100%-120px)] lg:w-[867px] h-[40px] md:h-[55px] lg:h-[69px] bg-[#d6d6d6]" />

        <div className="absolute top-[300px] left-[5%] md:top-[390px] md:left-[15px] lg:top-[490px] lg:left-[27px] [font-family:'Miltonian',Helvetica] font-normal text-black text-[40px] md:text-[60px] lg:text-[85px] tracking-[0] leading-[normal]">
          PRE&amp;
          <br />
          POST
          <br />
          WEDDINGS
        </div>
      </div>

      {/* Left section (Frame 53) - appears second on mobile */}
      <div
        className="
          order-2 md:order-1 
          w-full md:w-[350px] lg:w-[479px] 
          h-[600px] lg:h-[955px] 
          mt-6 md:mt-0 
          bg-cover bg-top md:bg-center bg-no-repeat
          md:-ml-3.5 md:-mt-[76px]
        "
        style={{ backgroundImage: "url(../frame-53.png)" }}
      />
    </div>
  );
};
