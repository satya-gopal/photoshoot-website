import PackageCard from "../../components/PackagedCard";

function NewBornShootMenu() {
  const packages = [
    {
      category: "newbornshoot",
      title: "Package 1",
      duration: "1 Hour Shoot",
      features: ["3 back Drops", "2 setups", "Unlimited Soft Copies"],
      videoDetails: ["Free Wrapping"],
      complimentaryItems: ["10 Edited Pics", "( 6x9 ) 1 Photo frame"],
      originalPrice: "7,500",
      price: "4,999",
    },
    {
      category: "newbornshoot",
      title: "Package 2",
      duration: "2 Hour's Shoot",
      features: ["4 back Drop", "3 Setups", "Unlimited Soft Copies"],
      videoDetails: ["Free Wrapping"],
      complimentaryItems: ["20 Edited Pics", "( 8x12 ) 1 Photo frame"],
      originalPrice: "16,500",
      price: "8,999",
    },
    {
      category: "newbornshoot",
      title: "Package 3",
      duration: "3 Hour's Shoot",
      features: [
        "5 Back Drops + 5 Setups",
        "10 Sheets Album",
        "Unlimited Soft Copies",
      ],
      videoDetails: ["Free Wrapping"],
      complimentaryItems: [
        "30 Edited Pics",
        "( 6x9 ) 2 Photo frame",
        "30 Seconds 1 Reel",
      ],
      originalPrice: "21,000",
      price: "14,999",
    },
    {
      category: "newbornshoot",
      title: "Package 4",
      duration: "4 Hour's Shoot",
      features: [
        "5 Back Drops + 6 Setups",
        "15 Sheets Album",
        "Unlimited Soft Copies",
        "Free Wrapping",
      ],
      complimentaryItems: [
        "40 Edited Pics",
        "1 Calendar",
        "( 12x18 ) 1 Photo frame",
        "30 Seconds 2 Reel",
      ],
      originalPrice: "28,000",
      price: "18,499",
    },
  ];

  return (
    <div className="bg-[#A2AF9B] relative overflow-hidden flex items-center justify-start md:justify-center">
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-[813px] hidden lg:block container relative mx-auto px-10 py-12">
        <div className="inline-block bg-[#c8cdc3]">
          <div className="w-[440px] flex">
            {/* Left Section: Text */}
            <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
              <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-[40px]">
                NEW BORN
              </h1>
              <div className="h-[2px] bg-[#97a08e] w-full"></div>
              <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-[40px]">
                SHOOTS
              </h1>
            </div>

            {/* Right Section: Image */}
            <div className="w-[180px] h-auto">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/newborn1.png`}
                alt="Maternity shoot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute top-8 right-5 flex flex-col gap-6">
          {[...Array(6)].map((_, i) => (
            <div className="flex gap-6" key={i}>
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-3 h-3 rounded-full bg-white/40"></div>
              ))}
            </div>
          ))}
        </div>

        <div className="absolute top-[288px] right-56 flex flex-col gap-8">
          {[...Array(3)].map((_, i) => (
            <div className="flex gap-6" key={i}>
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-3 h-3 rounded-full bg-white/40"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Rotated image - maternity illustration */}
        <div className="absolute top-[86px] right-[5%] w-64  rounded-xl shadow-2xl transform overflow-hidden flex items-center justify-center">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/newborn.png`}
            alt="Maternity illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Packages row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-end justify-start pt-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === 0
                  ? "translate-y-[-20px]" // Package 1 slightly lower
                  : index === 1
                  ? "translate-y-[40px]" // Package 2 base reference
                  : index === 2
                  ? "-translate-y-[-20px]" // Package 3 slightly raised like in your image
                  : "translate-y-[80px]" // Package 4 slightly lower
              }`}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Book Now button */}
        <div className="flex flex-col lg:flex-row items-center justify-end gap-8 mt-8">
          <div className="relative inline-block">
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-white rounded-sm shadow-md z-0"></div>
            <div className="absolute -bottom-3 -left-5 w-9 h-9 bg-white rounded-sm shadow-md z-0"></div>
            <button className="relative z-10 bg-[#DCCFC0] transition-colors px-20 py-2 rounded-2xl shadow-lg text-xl font-bold tracking-wider text-gray-800">
              BOOK
              <br />N O W
            </button>
          </div>
        </div>
        <div className="w-full lg:w-auto flex justify-center">
          <div className="flex items-center gap-2">
            <button className="w-8 h-1 bg-white rounded-full"></button>
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>
            <div className="w-24 h-1 bg-white/40 rounded-full"></div>
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>
            <button className="w-8 h-1 bg-white rounded-full"></button>
          </div>
        </div>
      </div>

      {/* MOBILE VIEW */}
      <div className="block lg:hidden w-full px-4 py-8 space-y-12">
        {packages.map((pkg, index) => (
          <div key={index} className="space-y-6 flex flex-col items-center">
            {/* Maternity header + image */}
            <div className="w-full flex justify-start ">
              <div className="inline-block bg-[#c8cdc3] rounded-md overflow-hidden">
                <div className="flex flex-row  w-full sm:w-[400px]">
                  {/* Text Section */}
                  <div className="pl-3 bg-[#d3d4d6] flex flex-col justify-center py-2 sm:py-0">
                    <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-2xl sm:text-3xl">
                      NEW BORN
                    </h1>
                    <div className="h-[2px] bg-[#97a08e] w-[80%] sm:w-full"></div>
                    <h1 className="py-1 pr-3 text-[#97a08e] font-bold tracking-wide leading-none text-2xl sm:text-3xl">
                      SHOOTS
                    </h1>
                  </div>

                  {/* Image Section */}
                  <div className="w-full ">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/newborn1.png`}
                      alt="newborn"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Package - centered, natural width */}
            <div className="flex justify-center w-full">
              <div className="inline-block">
                <PackageCard {...pkg} />
              </div>
            </div>

            {/* Book Now Button */}
            <div className="flex justify-center pt-4">
              <div className="relative inline-block">
                <div className="absolute -top-5 -right-5 w-12 h-12 bg-white rounded-sm shadow-md z-0"></div>
                <div className="absolute -bottom-3 -left-5 w-9 h-9 bg-white rounded-sm shadow-md z-0"></div>
                <button className="relative z-10 bg-[#DCCFC0] transition-colors px-20 py-2 rounded-2xl shadow-lg text-xl font-bold tracking-wider text-gray-800">
                  BOOK
                  <br />N O W
                </button>
              </div>
            </div>

            {/* Bottom dots */}
            <div className="w-full flex justify-center pt-4">
              <div className="flex items-center gap-2">
                <button className="w-8 h-1 bg-white rounded-full"></button>
                <button className="w-2 h-2 bg-white/60 rounded-full"></button>
                <button className="w-2 h-2 bg-white/60 rounded-full"></button>
                <div className="w-24 h-1 bg-white/40 rounded-full"></div>
                <button className="w-2 h-2 bg-white/60 rounded-full"></button>
                <button className="w-2 h-2 bg-white/60 rounded-full"></button>
                <button className="w-8 h-1 bg-white rounded-full"></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewBornShootMenu;
