
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { PreRegisterModal } from "../../components/preregistationmodal";
import { useNavigate } from "react-router-dom";
import { useContent } from "../../hooks/useContent";

export const Hero = (): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { getSection, loading } = useContent();
  console.log("modelopen", isModalOpen);

  const navigate = useNavigate();
  
  const heroSection = getSection('hero');
  const title = heroSection?.title || 'Baby Shooting Zone';
  const description = heroSection?.description || 'Where Little Moments become Lifelong Memories';

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
              src={`${import.meta.env.VITE_IMAGE_BASE_URL}/image.png`}
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
        {loading ? (
          <p className="text-white">Loading...</p>
        ) : (
          <>
            <h1
              className="font-light text-white text-2xl md:text-4xl lg:text-[80px] tracking-[0] leading-tight md:leading-[normal] text-center md:whitespace-nowrap select-none"
              style={{ fontFamily: "'TAN-PEARL', Helvetica" }}
            >
              {title}
            </h1>
            <p
              className="mt-6 md:mt-[34px] font-normal text-white text-sm md:text-2xl  tracking-wide leading-normal  text-center px-4 select-none"
              style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
            >
              {description}
            </p>
          </>
        )}
      </section>
    </div>
  );
};
