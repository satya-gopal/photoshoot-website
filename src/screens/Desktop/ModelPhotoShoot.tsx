// import React from "react";

// export const ModelPhotoShoot = (): JSX.Element => {
//   return (
//     <div id="modelphotoshoot" className="bg-[#464c59] overflow-hidden w-full min-h-screen relative">
//       <div className="hidden lg:block">
//         <img
//           className="absolute top-[407px] left-[1149px] w-[291px] h-[407px] object-cover"
//           alt="Model photo"
//           src="/frame-46.png"
//         />

//         <img
//           className="absolute top-[510px] left-[816px] w-[333px] h-[202px] object-cover"
//           alt="Model photo"
//           src="/frame-47.png"
//         />

//         <div className="absolute top-[694px] left-[708px] w-[560px] [font-family:'Lalezar',Helvetica] font-normal text-neutral-100 text-[120px] tracking-[0] leading-[normal] whitespace-nowrap">
//           SHOOT
//         </div>

//         <div className="absolute top-[-89px] left-[381px] w-[844px] h-[362px] flex items-center justify-center [font-family:'Lalezar',Helvetica] font-normal text-[#ebe9e8] text-[230px] tracking-[0] leading-[normal]">
//           MODEL
//         </div>

//         <img
//           className="absolute top-[181px] left-[370px] w-[446px] h-[531px] object-cover"
//           alt="Model photo"
//           src="/frame-48.png"
//         />

//         <div className="absolute top-[407px] left-0 w-[1149px] h-[76px] bg-[#ebe9e8]" />

//         <div className="absolute top-[396px] left-[455px] [font-family:'Lalezar',Helvetica] font-normal text-black text-[80px] tracking-[0] leading-[normal]">
//           PHOTO
//         </div>

//         <img
//           className="absolute top-[181px] left-[816px] w-[331px] h-[226px] object-cover"
//           alt="Model photo"
//           src="/frame-50.png"
//         />

//         <img
//           className="absolute top-0 left-0 w-[370px] h-[407px] object-cover"
//           alt="Model photo"
//           src="/frame-51.png"
//         />
//       </div>

//       <div className="lg:hidden flex flex-col min-h-screen p-4">
//         <div className="text-center mb-8">
//           <h1 className="[font-family:'Lalezar',Helvetica] font-normal text-[#ebe9e8] text-6xl sm:text-7xl md:text-8xl tracking-[0] leading-tight mb-2">
//             MODEL
//           </h1>
//           <div className="bg-[#ebe9e8] py-4 px-6 inline-block">
//             <span className="[font-family:'Lalezar',Helvetica] font-normal text-black text-4xl sm:text-5xl md:text-6xl tracking-[0]">
//               PHOTO
//             </span>
//           </div>
//           <h2 className="[font-family:'Lalezar',Helvetica] font-normal text-neutral-100 text-6xl sm:text-7xl md:text-8xl tracking-[0] leading-tight mt-2">
//             SHOOT
//           </h2>
//         </div>

//         <div className="grid grid-cols-2 gap-4 mb-4">
//           <img
//             className="w-full h-48 sm:h-64 object-cover rounded"
//             alt="Model photo"
//             src="/frame-51.png"
//           />
//           <img
//             className="w-full h-48 sm:h-64 object-cover rounded"
//             alt="Model photo"
//             src="/frame-50.png"
//           />
//         </div>

//         <div className="mb-4">
//           <img
//             className="w-full h-64 sm:h-80 object-cover rounded"
//             alt="Model photo"
//             src="/frame-48.png"
//           />
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <img
//             className="w-full h-40 sm:h-48 object-cover rounded"
//             alt="Model photo"
//             src="/frame-47.png"
//           />
//           <img
//             className="w-full h-40 sm:h-48 object-cover rounded"
//             alt="Model photo"
//             src="/frame-46.png"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { useContent } from "../../hooks/useContent";
import { raw } from "express";

