// import { ArrowUpRight } from "lucide-react";
// import { useState } from "react";
// import { PreRegisterModal } from "../../components/preregistationmodal";

// export const Hero = (): JSX.Element => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <section id="home" className="relative w-full bg-[#0d1c28] h-[813px]">
//       {/* Header */}
//       <header className="relative z-10 w-full bg-[#0d1c28]/70 backdrop-blur-sm shadow-md">
//         <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <img
//               src="/image.png"
//               alt="Logo"
//               className="h-[30px] sm:h-[38px] object-contain"
//             />
//           </div>

//           {/* Buttons */}
//           <div className="flex gap-2 sm:gap-4 items-center">
//             <button
//               type="button"
//               className="px-3 sm:px-[31px] py-[6px] sm:py-[8px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors"
//             >
//               <span className="font-['Poppins',Helvetica] font-semibold text-black text-sm sm:text-lg select-none">
//                 MENU
//               </span>
//             </button>

//             <button
//               type="button"
//               onClick={() => setIsModalOpen(true)}
//               className="px-2 sm:px-[19px] py-[6px] sm:py-[8px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors flex items-center gap-1 sm:gap-2 select-none"
//             >
//               <span className="font-['Poppins',Helvetica] font-semibold text-black text-xs sm:text-[17px] whitespace-nowrap">
//                 PRE - REGISTER
//               </span>
//               <ArrowUpRight className="w-4 h-4 sm:w-[23px] sm:h-[23px]" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Pre-Register Modal */}
//       <PreRegisterModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />

//       {/* Hero Content (Responsive Like Footer) */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center mt-44">
//         <h1
//           className="font-light text-white text-3xl sm:text-5xl lg:text-[80px] leading-tight text-center select-none"
//           style={{ fontFamily: "'TAN-PEARL', Helvetica" }}
//         >
//           Baby Shooting Zone
//         </h1>

//         <p
//           className="mt-4 sm:mt-6 font-medium text-white text-base sm:text-xl tracking-[0.1em] leading-normal text-center select-none"
//           style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
//         >
//           Where Little Moments become Lifelong Memories
//         </p>
//       </div>
//     </section>
//   );
// };

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PreRegisterModal } from "../../components/preregistationmodal";
import { useNavigate } from "react-router-dom";

export const Hero = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  console.log("modelopen", isModalOpen);

  const navigate = useNavigate();

  const menuItems = [
    { label: "Birthday Shoot", path: "/birthdayshootmenu" },
    { label: "New Born Shoot", path: "/newbornmenu" },
    { label: "Model Shoot", path: "/modelshootmenu" },
    { label: "Baby Shoot", path: "/babyshootmenu" },
    { label: "Maternity Shoot", path: "/maternityshootmenu" },
  ];

  return (
    <div
      id="home"
      className="relative w-full flex justify-center h-[813px] bg-[#0d1c28]"
    >
      {/* Header */}
      <div className=" w-full flex justify-center ">
        <div className="relative z-10 flex items-center justify-end md:justify-between  px-4 md:px-8 h-[70px] w-full max-w-[1440px] shadow-md">
          {/* Left: Logo */}
          <div className="flex-shrink-0 hidden md:block">
            <img
              src="/image.png"
              alt="Logo"
              className="h-[30px] md:h-[52px] object-contain"
            />
          </div>

          {/* Right: Buttons */}
          <div className="relative flex gap-2 md:gap-4 items-center">
            {/* MENU WRAPPER */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              {/* MENU BUTTON */}
              <button
                type="button"
                onClick={() => setMenuOpen((prev) => !prev)} // mobile toggle
                className="h-[32px] md:h-[38px] px-3 md:px-[31px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors"
              >
                <span className="font-['Poppins',Helvetica] font-semibold text-black text-sm md:text-lg">
                  MENU
                </span>
              </button>

              {/* DROPDOWN */}
              {menuOpen && (
                <div
                  className="absolute left-0 pt-[1px] w-52 bg-white shadow-lg rounded-lg z-50"
                  onMouseEnter={() => setMenuOpen(true)} // keep open when hovering dropdown
                  onMouseLeave={() => setMenuOpen(false)}
                >
                  <ul className="py-2 text-sm font-medium text-gray-700">
                    {menuItems.map((item) => (
                      <li key={item.label}>
                        <button
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 block"
                          onClick={() => {
                            setMenuOpen(false);
                            navigate(item.path);
                          }}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* PRE-REGISTER BUTTON */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="select-none h-[32px] md:h-[39px] px-2 md:px-[19px] rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors flex items-center gap-1 md:gap-2"
            >
              <span className="font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-[17px] whitespace-nowrap select-none">
                PRE - REGISTER
              </span>
              <ArrowUpRight className="w-4 h-4 md:w-[23px] md:h-[23px]" />
            </button>
          </div>
        </div>
      </div>

      {/* Pre-Register Modal */}
      <PreRegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* Hero Content */}
      <section className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
        <h1
          className="font-light text-white text-2xl md:text-4xl lg:text-[80px] tracking-[0] leading-tight md:leading-[normal] text-center md:whitespace-nowrap select-none"
          style={{ fontFamily: "'TAN-PEARL', Helvetica" }}
        >
          Baby Shooting Zone
        </h1>
        <p
          className="mt-6 md:mt-[34px] font-normal text-white text-sm md:text-2xl  tracking-wide leading-normal  text-center px-4 select-none"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          Where Little Moments become Lifelong Memories
        </p>
      </section>
    </div>
  );
};
