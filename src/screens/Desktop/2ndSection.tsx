import React from "react";
import { useContent } from "../../hooks/useContent";

export const Services = (): JSX.Element => {
  const { getSection } = useContent();
  
  const aboutSection = getSection('about');
  const rawDescription = aboutSection?.description || `We offer the best /n service to our customers`;
  
  // Convert `/n` to real newline
  const description = rawDescription.replace(/\/n/g, "\n");
  // style={{
  //   backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL}/desktop---10.jpg)`
  // }}
  return (
    <main
      id="about"
      className="relative w-full h-[813px]  flex items-center justify-center p-4"
      style={{
        backgroundImage: `url(${import.meta.env.VITE_IMAGE_BASE_URL}/desktop---10.jpg)`,
        backgroundPosition: '50% 50%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <span
        className="whitespace-pre-line text-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center tracking-[0] leading-[normal] max-w-[1229px]"
        style={{ fontFamily: "'Poiret One', Helvetica" }}
      >
        {description}
      </span>
    </main>
  );
};
