import PackageCard from "../../components/PackagedCard";

function BirthdayShootMenu() {
  const packages = [
    {
      category: "birthdayshoot",
      title: "Package 1",
      duration: "Total 8 Hour's Shoot",
      features: [
        "Pre Birthday & birthday",
        "PRE BIRTHDAY 5 Hour's",
        "CANDID PHOTOGRAPHY",
        "Unlimited Baby Themes",
        "Unlimited Soft Copies",
        "BIRTHDAY 5 Hour's",
        "CANDID PHOTOGRAPHY",
      ],
      videoDetails:["Unlimited Soft Copies",],
      complimentaryItems: ["30 Edited Pics", "( 12x18 ) 1 Photo Frame"],
      originalPrice: "39,000",
      price: "32,499",
    },
    {
      category: "birthdayshoot",
      title: "Package 2",
      duration: "Total 9 Hour's Shoot",
      features: [
        "Pre Birthday & birthday",
        "PRE BIRTHDAY 5 Hour's",
        "Cinematic Videography",
        "Candid Photography",
        "15 Sheets Album",
        "( 4min full song )",
        "( 1 Min Teaser Glims )",
        "Unlimited Soft Copies",
        "Unlimited Baby Themes",
      ],
      videoDetails: [
        "BIRTHDAY 5 Hour's",
        "Candid Photography",
        "Regular Videography",
        "15 Sheets Album",
        "Invitation Video",
        "Unlimited Soft Copies",
      ],
      complimentaryItems: [
        "40 Edited Pics",
        "( 12x18 ) 1 Photo Frame",
        "( 8x12 ) 1 Photo Frame",
        "30 Seconds 1 Reel",
      ],
      originalPrice: "55,000",
      price: "49,499",
    },
    {
      category: "birthdayshoot",
      title: "Package 3",
      duration: "Total 10 Hour's Shoot",
      features: [
        "Pre Birthday & birthday",
        "PRE BIRTHDAY 5 Hour's",
        "Cinematic Videography",
        "Candid Photography",
        "15 Sheets Album",
        "( 4min full song )",
        "( 1 Min Teaser Glims )",
        "Unlimited Soft Copies",
        "Unlimited Baby Themes",
      ],
      videoDetails: [
        "BIRTHDAY 5 Hour's",
        "Cinematic Videography",
        "Candid Photography",
        "( LED Screen 6x8 )",
        "20 Sheets Album",
        "Invitation Video",
        "Unlimited Soft Copies",
      ],
      complimentaryItems: [
        "60 Edited Pics",
        "( 12x18 ) 1 Photo Frame",
        "( 8x12 ) 1 Photo Frame",
        "30 Seconds 2 Reel",
      ],
      originalPrice: "68,000",
      price: "62,499",
    },
    {
      category: "birthdayshoot",
      title: "Package 4",
      duration: "1 DAY SHOOT",
      features: [
        "Pre Birthday & birthday",
        "PRE BIRTHDAY",
        "Cinematic Videography",
        "Candid Photography",
        "20 Sheets Album",
        "( 4min full song )",
        "( 1 Min Teaser Glims )",
        "Unlimited Soft Copies",
        "Unlimited Baby Themes",
      ],
      videoDetails: [
        "BIRTHDAY",
        "Cinematic Videography",
        "Candid Photography",
        "( LED Screen 8x8 )",
        "20 Sheets Album",
        "Invitation Video",
        "Unlimited Soft Copies",
      ],
      complimentaryItems: [
        "80 Edited Pics",
        "( 12x18 ) 2 Photo Frame",
        "30 Seconds 2 Reel",
      ],
      originalPrice: "88,000",
      price: "79,499",
    },
  ];

  return (
    <div className="bg-[#A2AF9B] relative overflow-hidden flex items-center justify-start md:justify-center">
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-[813px]  hidden lg:block container relative mx-auto px-10 py-4">
        <div className="w-[260px] flex">
          {/* Left Section: Text only */}
          <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center py-2">
            <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-[28px]">
              BIRTHDAY
            </h1>
            <div className="h-[2px] bg-[#97a08e] w-full"></div>
            <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-[28px]">
              PRE BIRTHDAY
            </h1>
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

        <div className="absolute top-[248px] right-56 flex flex-col gap-6">
          {[...Array(2)].map((_, i) => (
            <div className="flex gap-6" key={i}>
              {[...Array(3)].map((_, j) => (
                <div key={j} className="w-3 h-3 rounded-full bg-white/40"></div>
              ))}
            </div>
          ))}
        </div>

        {/* Rotated image - birthday collage */}
        <div className="absolute top-[88px] right-[3%] w-72 h-36 rounded-xl shadow-2xl transform overflow-hidden bg-white p-2">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/birthdaygroup.png`}
            alt="Birthday photoshoot"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Packages row */}
        <div className="absolute bottom-[90px] left-[100px] flex items-end gap-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ${
                index === 0
                  ? "translate-y-[0px]" // Package 1 slightly lower
                  : index === 1
                  ? "translate-y-[-20px]" // Package 2 base reference
                  : index === 2
                  ? "-translate-y-[-20px]" // Package 3 slightly raised like in your image
                  : "translate-y-[-18px]" // Package 4 slightly lower
              }`}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
        {/* Book Now button */}
        <div className="absolute bottom-[60px] right-[60px] flex flex-col lg:flex-row items-center justify-end gap-8 mt-8">
          <div className="relative inline-block">
            <div className="absolute -top-5 -right-5 w-12 h-12 bg-white rounded-sm shadow-md z-0"></div>
            <div className="absolute -bottom-3 -left-5 w-9 h-9 bg-white rounded-sm shadow-md z-0"></div>
            <button className="relative z-10 bg-[#DCCFC0] transition-colors px-20 py-2 rounded-2xl shadow-lg text-xl font-bold tracking-wider text-gray-800">
              BOOK
              <br />N O W
            </button>
          </div>
        </div>
        <div className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 flex justify-center">
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
                            BIRTHDAY
                          </h1>
                          <div className="h-[2px] bg-[#97a08e] w-full"></div>
                          <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-xl">
                            SHOOTS
                          </h1>
                        </div>
                        <div className="w-[140px] h-[80px]">
                          <img
                            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/DSC02975.JPG`}
                            alt="BIRTHDAY shoot"
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

export default BirthdayShootMenu;
