// import React from "react";

// export const BabyShoot = (): JSX.Element => {
//   return (
//     <div className="bg-white w-full min-h-screen flex flex-col">
//       <div className="flex flex-1 flex-wrap">
//         {/* Left Image Section */}

//         {/* Center Text Section */}
//                 <div className="absolute  left-0 w-[1442px] h-[865px] flex flex-col gap-[86px] overflow-hidden [background:url(/frame-23.png)_50%_50%_/_cover]"> </div>

//         <section className="flex flex-col flex-1">
//           <div className="flex flex-1 items-center justify-center bg-[#f5d569]">
//             <h1 className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] [font-family:'Irish_Grover',Helvetica] font-normal text-[#ffde59] text-[120px] md:text-[150px] text-center tracking-[0] leading-[normal]">
//               BABY
//               <br />
//               SHOOT
//             </h1>
//           </div>

//           <div className="flex flex-1">
//             <div className="w-[85px] bg-[#b19d53]" />
//             <div className="w-[85px] bg-[#b2b88a]" />
//             <div className="flex-1 bg-[#ceb86e] flex items-center justify-center">
//               <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl md:text-3xl text-center tracking-[0] leading-[normal]">
//                 RESERVE
//                 <br />
//                 YOUR
//                 <br />
//                 BABY&apos;S
//                 <br />
//                 FIRST
//                 <br />
//                 MASTERPIECE
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Right Image Section */}
//         <section className="w-[300px] md:w-[314px] h-auto">
//           <img
//             className="w-full h-full object-cover"
//             alt="Baby in chef attire grayscale"
//             src="/frame-14.png"
//           />
//         </section>
//       </div>

//       <footer className="w-full h-12 bg-[#ff8692]" />
//     </div>
//   );
// };

//
import React from "react";

export const BabyShoot = (): JSX.Element => {
  return (
    <div
      id="babyshoot"
      className="bg-yellow-300 overflow-hidden w-full h-[813px] flex items-center justify-center relative"
    >
      {/* ======= DESKTOP & TABLET VIEW ======= */}
      <div className="hidden md:flex md:items-center md:justify-center w-full h-screen relative">
        <div className="relative w-[1440px] h-[819px] mx-auto">
          {/* Left Gradient Panel */}
          <div className="absolute top-0 left-0 w-[468px] h-[819px] bg-[linear-gradient(270deg,rgba(251,175,88,1)_0%,rgba(251,215,94,1)_100%)]" />

          {/* Top Yellow Block */}
          <div className="absolute top-0 left-[468px] w-[654px] h-[445px] bg-[#f5d569]" />

          {/* Bottom Right Block */}
          <div className="absolute top-[445px] left-[638px] w-[484px] h-[367px] bg-[#ceb86e]" />

          {/* Left Divider Bars */}
          <div className="absolute top-[444px] left-[468px] w-[85px] h-[370px] bg-[#b19d53]" />
          <div className="absolute top-[444px] left-[553px] w-[85px] h-[370px] bg-[#b2b88a]" />

          {/* Right Frame Image */}
          <div className="hidden xl:block absolute top-[-35px] left-[1122px] w-[314px] h-[814px] bg-[url(/frame-14.jpg)] bg-cover bg-[50%_50%]" />

          {/* Main Content Section */}
          <div
            className="absolute top-[-63px] inset-0 flex flex-col items-center justify-center gap-10 overflow-hidden bg-cover bg-center z-10"
            style={{ backgroundImage: "url('/frame-23.png')" }}
          >
            <h1
              className="font-semibold text-[#ffde59] text-[100px] md:text-[150px] text-center leading-[normal] pl-[150px] pb-10"
              style={{
                fontFamily: "'ITC Bauhaus', Helvetica",
                textShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)", // x, y, blur, color
              }}
            >
              BABY
              <br />
              SHOOTS
            </h1>

            <p className="max-w-[700px] [font-family:'BDSans',Helvetica] text-[#545454] font-normal text-black text-2xl md:text-5xl text-center tracking-[5px] leading-[1.2] pl-[170px] pt-10 "
            style={{
              filter: `
                drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))
                drop-shadow(0 0 20px rgba(255, 255, 255, 0.5))
              `,
            }}
            >
              RESERVE <br />
              YOUR <br />
              BABY&apos;S <br />
              FIRST <br />
              MASTERPIECE
            </p>
          </div>
        </div>
      </div>

    {/* ======= MOBILE VIEW ======= */}
   <div className="flex flex-row w-full h-full md:hidden relative overflow-hidden">
        {/* Left Side - Yellow/Gold Section */}
        <div className="w-[58%] h-full flex flex-col relative">
          {/* Top gradient section */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#c9b461] to-[#d4bd6a]" />
          
          {/* Vertical divider strips at bottom */}
          {/* <div className="absolute top-[55%] left-0 w-[25%] h-[45%] bg-[#b5a157]" />
          <div className="absolute top-[55%] left-[25%] w-[25%] h-[45%] bg-[#c4ba7d]" />
          <div className="absolute top-[55%] left-[50%] w-[50%] h-[45%] bg-[#d4bd6a]" /> */}
          
          {/* Text Content */}
          <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-2 pt-26">
            <h1 
              className="text-[#ffde59] text-[46px] leading-[0.85] font-bold text-center mb-10 "
              style={{
                fontFamily: "'ITC Bauhaus', Helvetica",
                textShadow: "3px 3px 8px rgba(0, 0, 0, 0.3)", // x, y, blur, color
              }}
            >
              BABY<br />SHOOTS
            </h1>
            <p className="text-[#fff15c] text-[14px] font-bold text-center tracking-[4px] leading-[1.8] opacity-90"
               style={{ fontFamily: "'BDSans', Helvetica" }}>
              RESERVE<br />
              YOUR<br />
              BABY&apos;S<br />
              FIRST<br />
              MASTERPIECE
            </p>
          </div>

          {/* Bottom Baby Chef Image */}
        </div>

        {/* Center Vertical Divider Line */}
        <div className="absolute top-0 left-[52%] w-[6%] h-full bg-gradient-to-b from-[#b5a157] via-[#c4ba7d] to-[#b5a157] z-20" />
        {/* <div className="absolute top-0 left-[48%] w-[10%] h-full bg-gradient-to-b from-bg-[#ffde59] via-[#c4ba7d] to-[#b5a157] z-20" /> */}
        {/* Right Side - Large Baby Portrait */}
        <div className="w-[42%] h-full bg-[url('/frame-14.jpg')] bg-cover grayscale-[30%]" style={{ backgroundPosition: '65% center' }} />
      </div>
    </div>
  );
};
