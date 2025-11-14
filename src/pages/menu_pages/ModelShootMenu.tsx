import PackageCard from "../../components/PackagedCard";

function ModelShootMenu() {
  const packages = [
    {
      category: "modelshoot",
      title: "Package 1",
      duration: "1 Hour Shoot",
      features: ["3 Back Drops", "2 themes", "Unlimited Soft Copies"],
      videoDetails: ["Including With Photography"],
      complimentaryItems: [],
      originalPrice: "7,500",
      price: "4,599",
    },
    {
      category: "modelshoot",
      title: "Package 2",
      duration: "2 Hour's Shoot",
      features: ["4 back Drop", "3 themes", "Unlimited Soft Copies"],
      videoDetails: ["Including With Photography"],
      originalPrice: "12,600",
      price: "7,999",
      complimentaryItems: [],
    },
    {
      category: "modelshoot",
      title: "Package 3",
      duration: "4 Hour's Shoot",
      features: [
        "5 Back Drops",
        "5 themes",
        "Unlimited Soft Copies",
        "30 Seconds 1 Reel",
      ],
      videoDetails: ["Including With Photography"],
      originalPrice: "18,000",
      price: "14,999",
      complimentaryItems: [],
    },
  ];

  return (
    <div
      className=" bg-[#7e8778] relative overflow-hidden flex items-center justify-start md:justify-center"
    >
      {" "}
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-[813px] hidden lg:block container relative mx-auto px-10 py-12 bg-cover bg-center bg-no-repeat"
       style={{ backgroundImage: "url('/WEB_MEDIA/model_shoot_BG.png')" }}>
        <div className="inline-block bg-[#c8cdc3]">
          <div className="w-[380px] flex">
            {/* Left Section: Text */}
            <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
              <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-[40px]">
                MODEL
              </h1>
              <div className="h-[2px] bg-[#97a08e] w-full"></div>
              <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-[40px]">
                SHOOTS
              </h1>
            </div>

            {/* Right Section: Image */}
            <div className="w-[180px] h-24">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/modelshoot.png`}
                alt="Model shoot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Packages row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-end justify-start pt-32">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === 0
                  ? "translate-y-[0px]" // Package 1 slightly lower
                  : index === 1
                  ? "translate-y-[32px]" // Package 2 base reference
                  : "translate-y-[20px]" // Package 4 slightly lower
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
        <div className="z-[999] w-full lg:w-auto flex justify-center">
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
            <div className="w-full flex justify-center ">
              <div className="inline-block bg-[#c8cdc3] rounded-md overflow-hidden">
                <div className="flex flex-row  w-full sm:w-[400px]">
                  {/* Text Section */}
                  <div className="pl-3 bg-[#d3d4d6] flex flex-col justify-center py-2 sm:py-0">
                    <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-2xl sm:text-3xl">
                      MODEL
                    </h1>
                    <div className="h-[2px] bg-[#97a08e] w-[80%] sm:w-full"></div>
                    <h1 className="py-1 pr-3 text-[#97a08e] font-bold tracking-wide leading-none text-2xl sm:text-3xl">
                      SHOOTS
                    </h1>
                  </div>

                  {/* Image Section */}
                  <div className="w-full h-32 ">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/modelshoot.png`}
                      alt="modelshoot"
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

export default ModelShootMenu;
