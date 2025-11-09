// import { ArrowUpRight, Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// const navigationItems = [
//   { label: "HOME", href: "/" },
//   { label: "PACKAGES", href: "#packages" },
//   { label: "GALLERY", href: "#gallery" },
//   { label: "BLOG", href: "#blog" },
//   { label: "CONTACT US", href: "/contact" },
// ];

// export const Header = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleNavigation = (path: string) => {
//     setMobileMenuOpen(false);
//     // If it's a hash link and we're already on the homepage
//     if (path.startsWith('#') && location.pathname === '/') {
//       const section = document.querySelector(path);
//       if (section) {
//         section.scrollIntoView({ behavior: 'smooth' });
//       }
//       return;
//     }

//     if (path.startsWith('https://wa.me/')) {
//       window.location.href = path;
//       return;
//     }

//     // If it's a hash link but we're not on homepage
//     if (path.startsWith('#')) {
//       navigate('/', { state: { scrollTo: path }, replace: true });
//       return;
//     }

//     // Regular route navigation - reset scroll position
//     navigate(path);
//     window.scrollTo(0, 0);
//   };

//   useEffect(() => {
//     if (location.hash && !(location.state as any)?.scrollTo) {
//       const section = document.querySelector(location.hash);
//       if (section) {
//         setTimeout(() => {
//           section.scrollIntoView({ behavior: 'smooth' });
//         }, 300);
//       }
//     }

//     if ((location.state as any)?.scrollTo) {
//       const section = document.querySelector(location.state.scrollTo);
//       if (section) {
//         setTimeout(() => {
//           section.scrollIntoView({ behavior: 'smooth' });
//           // Clean up the state to prevent duplicate scrolls
//           navigate(location.pathname, { replace: true, state: {} });
//         }, 300);
//       }
//     }
//   }, [location, navigate]);

//   return (
//     <header className="sticky top-0 z-50 w-full bg-white shadow-md">
//     <nav className="max-w-[1200px] w-full mx-auto flex items-center justify-between py-4 px-4 md:px-8">
//       {/* Left: Logo */}
//       <div className="hidden flex-shrink-0">
//         <img
//           src="/image.png"
//           alt="Logo"
//           className="h-[30px] md:h-[40px] object-contain"
//         />
//       </div>
  
//       {/* Desktop Menu */}
//       <div className="hidden md:flex items-center gap-8 lg:gap-16">
//         {navigationItems.map((item, index) => (
//           <button
//             key={index}
//             onClick={() => handleNavigation(item.href)}
//             className="font-['Code',sans-serif] font-medium text-black text-base lg:text-xl hover:opacity-70 transition-opacity"
//           >
//             {item.label}
//           </button>
//         ))}
//       </div>
  
//       {/* Mobile Menu Button */}
//       <button
//         className="md:hidden text-black"
//         onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         aria-label="Toggle menu"
//       >
//         <Menu className="w-6 h-6" />
//       </button>
//     </nav>
//   </header>
//   );
// };





import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "HOME", href: "/" },
  { label: "PACKAGES", href: "#packages" },
  { label: "GALLERY", href: "#gallery" },
  // { label: "BLOG", href: "#blog" },
  { label: "CONTACT US", href: "/contact" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    setMobileMenuOpen(false);
    // If it's a hash link and we're already on the homepage
    if (path.startsWith('#') && location.pathname === '/') {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    if (path.startsWith('https://wa.me/')) {
      window.location.href = path;
      return;
    }

    // If it's a hash link but we're not on homepage
    if (path.startsWith('#')) {
      navigate('/', { state: { scrollTo: path }, replace: true });
      return;
    }

    // Regular route navigation - reset scroll position
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (location.hash && !(location.state as any)?.scrollTo) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }

    if ((location.state as any)?.scrollTo) {
      const section = document.querySelector(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          // Clean up the state to prevent duplicate scrolls
          navigate(location.pathname, { replace: true, state: {} });
        }, 300);
      }
    }
  }, [location, navigate]);

  return (
<header className="sticky top-0 z-50 bg-white shadow-md">
  {/* Outer container with full width */}
  <div className="w-full flex justify-center">
    {/* Inner fixed-width container */}
    <nav className="w-full max-w-[1440px] flex items-center justify-between md:justify-end px-4 md:px-8 py-3">
      {/* Left: Logo */}
      <div className="md:hidden flex-shrink-0">
        <img
          src="/image.png"
          alt="Logo"
          className="h-[30px] md:h-[40px] object-contain cursor-pointer"
          onClick={() => handleNavigation('/')}
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex md:items-center md:justify-end  gap-8 lg:gap-16">
        {navigationItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(item.href)}
            className="font-['Code',sans-serif] font-medium text-black text-base lg:text-xl hover:opacity-70 transition-opacity"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-black"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>
    </nav>
  </div>

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
          <button
            key={index}
            onClick={() => handleNavigation(item.href)}
            className="block w-full text-left font-['Poppins',Helvetica] font-medium text-gray-700 hover:text-blue-600 py-3 px-4 rounded-xl hover:bg-blue-50 transition-all duration-300"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  </div>
</header>

  );
};
