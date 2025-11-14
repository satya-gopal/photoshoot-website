import { useContent } from "../../hooks/useContent";
import { formatText } from "./BabyShoot";

export const OurJourney = (): JSX.Element => {
    const { getSection } = useContent();
  const journeySection = getSection("our_journey");
    const rawDescription = journeySection?.description || `Watch the Studio Trailer and experience the story /n begin to unfold`;
  
    const description = formatText(rawDescription);
  return (
    <div className="py-10 md:py-20 bg-[#080808] w-full md:h-[813px] flex flex-col items-center justify-center gap-12 px-4 py-8">
      {/* 🎥 YouTube Video Embed with White Border */}
      <div className="w-full max-w-[1033px] aspect-video rounded-[20px] overflow-hidden border-[6px] border-white/30 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
        <iframe
          className="w-full h-full rounded-[14px]"
          src="https://www.youtube.com/embed/eEjbp8Uj-lo?controls=1"
          title="Studio Trailer"
          allow=" fullscreen; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      {/* ✨ Caption */}
      {/* className="max-w-[773px] [font-family:'Mirza',Helvetica] font-normal text-white text-3xl text-center tracking-[0] leading-normal" */}
      <h1 className="whitespace-pre-line text-white  text-xl tracking-[0.3em] text-center font-light">
       {description}
      </h1>
    </div>
  );
};
