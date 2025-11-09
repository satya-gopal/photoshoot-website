import { useEffect, useState } from "react";

interface PackageCardProps {
  category: string;
  title: string;
  duration: string;
  features: string[];
  videoDetails?: string[];
  complimentaryItems: string[];
  originalPrice?: string;
  price: string;
}

export default function PackageCard({
  category,
  title,
  duration,
  features,
  videoDetails,
  complimentaryItems,
  originalPrice,
  price,
}: PackageCardProps) {
  const [backgroundColour, setBackgroundColour] = useState(false);

  useEffect(() => {
  if (
    category === "babyshoot" &&
    (title === "Package 4" || title === "Package 2" || title === "Package 3") 
  ) {
    setBackgroundColour(true);
  }
},[]);

  return (
    <div className="rounded-t-xl overflow-hidden shadow-lg ">
      <div className="bg-[#DCCFC0] px-6 py-1 text-center">
        <h3 className="text-xl font-light tracking-wide text-gray-800">
          {title}
        </h3>
      </div>

      <div className="bg-[#FAF9EE] rounded-b-xl px-6 pt-4 pb-6 flex flex-col flex-grow ">
        <div className={`text-center text-xs font-light text-gray-800 mb-2 rounded-xl  py-1 ${
            backgroundColour ? "bg-[#B4BEB2]" : ""
          }`}>
          {duration}
        </div>

        {features.map((feature, index) => (
          <div
            key={index}
            className="text-center text-xs font-light text-gray-800 mb-2"
          >
            {feature}
          </div>
        ))}

        <div
          className={`rounded-2xl px-4 py-3 mb-3 mt-1 ${
            backgroundColour ? "bg-[#B4BEB2]" : ""
          }`}
        >
          {" "}
          {videoDetails && videoDetails.length > 0 && (
            videoDetails.map((detail, index) => (
              <div
                key={index}
                className="text-center text-xs font-light text-gray-800 leading-relaxed"
              >
                {detail}
              </div>
            ))
          ) }
        </div>

        {complimentaryItems.length > 0 && (
          <div className="bg-[#B4BEB2] rounded-xl px-4 py-2 ">
            <div className="text-center text-xs font-normal mb-2 text-gray-800 bg-[#EEEEEE] rounded-full py-[2px]">
              Complimentary
            </div>
            {complimentaryItems.map((item, index) => (
              <div
                key={index}
                className="text-center text-xs font-light text-gray-800 leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>
        )}
        {/* {originalPrice && (
            <div className="text-gray-500 line-through text-xs mb-2 font-light">
              {originalPrice}
            </div>
          )} */}
        <div className="mt-4 text-center flex flex-col items-center">
          {originalPrice && (
            <div className="relative text-gray-500 text-xs mb-2 font-light w-fit">
              {originalPrice}
              <span className="absolute top-1/2 left-0 w-full h-[1px] bg-gray-400 rotate-[-15deg] -translate-y-1/2"></span>
            </div>
          )}

          <div className="bg-[#B4BEB2] rounded-lg px-4 mt-1 w-fit">
            <span className="text-lg font-normal text-gray-700">{price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
