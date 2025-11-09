import PackageCard from "../../components/PackagedCard";

function MaternityShootMenu() {
  const packages = [
    {
      category: "maternityshoot",
      title: "Package 1",
      duration: "1 Hour Shoot",
      features: ["2 back Drops", "1 Costumes", "Unlimited Soft Copies"],
      videoDetails: ["10 Edited Pics"],
      complimentaryItems: [],
      originalPrice: "9,000",
      price: "4,999",
    },
    {
      category: "maternityshoot",
      title: "Package 2",
      duration: "2 Hour's Shoot",
      features: [
        "3 back Drop + 2 themes",
        "2 Costumes",
        "Unlimited Soft Copies",
      ],
      videoItems: [],
      complimentaryItems: ["20 Edited Pics", "( 8x12 ) 1 Photo frame"],
      originalPrice: "18,000",
      price: "12,499",
    },
    {
      category: "maternityshoot",
      title: "Package 3",
      duration: "3 Hour's Shoot",
      features: [
        "4 themes + 3 Back Drops",
        "3 Costumes",
        "10 Sheets Album",
        "Unlimited Soft Copies",
      ],
      videoItems: [],
      complimentaryItems: ["30 Edited Pics", "( 12x15 ) 1 Photo frame"],
      originalPrice: "21,000",
      price: "15,499",
    },
    {
      category: "maternityshoot",
      title: "Package 4",
      duration: "4 Hour's Shoot",
      features: [
        "Indoor & Out Door",
        "6 themes + 3 Back Drops",
        "3 Costumes",
        "15 Sheets Album",
        "Unlimited Soft Copies",
      ],
      videoItems: [],
      complimentaryItems: [
        "40 Edited Pics",
        "1 Calendar",
        "( 12x18 ) 1 Photo frame",
        "30 Seconds 2 Reel",
      ],
      originalPrice: "28,000",
      price: "19,499",
    },
  ];

  return (
    <div className="bg-[#A2AF9B] relative overflow-hidden flex items-center justify-start md:justify-center">
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-[813px] hidden lg:block container relative mx-auto px-10 py-12">
        <div className="inline-block bg-[#c8cdc3]">
          <div className="w-[480px] flex">
            {/* Left Section: Text */}
            <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
              <h1 className="text-[#97a08e] py-1 font-semibold tracking-wide leading-none text-[30px]">
                MATERNITY
              </h1>
              <div className="h-[2px] bg-[#97a08e] w-full"></div>
              <h1 className="py-1 pr-8 text-[#97a08e] font-semibold tracking-wide leading-none text-[30px]">
                SHOOTS
              </h1>
            </div>

            {/* Right Section: Image */}
            <div className="w-[280px] h-[80px]">
              <img
                src="/WEB_MEDIA/Screenshot 2025-10-15 at 11.23.18 AM.png"
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

        <div className="absolute top-[348px] right-32 flex flex-col gap-6">
          {[...Array(2)].map((_, i) => (
            <div className="flex gap-6" key={i}>
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-3 h-3 rounded-full bg-white/40"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Rotated image - maternity illustration */}
        <div className="absolute top-[86px] right-[3%] w-64 h-72 rounded-xl shadow-2xl transform overflow-hidden flex items-center justify-center">
          <img
            src="/WEB_MEDIA/maternity.png"
            alt="Maternity illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Packages row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-center justify-start">
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
        <div className="flex flex-col lg:flex-row items-center justify-end gap-8 mt-12">
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
      <div className="block lg:hidden w-full px-6 py-8 space-y-12">
        {packages.map((pkg, index) => (
          <div key={index} className="space-y-6 flex flex-col items-center">
            {/* Maternity header + image */}
            <div className="w-full flex justify-start">
              <div className="inline-block bg-[#c8cdc3]">
                <div className="flex w-[280px]">
                  <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
                    <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-xl">
                      MATERNITY
                    </h1>
                    <div className="h-[2px] bg-[#97a08e] w-full"></div>
                    <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-xl">
                      SHOOTS
                    </h1>
                  </div>
                  <div className="w-[140px] h-[80px]">
                    <img
                      src="/WEB_MEDIA/Screenshot 2025-10-15 at 11.23.18 AM.png"
                      alt="Maternity shoot"
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

export default MaternityShootMenu;
