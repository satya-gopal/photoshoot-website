import React from "react";

export const ModelPhotoShoot = (): JSX.Element => {
  return (
    <div id="modelphotoshoot" className="bg-[#464c59] overflow-hidden w-full min-h-screen relative">
      <div className="hidden lg:block">
        <img
          className="absolute top-[407px] left-[1149px] w-[291px] h-[407px] object-cover"
          alt="Model photo"
          src="/frame-46.png"
        />

        <img
          className="absolute top-[510px] left-[816px] w-[333px] h-[202px] object-cover"
          alt="Model photo"
          src="/frame-47.png"
        />

        <div className="absolute top-[638px] left-[622px] w-[560px] [font-family:'Lalezar',Helvetica] font-normal text-neutral-100 text-[180px] tracking-[0] leading-[normal] whitespace-nowrap">
          SHOOT
        </div>

        <div className="absolute top-[-49px] left-[361px] w-[844px] h-[362px] flex items-center justify-center [font-family:'Lalezar',Helvetica] font-normal text-[#ebe9e8] text-[250px] tracking-[0] leading-[normal]">
          MODEL
        </div>

        <img
          className="absolute top-[181px] left-[370px] w-[446px] h-[531px] object-cover"
          alt="Model photo"
          src="/frame-48.png"
        />

        <div className="absolute top-[407px] left-0 w-[1149px] h-[98px] bg-[#ebe9e8]" />

        <div className="absolute top-96 left-[455px] [font-family:'Lalezar',Helvetica] font-normal text-black text-[100px] tracking-[0] leading-[normal]">
          PHOTO
        </div>

        <img
          className="absolute top-[181px] left-[816px] w-[331px] h-[226px] object-cover"
          alt="Model photo"
          src="/frame-50.png"
        />

        <img
          className="absolute top-0 left-0 w-[370px] h-[407px] object-cover"
          alt="Model photo"
          src="/frame-51.png"
        />
      </div>

      <div className="lg:hidden flex flex-col min-h-screen p-4">
        <div className="text-center mb-8">
          <h1 className="[font-family:'Lalezar',Helvetica] font-normal text-[#ebe9e8] text-6xl sm:text-7xl md:text-8xl tracking-[0] leading-tight mb-2">
            MODEL
          </h1>
          <div className="bg-[#ebe9e8] py-4 px-6 inline-block">
            <span className="[font-family:'Lalezar',Helvetica] font-normal text-black text-4xl sm:text-5xl md:text-6xl tracking-[0]">
              PHOTO
            </span>
          </div>
          <h2 className="[font-family:'Lalezar',Helvetica] font-normal text-neutral-100 text-6xl sm:text-7xl md:text-8xl tracking-[0] leading-tight mt-2">
            SHOOT
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <img
            className="w-full h-48 sm:h-64 object-cover rounded"
            alt="Model photo"
            src="/frame-51.png"
          />
          <img
            className="w-full h-48 sm:h-64 object-cover rounded"
            alt="Model photo"
            src="/frame-50.png"
          />
        </div>

        <div className="mb-4">
          <img
            className="w-full h-64 sm:h-80 object-cover rounded"
            alt="Model photo"
            src="/frame-48.png"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            className="w-full h-40 sm:h-48 object-cover rounded"
            alt="Model photo"
            src="/frame-47.png"
          />
          <img
            className="w-full h-40 sm:h-48 object-cover rounded"
            alt="Model photo"
            src="/frame-46.png"
          />
        </div>
      </div>
    </div>
  );
};
