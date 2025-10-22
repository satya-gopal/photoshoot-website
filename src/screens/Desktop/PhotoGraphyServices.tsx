import React from "react";

const photographyServices = [
  {
    id: 1,
    title: "Couple\nPhotoshoots",
    image: "../frame-65.png",
    position: "top-[201px] left-[100px]",
    textPosition: "top-[621px] left-[131px]",
  },
  {
    id: 2,
    title: "Cake Smash",
    image: "../frame-67.png",
    position: "top-[67px] left-[537px]",
    textPosition: "top-[314px] left-[585px]",
  },
  {
    id: 3,
    title: "Pre & Post-Weddings",
    image: "../frame-66.png",
    position: "top-[407px] left-[537px]",
    textPosition: "top-[665px] left-[510px]",
  },
  {
    id: 4,
    title: "Model\nPhotoshoot",
    image: "../frame-68.png",
    position: "top-[201px] left-[1098px]",
    textPosition: "top-[621px] left-[1151px]",
  },
];

export const PhotoGraphyServices = (): JSX.Element => {
  return (
    <main id="services" className="bg-black w-full lg:min-w-[1440px] min-h-screen lg:min-h-[813.69px] relative">
      {/* Desktop Layout */}
      <div className="hidden lg:block relative">
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
              className={`absolute ${service.textPosition} [font-family:'Poppins',Helvetica] font-normal text-[#fbaf58] text-[40px] text-center tracking-[0] leading-[normal] whitespace-pre-line`}
            >
              {service.title}
            </div>
          </React.Fragment>
        ))}
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-12 max-w-7xl mx-auto">
        {photographyServices.map((service) => (
          <div key={service.id} className="flex flex-col items-center">
            <img
              src={service.image}
              alt={service.title}
              className="w-full max-w-[280px] aspect-[3/4] rounded-lg object-cover"
            />
            <h2 className="[font-family:'Poppins',Helvetica] font-normal text-[#fbaf58] text-3xl md:text-4xl text-center tracking-[0] leading-normal mt-6 whitespace-pre-line">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </main>
  );
};
