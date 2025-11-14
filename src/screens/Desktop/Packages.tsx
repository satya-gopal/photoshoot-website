import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { useContent } from "../../hooks/useContent";

export const Packages = (): JSX.Element => {
  const { getPackages } = useContent();
  const packages = getPackages();
  return (
    <div
      id="packages"
      className="bg-[#fa716b] flex items-center justify-center h-auto lg:h-[813px] w-full py-12 md:py-16 px-4 md:px-12 lg:px-16"
    >
      <div
        className="
          flex flex-col md:flex-row flex-wrap
          gap-8 md:gap-10 lg:gap-12
          items-center md:items-stretch
          justify-center
          max-w-7xl w-full
        "
      >
        {packages.map((pkg, index) => (
          <Card
            key={index}
            className="bg-white relative flex-1 w-full max-w-xs sm:max-w-sm md:max-w-[350px] lg:max-w-md border-0 shadow-lg flex flex-col"
          >
            {/* Badge */}
            <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2">
              <Badge className="bg-[#1a1616] text-white text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-6 lg:px-4 py-2 md:py-1 border border-black [font-family:'Poppins',Helvetica] font-black whitespace-nowrap h-auto">
                {pkg.badge}
              </Badge>
            </div>

            {/* Card Content */}
            <CardContent
              className="
                flex flex-col justify-between flex-grow h-full 
                pt-12 md:pt-14 pb-8 md:pb-10 px-6 md:px-8
                text-left
              "
            >
              {/* Save Up To */}
              <h2 className="[font-family:'impact',Helvetica] font-extrabold text-black text-4xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
                Save up to
              </h2>

              {/* Discount with Off */}
              <div className="relative inline-block mb-3 md:mb-4">
                <div className="[font-family:'impact',Helvetica] font-normal text-[#fbaf58] text-[123px] md:text-[110px] lg:text-[160px] leading-none">
                  {pkg.discount}
                </div>
                <div className="absolute top-2 right-[-14px] md:right-[-18px] bg-[#1a1616] px-4 py-1 rounded-md">
                  <span className="[font-family:'impact',Helvetica] font-normal text-[#fbaf58] text-[32px] lg:text-[46px] leading-none">
                    Off
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="[font-family:'impact',Helvetica] font-semibold text-black text-[38px] sm:text-[36px] md:text-[42px] lg:text-[55px] whitespace-pre-line leading-tight">
                {pkg.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
// import React from "react";
// import { Badge } from "../../components/ui/badge";
// import { Card, CardContent } from "../../components/ui/card";
// import { useContent } from "../../hooks/useContent";

// export const Packages = (): JSX.Element => {
//   const { getPackages, loading } = useContent();
//   const packages = getPackages();


//   return (
//     <div id="packages" className="bg-[#fa716b] flex items-center justify-center h-auto lg:h-[813px] w-full py-12 md:py-16 px-4 md:px-12 lg:px-16">
//       <div className="flex flex-col md:flex-row flex-wrap gap-8 md:gap-10 lg:gap-12 items-center md:items-stretch justify-center max-w-7xl w-full">
//         {packages.map((pkg, index) => (
//           <Card key={index} className="bg-white relative flex-1 w-full max-w-xs sm:max-w-sm md:max-w-[350px] lg:max-w-md border-0 shadow-lg flex flex-col">
//             <div className="absolute -top-3 sm:-top-4 md:-top-5 left-1/2 -translate-x-1/2">
//               <Badge className="bg-[#1a1616] text-white text-base sm:text-lg md:text-xl lg:text-2xl px-4 md:px-6 lg:px-4 py-2 md:py-1 border border-black font-black whitespace-nowrap h-auto">
//                 {pkg.badge}
//               </Badge>
//             </div>

//             <CardContent className="flex flex-col justify-between flex-grow h-full pt-12 md:pt-14 pb-8 md:pb-10 px-6 md:px-8 text-left">
//               <h2 className="font-extrabold text-black text-4xl md:text-4xl lg:text-5xl mb-3 md:mb-4">
//                 Save up to
//               </h2>

//               <div className="relative inline-block mb-3 md:mb-4">
//                 <div className="font-normal text-[#fbaf58] text-[130px] sm:text-[90px] md:text-[110px] lg:text-[160px] leading-none">
//                   {pkg.discount}
//                 </div>
//                 <div className="absolute top-2 right-[-14px] md:right-[-18px] bg-[#1a1616] px-4 py-1 rounded-md">
//                   <span className="font-normal text-[#fbaf58] text-[32px] lg:text-[46px] leading-none">
//                     Off
//                   </span>
//                 </div>
//               </div>

//               <h3 className="font-semibold text-black text-[38px] sm:text-[36px] md:text-[42px] lg:text-[55px] whitespace-pre-line leading-tight">
//                 {pkg.title}
//               </h3>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// };