export const ModelPhotoShoot = (): JSX.Element => {
   const { getSection } = useContent();
        const modelSection = getSection("model_shoot");
        const rawTitle = modelSection?.title;
        const rawDescription = modelSection?.description;
        const rawContent = modelSection?.content;
  return (
    <div
      className="
        flex items-center justify-center 
        bg-[#ebe9e8]   /* optional background for page */min-h-screen lg:h-[813px]
      "
    >
      <div
        id="modelphotoshoot"
        className="
          bg-[#464c59] overflow-hidden relative
          lg:h-[813px] lg:w-[1440px]   /* fixed desktop layout */
          h-auto w-full                /* fluid for mobile/tablet */
          flex flex-col items-center justify-center
        "
      >
        {/* ===== Desktop Layout ===== */}
        <div className="hidden lg:block relative w-full h-full">
          <img
            className="absolute top-[407px] left-[1149px] w-[291px] h-[407px] object-cover"
            alt="Model photo"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-46.png`}
          />
          <img
            className="absolute top-[504px] left-[816px] w-[333px] h-[208px] object-cover"
            alt="Model photo"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-47.jpg`}
          />
          <div className="absolute top-[674px] right-[75px] w-[560px] [font-family:'impact',Helvetica] font-normal text-neutral-100 text-[120px] tracking-[0.5rem]">
            {rawContent || "SHOOT"}
          </div>
          <div className="absolute top-[-91px] left-[236px] w-[844px] h-[362px] flex items-center justify-center [font-family:'impact',Helvetica] font-normal text-[#ebe9e8] text-[230px]">
            {rawTitle || "MODEL"}
          </div>
          <img
            className="absolute top-[181px] left-[370px] w-[446px] h-[531px] object-cover"
            alt="Model photo"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-48.png`}
          />
          <div className="absolute top-[407px] left-0 w-[1149px] h-[98px] bg-[#ebe9e8]" />
          <div className="absolute top-[386px] left-[455px] [font-family:'impact',Helvetica] font-normal text-black text-[100px]">
            {rawDescription || "PHOTO"}
          </div>
          <img
            className="absolute top-[181px] left-[816px] w-[331px] h-[226px] object-cover"
            alt="Model photo"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-50.png`}
          />
          <img
            className="absolute top-0 left-0 w-[370px] h-[407px] object-cover"
            alt="Model photo"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-51.png`}
          />
        </div>

        {/* ===== Mobile & Tablet Layout ===== */}
        <div className="lg:hidden flex flex-col p-4 sm:p-6 md:p-8">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <h1 className="[font-family:'Lalezar',Helvetica] text-[#ebe9e8] text-5xl sm:text-6xl md:text-7xl mb-2">
              {rawTitle || "MODEL"}
            </h1>
            <div className="bg-[#ebe9e8] py-3 sm:py-4 md:py-5 px-4 sm:px-6 md:px-8 inline-block mx-auto">
              <span className="[font-family:'Lalezar',Helvetica] text-black text-3xl sm:text-4xl md:text-5xl">
                {rawDescription || "PHOTO"}
              </span>
            </div>
            <h2 className="[font-family:'Lalezar',Helvetica] text-neutral-100 text-5xl sm:text-6xl md:text-7xl mt-2">
              {rawContent || "SHOOT"}
            </h2>
          </div>

          {/* Images Grid */}
          <div className="flex flex-col gap-3 sm:gap-4 md:gap-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <img
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-51.png`}
              />
              <img
                className="w-full h-40 sm:h-48 md:h-56 object-cover"
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-50.png`}
              />
            </div>

            <div className="w-full">
              <img
                className="w-full h-64  md:h-80 object-cover"
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-48.png`}
                style={{ objectPosition: "center 30%" }}
                alt="Frame 48"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-5">
              <img
                className="w-full h-36 sm:h-40 md:h-48 object-cover"
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-47.jpg`}
              />
              <img
                className="w-full h-36 sm:h-40 md:h-48 object-cover"
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-46.png`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
