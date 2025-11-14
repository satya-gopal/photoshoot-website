import React from "react";

const photographyCategories = [
  {
    id: 1,
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-622.png`,
    title: "Baby Shoot",
  },
  {
    id: 2,
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-632.png`,
    title: "Maternity Shoot",
  },
  {
    id: 3,
    image: `${import.meta.env.VITE_IMAGE_BASE_URL}/frame-642.png`,
    title: "New Born",
  },
];

export const OneTinyMoment = (): JSX.Element => {
  return (
    <div
      id="gallery"
      className="bg-black w-full flex flex-col items-center justify-start py-10 px-6 sm:px-8 md:px-12 lg:px-[97px]"
    >
      {/* Heading */}
      <header className="w-full flex justify-center mb-10 sm:mb-14 md:mb-20 lg:mb-[146px] text-center">
        <h1 className="[font-family:'Kenao',sans-serif] font-normal text-[#fefefe] text-2xl sm:text-3xl md:text-4xl leading-relaxed sm:leading-loose max-w-[800px]">
          Capturing Love One Tiny Moment at a Time
        </h1>
      </header>

      {/* Image Section */}
      <section className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-10 sm:gap-14 md:gap-16 lg:gap-[98px] w-full max-w-[1200px]">
          {photographyCategories.map((category) => (
            <article
              key={category.id}
              className="flex flex-col items-center text-center"
            >
              <div className="max-w-[300px] sm:max-w-[350px] md:max-w-[380px] rounded-xl overflow-hidden border border-solid border-black md:shadow-[0px_4px_100px_#00000040,0px_4px_100px_100px_#00000040] bg-transparent">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full object-cover"
                />
              </div>
              <h2 className="[font-family:'Barlow_Condensed',Helvetica] font-light text-[#fbaf58] text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] mt-4">
                {category.title}
              </h2>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
