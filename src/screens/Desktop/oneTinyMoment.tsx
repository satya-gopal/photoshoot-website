import React from "react";

const photographyCategories = [
  {
    id: 1,
    image: "..//frame-622.png",
    title: "Baby Shoot",
  },
  {
    id: 2,
    image: "..//frame-632.png",
    title: "Maternity Shoot",
  },
  {
    id: 3,
    image: "..//frame-642.png",
    title: "New Born",
  },
];

export const OneTinyMoment = (): JSX.Element => {
  return (
    <div id="gallery" className="bg-[#151414] w-full min-w-0 md:min-w-[768px] lg:min-w-[1440px] min-h-screen md:min-h-[813.69px] flex flex-col items-center justify-start py-8 px-4 sm:py-12 sm:px-6 md:py-16 md:px-12 lg:py-[109px] lg:px-[97px]">
      <header className="w-full flex justify-center mb-12 sm:mb-16 md:mb-24 lg:mb-[146px]">
        <h1 className="[font-family:'Porter_Sans_Block'] font-normal text-[#fefefe] text-xl sm:text-2xl md:text-[28px] text-center tracking-[0] leading-relaxed sm:leading-loose
 whitespace-normal  px-4">
          Capturing Love One Tiny Moment at a Time
        </h1>
      </header>

      <section className="w-full flex justify-center">
        <div className="flex flex-col sm:flex-col md:flex-row gap-8 sm:gap-12 md:gap-16 lg:gap-[98px] items-center md:items-start">
          {photographyCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 lg:gap-[51px]"
            >
              <div className="w-[280px] h-[358px] sm:w-[300px] sm:h-[383px] md:w-[220px] md:h-[281px] lg:w-[238px] lg:h-[304px] rounded-xl border border-solid border-black shadow-[0px_4px_100px_#00000040,0px_4px_100px_100px_#00000040] overflow-hidden bg-transparent">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-1100 h-110"
                />
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-light text-[#fbaf58] text-3xl sm:text-4xl md:text-[36px] lg:text-[40px] text-center tracking-[0] leading-[normal]">
                {category.title}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};