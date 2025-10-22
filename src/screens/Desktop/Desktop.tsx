// import { ArrowUpRightIcon, MenuIcon } from "lucide-react";
// import React, { useState } from "react";
// import { Button } from "../../components/ui/button";

// const navigationItems = [
//   { label: "HOME", href: "#" },
//   { label: "PACKAGES", href: "#" },
//   { label: "GALLERY", href: "#" },
//   { label: "BLOG", href: "#" },
//   { label: "CONTACT US", href: "#" },
// ];

// export const Desktop = (): JSX.Element => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="relative w-full min-h-screen bg-[#0d1c28]">
//       <header className="w-full h-[55px] bg-white relative z-10">
//         <nav className="flex items-center justify-between md:justify-end h-full px-4 md:px-8">
//           <button
//             className="md:hidden text-black"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <MenuIcon className="w-6 h-6" />
//           </button>

//           <div className="hidden md:flex items-center gap-8 lg:gap-16">
//             {navigationItems.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="[font-family:'Poppins',Helvetica] font-medium text-black text-base lg:text-xl tracking-[0] leading-[normal] hover:opacity-70 transition-opacity"
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </nav>

//         {mobileMenuOpen && (
//           <div className="md:hidden absolute top-[55px] left-0 w-full bg-white shadow-lg z-20">
//             <div className="flex flex-col py-4">
//               {navigationItems.map((item, index) => (
//                 <a
//                   key={index}
//                   href={item.href}
//                   className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0] leading-[normal] px-6 py-3 hover:bg-gray-100 transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </div>
//           </div>
//         )}
//       </header>

//       <img
//         src="/image.png"
//         alt="Logo"
//         className="h-[30px] md:h-[40px] object-contain absolute top-[70px] md:top-[75px] left-4 md:left-[40px] z-10"
//       />

//       <div className="flex gap-2 md:gap-4 absolute top-[70px] md:top-[91px] right-4 md:right-[40px] z-10">
//         <Button
//           variant="outline"
//           className="h-[32px] md:h-[38px] px-3 md:px-[31px] rounded-lg bg-white border-0 hover:bg-gray-100"
//         >
//           <span className="[font-family:'Poppins',Helvetica] font-semibold text-black text-sm md:text-lg tracking-[0] leading-[normal]">
//             MENU
//           </span>
//         </Button>

//         <Button
//           variant="outline"
//           className="h-[32px] md:h-[39px] px-2 md:px-[19px] rounded-lg bg-white border-0 hover:bg-gray-100 flex items-center gap-1 md:gap-2"
//         >
//           <span className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xs md:text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
//             PRE - REGISTER
//           </span>
//           <ArrowUpRightIcon className="w-4 h-4 md:w-[23px] md:h-[23px]" />
//         </Button>
//       </div>

//       <main className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//       <h1 className="[font-family:'Playfair',Helvetica] font-light text-white text-5xl md:text-7xl lg:text-[110px] tracking-[0] leading-tight md:leading-[normal] text-center md:whitespace-nowrap">
//           Baby Shooting Zone
//         </h1>

//         <p className="mt-6 md:mt-[48px] [font-family:'Montserrat',Helvetica] font-medium text-white text-md md:text-lg tracking-[0] leading-[normal] text-center px-4">
//           Where Little Moments become Lifelong Memories
//         </p>
//       </main>
//     </div>
//   );
// };

import { ArrowUpRight, Menu, X } from "lucide-react";

export const Hero = (): JSX.Element => {
  return (
    <div id="home" className="relative w-full min-h-screen bg-[#0d1c28]">
      <div className="w-full flex items-center justify-between px-4 md:px-8 h-[70px] shadow-md">
  {/* Left: Logo */}
  <div className="flex-shrink-0">
    <img
      src="/image.png"
      alt="Logo"
      className="h-[30px] md:h-[40px] object-contain"
    />
  </div>

  {/* Right: Buttons */}
  <div className="flex gap-2 md:gap-4 items-center">
    <button className="h-[32px] md:h-[38px] px-3 md:px-[31px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors">
      <span className="font-['Poppins',Helvetica] font-semibold text-black text-sm md:text-lg tracking-[0] leading-[normal]">
        MENU
      </span>
    </button>

    <button className="h-[32px] md:h-[39px] px-2 md:px-[19px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors flex items-center gap-1 md:gap-2">
      <span className="font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-[17px] tracking-[0] leading-[normal] whitespace-nowrap">
        PRE - REGISTER
      </span>
      <ArrowUpRight className="w-4 h-4 md:w-[23px] md:h-[23px]" />
    </button>
  </div>
</div>


      <main className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="font-['Playfair',Helvetica] font-light text-white text-4xl md:text-7xl lg:text-[110px] tracking-[0] leading-tight md:leading-[normal] text-center md:whitespace-nowrap">
          Baby Shooting Zone
        </h1>

        <p className="mt-6 md:mt-[48px] font-['Montserrat',Helvetica] font-medium text-white text-sm md:text-lg tracking-[0] leading-[normal] text-center px-4">
          Where Little Moments become Lifelong Memories
        </p>
      </main>
    </div>
  );
};
