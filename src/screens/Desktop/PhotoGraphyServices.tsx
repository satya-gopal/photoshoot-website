import React from "react";

const photographyServices = [
  {
    id: 1,
    title: "Couple\nPhotoshoots",
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-65.png`,
    position: "top-[201px] left-[100px]  w-[280px] h-[372px]",
    textPosition: "top-[581px] left-[171px]",
  },
  {
    id: 2,
    title: "Cake Smash",
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-67.png`,
    position: "top-[67px] left-[537px] w-[350px] h-[214px]",
    textPosition: "top-[264px] left-[635px]",
  },
  {
    id: 3,
    title: "Pre & Post-Weddings",
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-66.png`,
    position: "top-[407px] left-[537px] w-[365px] h-[214px]",
    textPosition: "top-[645px] left-[580px]",
  },
  {
    id: 4,
    title: "Model\nPhotoshoot",
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-68.png`,
    position: "top-[201px] left-[1098px] w-[280px] h-[372px]",
    textPosition: "top-[581px] right-[121px]",
  },
];

export const PhotoGraphyServices = (): JSX.Element => {
  return (
    <div
      id="services"
      className="bg-black w-full relative flex justify-center lg:h-[813px]  py-12"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-[1440px]">
        {photographyServices.map((service) => (
          <React.Fragment key={service.id}>
            {/* Image */}
            <div className={`absolute ${service.position}`}>
              <img
                src={service.image}
                alt={service.title}
                className="block object-cover"
              />
            </div>

            {/* Title */}
            <div
              className={`absolute ${service.textPosition} [font-family:'Barlow_Condensed',Helvetica] font-normal text-[#fbaf58] text-[40px] text-center tracking-[0] leading-[normal] whitespace-pre-line`}
            >
              {service.title}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden grid grid-cols-1 gap-8 p-6 max-w-md mx-auto">
        {photographyServices.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-lg object-cover"
            />
            <h2 className="[font-family:'Barlow_Condensed',Helvetica] font-normal text-[#fbaf58] text-3xl text-center mt-4 whitespace-pre-line">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
