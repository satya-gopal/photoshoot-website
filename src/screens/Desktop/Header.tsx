import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { label: "HOME", href: "#home" },
  { label: "PACKAGES", href: "#packages" },
  { label: "GALLERY", href: "#gallery" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT US", href: "#contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between md:justify-end h-[55px] px-4 md:px-8">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 lg:gap-16">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-['Poppins',Helvetica] font-medium text-black text-base lg:text-xl hover:opacity-70 transition-opacity"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right buttons */}
        {/* <div className="hidden md:flex gap-4 ml-8">
          <button className="h-9 px-6 rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors font-['Poppins',Helvetica] font-semibold text-black text-sm md:text-lg">
            MENU
          </button>
          <button className="h-9 px-4 rounded-lg bg-white border-0 hover:bg-gray-100 transition-colors flex items-center gap-2 font-['Poppins',Helvetica] font-semibold text-black text-xs md:text-[17px]">
            PRE - REGISTER
            <ArrowUpRight className="w-4 h-4 md:w-[23px] md:h-[23px]" />
          </button>
        </div> */}

        {/* Mobile Slide Menu */}
        <div
          className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
            mobileMenuOpen ? "visible" : "invisible"
          }`}
        >
          <div
            className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-100" : "opacity-0"
            }`}
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 h-full w-[80%] max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 border-r border-gray-100/50 flex flex-col ${
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
              <img src="/image.png" alt="Logo" className="h-8 w-auto" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-2">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block w-full text-left font-['Poppins',Helvetica] font-medium text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
