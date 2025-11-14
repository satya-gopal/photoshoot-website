import React from "react";
import { useContent } from "../../hooks/useContent";
import { formatText } from "./BabyShoot";

export const HalfSaree = (): JSX.Element => {
  const { getSection } = useContent();
      const halfsareeSection = getSection("halfsaree");
      const rawTitle = halfsareeSection?.title || `HALF SAREE CEREMONY`;

      const title = formatText(rawTitle);
  
  return (
    <div className="overflow-hidden bg-white w-full flex justify-center">
      <div className="w-full max-w-[1440px] relative">
        {/* 🖥️ DESKTOP / TABLET VIEW */}
        <div className="hidden md:block w-full h-[814px] relative">
          <img
            className="absolute top-0 left-0 w-full md:w-[434px] h-[300px] md:h-[814px] object-cover"
            alt="Portrait"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-40.png`}
          />

          <div className="absolute bottom-4 md:top-[693px] left-28 md:left-[437px] md:w-[1003px] md:h-[171px] flex justify-center md:justify-start z-10">
            <h1
              className="w-full ml-[40px] md:w-[695px] md:ml-[236px] font-light text-[#fefefe] text-[32px] md:text-[58px] tracking-[0] leading-tight md:leading-[normal] text-center md:text-left"
              style={{ fontStyle: "normal", fontWeight: 100 }}
            >
              {title}
            </h1>
          </div>

          <div className="absolute top-[100px] md:top-[625px] left-[250px] w-full md:w-[1191px] h-[100px] md:h-[187px] bg-[#908b83] opacity-70"></div>

          <div className="absolute top-[250px] md:top-0 left-0 md:left-[249px] w-full md:w-[1191px] h-[400px] md:h-[639px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt="Ceremony"
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-42.png`}
            />

            <div className="absolute top-[290px] left-[-252px] w-[639px] h-[58px] bg-[#908b83] -rotate-90 opacity-70 hidden md:block"></div>

            <img
              className="absolute bottom-4 md:top-[415px] left-4 md:left-24 w-[120px] md:w-[182px] h-[130px] md:h-[195px] object-cover"
              alt="Jewelry detail"
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-34.png`}
            />
          </div>

          <img
            className="absolute bottom-4 md:top-[638px] left-4 md:left-[345px] w-[120px] md:w-[183px] h-[113px] md:h-[173px] object-cover"
            alt="Detail"
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-35.png`}
          />
        </div>
        {/* 📱 MOBILE VIEW */}
        <div className="w-full md:hidden bg-white flex flex-col items-center py-2   px-6">
          {/* Grey Image Section */}
          <div className="w-full max-w-sm bg-[#d9d9d9] py-20 flex flex-col items-center text-center ">
            {/* Main Ceremony Image */}
            <img
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-42.png`}
              alt="Ceremony"
              className="w-full h-[300px] object-cover"
            />

            {/* Portrait + Two Images Grid */}
            <div className="grid grid-cols-2 w-full  mt-6">
              {/* Left Large Image */}
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-40.png`}
                alt="Portrait"
                className="w-full h-full object-cover"
              />

              {/* Right – Two Small Images */}
              <div className="flex flex-col">
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-34.png`}
                  alt="Small Top"
                  className="w-full h-1/2 object-cover border-b-2 border-white"
                />
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE_URL}/frame-35.png`}
                  alt="Small Bottom"
                  className="w-full h-1/2 object-cover"
                />
              </div>
            </div>
            <div className="mt-6 bg-[#bfbdbd] text-white py-2 rounded-sm w-[90%] text-center">
              <h1 className="text-md font-light tracking-wide whitespace-nowrap overflow-hidden ">
                {title}
              </h1>
            </div>
          </div>

          {/* ✅ Title BELOW the images - separate box, with space */}
        </div>
      </div>
    </div>
  );
};
