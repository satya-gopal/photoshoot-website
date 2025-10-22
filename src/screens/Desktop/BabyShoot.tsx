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

import React from "react";

export const BabyShoot = (): JSX.Element => {
  return (
    <div id="babyshoot" className="bg-white overflow-hidden w-full md:min-w-[1440px] h-screen relative">
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
      <div className="absolute top-[-35px] left-[1122px] w-[314px] h-[814px] bg-[url(/frame-14.png)] bg-cover bg-[50%_50%]" />

      {/* Main Content Section */}
      <div
        className="absolute top-[-63px] inset-0 flex flex-col items-center justify-center gap-10 overflow-hidden bg-cover bg-center z-10 "
        style={{ backgroundImage: "url('/frame-23.png')" }}
      >
        <h1 className="[text-shadow:0px_4px_4px_#00000040] [-webkit-text-stroke:1px_#000000] font-['Irish_Grover',Helvetica] font-normal text-[#ffde59] text-[100px] md:text-[150px] text-center leading-[normal] pl-20 pb-10">
          BABY
          <br />
          SHOOT
        </h1>

        <p className="max-w-[700px] [font-family:'Poppins',Helvetica] font-normal text-black text-2xl md:text-3xl text-center tracking-[5px] leading-[1.2] pl-60 pb-12">
          RESERVE <br />
          YOUR <br />
          BABY&apos;S <br />
          FIRST <br />
          MASTERPIECE
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full h-6 bg-[#ff8692] z-20" />
    </div>
  );
};
