import { Facebook, Youtube, Instagram, Globe, Mail, Phone } from "lucide-react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";



export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <button>
          <a
          href="contact"
          className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-2xl sm:text-3xl lg:text-4xl px-8 sm:px-12 lg:px-16 py-4 sm:py-5 lg:py-6 rounded-lg shadow-xl transition-all duration-300 tracking-wider w-full sm:w-auto">
           
            GET IN TOUCH
            </a>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 lg:gap-12 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <h3 className="text-base sm:text-2xl font-bold mb-3 sm:mb-6 tracking-wide">
              OUR SERVICES
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Our Packages
                </a>
              </li>
              <li>
                <a
                  href="contact"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Contact Us
                </a>
              </li>
              {/* <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Blog
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-2xl font-bold mb-3 sm:mb-6 tracking-wide">
              OUR SERVICES
            </h3>
            <ul className="space-y-1.5 sm:space-y-3">
              <li>
                <a
                  href="#babyshoot"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Baby Photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Cake Smash photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#couplephotoshoot"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Couple Photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#maternityshoot"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Maternity Photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#modelphotoshoot"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Model Photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#prepostweddings"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  Pre & Post Wedding Photoshoot
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-300 hover:text-white transition-colors text-xs sm:text-base"
                >
                  LED Screen Rents
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-center lg:items-start">
            <h3 className="text-base sm:text-2xl font-bold mb-3 sm:mb-6 tracking-wide">
              FOLLOW US
            </h3>
            <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center sm:justify-center lg:justify-start">
              <a
                href="https://www.facebook.com/theshootingspot/"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
              >
                <Facebook size={18} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.youtube.com/@theshootingspot/"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
              >
                <AiOutlineYoutube size={18} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://www.instagram.com/the_shooting_spot/"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
              >
                <AiOutlineInstagram size={18} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="https://shootingzonehyderabad.com/"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
              >
                <Globe size={18} className="sm:w-6 sm:h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col items-center sm:items-center lg:items-start gap-4 sm:gap-8 lg:gap-6 w-full sm:w-auto">
              <div className="bg-white p-3 sm:p-4 rounded-lg">
                <div className="w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}/studioqr.png`} // public folder path
                    alt="Studio QR"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <div className="flex flex-row  gap-3 sm:gap-4 justify-center sm:justify-center lg:justify-start">
                <a
                  href="mailto:info@shootingzonehyderabad.com"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
                >
                  <Mail size={18} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="tel:+919000375893"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full hover:bg-white hover:text-gray-800 transition-all"
                >
                  <Phone size={18} className="sm:w-6 sm:h-6" />
                </a>
                <a
                  href="https://wa.me/919000375863"
                  className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full hover:bg-green-600 transition-all"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-white"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex items-start gap-2 text-gray-300 text-xs sm:text-sm">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            <p>
              Door No: 25-35/3/D, 5th Floor, Sekhar Archade IT Cell, Mumbai High
              Way 65, RC Reddy Colony, Near Beeramguda Kaman, Hyderabad -
              502032.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
