import React from "react";

export const Services = (): JSX.Element => {
  return (
    <main id="about" className="relative w-full h-screen [background:url(../desktop---10.png)_50%_50%_/_cover] flex items-center justify-center p-4">
      <h1 className="[font-family:'Poppins',Helvetica] font-medium text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-[normal] max-w-[1229px]">
        WE OFFER THE BEST <br />
        SERVICE OUR CUSTOMERS
      </h1>

      <div className="absolute bottom-8 sm:bottom-[116px] right-4 sm:right-[15px] w-[116px] h-[93px] bg-[#5fb5a8] blur-[12.5px]" />
    </main>
  );
};
