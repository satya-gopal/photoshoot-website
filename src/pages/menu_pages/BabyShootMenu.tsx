import PackageCard from "../../components/PackagedCard";

function BabyShootMenu() {
  const packages = [
    {
      category: "babyshoot",
      title: "Package 1",
      duration: "2 Hour's Shoot",
      features: ["Unlimited Baby Themes", "Unlimited Soft Copies"],
      videoDetails: ["Candid Photography", "10 Sheets Album"],
      complimentaryItems: [
        "10 Edited Pics",
        "1 Calender",
        "( 6x9 ) 1 Photo Frame",
        "( 30 Seconds 1 Reel )",
      ],
      originalPrice: "18,990",
      price: "14,499",
    },
    {
      category: "babyshoot",
      title: "Package 2",
      duration: "2 Hour's Shoot",
      features: ["Unlimited Baby Themes", "Unlimited Soft Copies"],
      videoDetails: [
        "Candid Photography",
        "10 Sheets Album",
        "Cinematic Videography",
        "( 2 Min ) Cinematic Video",
      ],
      complimentaryItems: [
        "20 Edited Pics",
        "1 Calender",
        "( 8x12 ) 1 Photo Frame",
        "( 30 Seconds 1 Reel )",
      ],
      originalPrice: "21,000",
      price: "17,499",
    },
    {
      category: "babyshoot",
      title: "Package 3",
      duration: "4 Hour's Shoot",
      features: [
        "Unlimited Baby Themes",
        "Unlimited Soft Copies",
        "CANDID PHOTOGRAPHY",
        "15 Sheets Album",
      ],
      videoDetails: [
        "CINEMATIC VIDEOGRAPHY",
        "( 3 to 4 ) Min Cinematic Video",
        "( 1 Min Teaser Glims )",
        "( 30 Seconds 2 Reels )",
      ],
      complimentaryItems: [
        "40 Edited Pics",
        "1 Calender",
        "( 12x18 ) 1 Photo Frame",
      ],
      originalPrice: "30,000",
      price: "25,499",
    },
    {
      category: "babyshoot",
      title: "Package 4",
      duration: "8 Hour's Shoot",
      features: [
        "Indoor & Out Door",
        "Unlimited Baby Themes",
        "Unlimited Soft Copies",
        "CANDID PHOTOGRAPHY",
        "20 Sheets Album",
      ],
      videoDetails: [
        "CINEMATIC VIDEOGRAPHY",
        "( 3 to 4 ) Min Cinematic Video",
        "( 1 Min Teaser Glims )",
        "( 30 Seconds 2 Reels )",
      ],
      complimentaryItems: [
        "60 Edited Pics",
        "1 Calender",
        "( 8x12 ) 1 Photo Frame",
        "( 12x18 ) 1 Photo Frame",
      ],
      originalPrice: "39,000",
      price: "34,499",
    },
  ];

  return (
    <div className=" bg-[#A2AF9B] relative overflow-hidden flex items-center justify-start md:justify-center">
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-[813px] hidden lg:block container relative mx-auto px-10 py-12">
        <div className="inline-block bg-[#c8cdc3]">
          <div className="w-[380px] flex">
            {/* Left Section: Text */}
            <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
              <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-[40px]">
                BABY
              </h1>
              <div className="h-[2px] bg-[#97a08e] w-full"></div>
              <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-[40px]">
                SHOOTS
              </h1>
            </div>

            {/* Right Section: Image */}
            <div className="w-[180px] h-auto">
              <img
                 src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/YES06599.JPG`}
                alt="Baby shoot"
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

        {/* Rotated image - hidden on mobile */}
        <div className="absolute top-[86px] right-[3%] w-48 h-64 rounded-xl shadow-2xl transform overflow-hidden">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/DSC02460.JPG`}
            alt="Baby photoshoot"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Packages row */}
        <div className="flex flex-wrap lg:flex-nowrap gap-6 items-end justify-start">
          {packages.map((pkg, index) => (
            <div key={index} className="mb-0 transition-all duration-500">
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>

        {/* Book Now button */}
        <div className="flex flex-col lg:flex-row items-center justify-end gap-8 ">
          <div className="relative inline-block">
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-white rounded-sm shadow-md z-0"></div>
            <div className="absolute -bottom-3 -left-5 w-9 h-9 bg-white rounded-sm shadow-md z-0"></div>
            <button className="relative z-10 bg-[#DCCFC0] transition-colors px-20 py-2 rounded-2xl shadow-lg text-xl font-bold tracking-wider text-gray-800">
              BOOK
              <br />N O W
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          {" "}
          <div className="flex items-center gap-2">
            {" "}
            <button className="w-8 h-1 bg-white rounded-full"></button>{" "}
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>{" "}
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>{" "}
            <div className="w-24 h-1 bg-white/40 rounded-full"></div>{" "}
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>{" "}
            <button className="w-2 h-2 bg-white/60 rounded-full"></button>{" "}
            <button className="w-8 h-1 bg-white rounded-full"></button>{" "}
          </div>{" "}
        </div>
      </div>

      {/* MOBILE VIEW */}
      {/* MOBILE VIEW */}
      <div className="block lg:hidden w-full px-6 py-8 space-y-12">
        {packages.map((pkg, index) => (
          <div key={index} className="space-y-6 flex flex-col items-center">
            {/* Baby Shoot header + image */}
            <div className="w-full flex justify-start">
              <div className="inline-block bg-[#c8cdc3]">
                <div className="flex w-[380px] sm:w-[400px]">
                  <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
                    <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-3xl">
                      BABY
                    </h1>
                    <div className="h-[2px] bg-[#97a08e] w-full"></div>
                    <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-3xl">
                      SHOOTS
                    </h1>
                  </div>
                  <div className="w-[150px] h-[120px]">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/YES06599.JPG`}
                      alt="Baby shoot"
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

export default BabyShootMenu;
