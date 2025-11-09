import React from "react";

export const CouplePhotoshoot = (): JSX.Element => {
  return (
    <div className="w-full flex justify-center bg-[#5e8c48]">
      <section
        id="couplephotoshoot"
        className="py-22 bg-[#5e8c48] overflow-hidden w-full max-w-[1440px] min-h-[500px] lg:min-h-[813.69px] md:min-h-[600px] sm:min-h-[500px] relative flex flex-col md:block"
      >
        {/* First image */}
        <div
          className="lg:absolute md:absolute relative
                 lg:top-[-285px] md:top-[-150px] top-0 left-0
                 lg:w-[336px] md:w-[200px] w-full
                 lg:h-[1216px] md:h-[600px] h-[400px]
                 bg-[url(/frame-57.png)]
                 lg:bg-contain lg:bg-no-repeat lg:bg-left
                 md:bg-contain md:bg-no-repeat md:bg-left 
                 bg-cover bg-[50%_50%]"
        />
        {/* Second image */}
        <div className="lg:absolute md:absolute relative top-[0px] lg:top-0 md:top-0 left-0 pr-32 lg:left-[336px] md:left-[200px] w-full lg:w-[1133px] md:w-[calc(100%-200px)] h-[300px] lg:h-[552px] md:h-[380px] bg-[url(/frame-591.png)] bg-cover bg-center" />

        {/* Text section */}
        <section className="absolute lg:top-[645px] md:top-[450px] top-[340px] w-full lg:h-[135px] md:h-[100px] h-[80px] flex bg-white overflow-hidden items-center justify-center lg:justify-start px-4">
          <h1
            className="lg:mt-[18px] mt-0 lg:w-[853px] w-auto lg:h-[132px] h-auto lg:ml-[678px] ml-0 font-normal text-black lg:text-[110px] md:text-[60px] text-[36px] tracking-[0] leading-[normal] lg:whitespace-nowrap whitespace-normal text-center lg:text-left"
            style={{ fontFamily: "Smooch Sans, sans-serif" }} //[font-family:'Smooch Sans',sans-serif]
          >
            COUPLE PHOTOSHOOTS
            </h1>
        </section>

        {/* Bar under text */}
        <div className="absolute lg:top-[552px] md:top-[380px] top-[1050px] lg:left-[335px] md:left-[150px] left-[0px] w-full lg:w-[1119px] md:w-[calc(100%-150px)] h-8 lg:h-12 md:h-10 bg-[#418779]" />
      </section>
    </div>
  );
};

// import React from "react";

// export const CouplePhotoshoot = (): JSX.Element => {
//   return (
//     <main className="relative w-full min-h-screen bg-[#5e8c48] overflow-hidden flex flex-col justify-center items-center">
//       {/* Left Side Frame */}
//       <div className="absolute top-0 left-0 w-[25vw] max-w-[336px] min-w-[120px] h-full bg-[url(/frame-57.png)] bg-contain bg-left bg-no-repeat" />

//       {/* Center Image (Couple Photo) */}
//       <div className="absolute top-0 left-[20vw] w-[80vw] h-[70vh] bg-[url(/frame-59.png)] bg-contain bg-center bg-no-repeat" />

//       {/* Green Divider */}
//       <div className="absolute bottom-[140px] left-[20vw] w-[70vw] h-[48px] md:h-[60px] bg-[#418779]" />

//       {/* White Section with Title */}
//       <section className="absolute bottom-0 w-full bg-white flex justify-center lg:justify-start items-center px-4 py-6 md:py-8">
//         <h1 className="text-black font-normal [font-family:'Mirza',Helvetica] text-[8vw] md:text-[60px] lg:text-[100px] leading-none text-center lg:text-left">
//           Couple Photoshoots
//         </h1>
//       </section>
//     </main>
//   );
// };
