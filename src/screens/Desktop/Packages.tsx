import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const packages = [
  {
    discount: "40%",
    title: "1 DAY\nBaby Shoot",
    badge: "Best Package",
  },
  {
    discount: "50%",
    title: "Festival\nOffers",
    badge: "Best Package",
  },
  {
    discount: "20%",
    title: "Pre &\nPost\nWeddings",
    badge: "Best Package",
  },
];

export const Packages = (): JSX.Element => {
  return (
    <div id="packages" className="bg-[#fa716b] flex items-center justify-center min-h-screen w-full p-4 md:p-12 lg:p-16">
      <div className="flex flex-col sm:flex-col md:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-center max-w-7xl w-full">
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className="bg-white relative flex-1 w-full max-w-xs sm:max-w-sm md:max-w-[350px] lg:max-w-md border-0 shadow-lg"
          >
            {/* Badge */}
            <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2">
              <Badge className="bg-[#1a1616] text-white text-base sm:text-lg md:text-xl lg:text-2xl px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-2 md:py-2.5 lg:py-3 rounded-full border border-black [font-family:'Poppins',Helvetica] font-black whitespace-nowrap h-auto">
                {pkg.badge}
              </Badge>
            </div>

            <CardContent className="pt-10 sm:pt-12 md:pt-14 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 md:px-8 flex flex-col items-center">
              {/* Save Up To */}
              <h2 className="[font-family:'Poppins',Helvetica] font-extrabold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-normal text-center mb-2 sm:mb-3 md:mb-4">
                Save up to
              </h2>

              {/* Off */}
              <div className="bg-[#1a1616] px-3 sm:px-4 md:px-6 lg:px-8 py-1 sm:py-1.5 md:py-2 mb-2 sm:mb-3 md:mb-4">
                <span className="[font-family:'Paytone_One',Helvetica] font-normal text-[#fbaf58] text-[28px] sm:text-[32px] md:text-[38px] lg:text-[45px] tracking-[0] leading-normal">
                  Off
                </span>
              </div>

              {/* Discount */}
              <div className="[font-family:'Paytone_One',Helvetica] font-normal text-[#fbaf58] text-[70px] sm:text-[90px] md:text-[110px] lg:text-[140px] tracking-[0] leading-none mb-2 sm:mb-3 md:mb-4">
                {pkg.discount}
              </div>

              {/* Title */}
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-black text-[28px] sm:text-[36px] md:text-[42px] lg:text-[55px] tracking-[0] leading-tight text-center whitespace-pre-line">
                {pkg.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
