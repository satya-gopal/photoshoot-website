import PackageCard from "../../components/PackagedCard";

function WeddingShootMenu() {
  const packages = [
    {
      category: "weddingshoot",
      title: "Package 1",
      duration: "1 Day Coverage",
      features: [
        "Candid Photography",
        "Traditional Photography",
        "Unlimited Soft Copies",
        "25 Sheets Album",
      ],
      videoDetails: [
        "Traditional Videography",
        "( 15-20 Min ) Highlight Video",
      ],
      complimentaryItems: [
        "100 Edited Pics",
        "( 12x18 ) 2 Photo Frame",
        "1 Calendar",
      ],
      originalPrice: "75,000",
      price: "59,999",
    },
    {
      category: "weddingshoot",
      title: "Package 2",
      duration: "2 Days Coverage",
      features: [
        "Candid Photography",
        "Traditional Photography",
        "Unlimited Soft Copies",
        "30 Sheets Album",
        "Drone Coverage",
      ],
      videoDetails: [
        "Cinematic Videography",
        "( 20-25 Min ) Cinematic Video",
        "( 2 Min ) Teaser",
        "( 1 Min ) Pre Wedding Film",
      ],
      complimentaryItems: [
        "150 Edited Pics",
        "( 12x18 ) 3 Photo Frame",
        "1 Calendar",
        "( LED Screen 8x10 )",
      ],
      originalPrice: "1,25,000",
      price: "99,999",
    },
    {
      category: "weddingshoot",
      title: "Package 3",
      duration: "3 Days Coverage",
      features: [
        "Candid Photography",
        "Traditional Photography",
        "Pre Wedding Shoot",
        "Unlimited Soft Copies",
        "40 Sheets Album",
        "Drone Coverage",
      ],
      videoDetails: [
        "Cinematic Videography",
        "( 30-40 Min ) Full Wedding Film",
        "( 3 Min ) Teaser",
        "( 2 Min ) Pre Wedding Film",
        "Same Day Edit",
      ],
      complimentaryItems: [
        "200 Edited Pics",
        "( 12x18 ) 4 Photo Frame",
        "2 Calendars",
        "( LED Screen 10x12 )",
        "Instagram Reels Package",
      ],
      originalPrice: "1,75,000",
      price: "1,49,999",
    },
    {
      category: "weddingshoot",
      title: "Package 4",
      duration: "Full Wedding Coverage",
      features: [
        "Pre Wedding Shoot",
        "Engagement Coverage",
        "Mehendi & Sangeet",
        "Wedding Day",
        "Reception Coverage",
        "Candid + Traditional",
        "Unlimited Soft Copies",
        "50 Sheets Premium Album",
        "Drone Coverage",
      ],
      videoDetails: [
        "Premium Cinematic Video",
        "( 45-60 Min ) Full Film",
        "( 5 Min ) Teaser",
        "( 3 Min ) Pre Wedding Film",
        "Same Day Edit",
        "All Events Coverage",
      ],
      complimentaryItems: [
        "300 Edited Pics",
        "( 12x18 ) 6 Photo Frame",
        "3 Calendars",
        "( LED Screen 12x15 )",
        "Complete Social Media Package",
        "USB in Premium Box",
      ],
      originalPrice: "2,50,000",
      price: "2,09,999",
    },
  ];

  return (
    <div className="bg-[#A2AF9B] relative overflow-hidden flex items-center justify-start md:justify-center">
      {/* DESKTOP VIEW */}
      <div className="max-w-[1440px] lg:h-auto hidden lg:block container relative mx-auto px-10 py-12">
        <div className="inline-block bg-[#c8cdc3]">
          <div className="w-[380px] flex">
            {/* Left Section: Text */}
            <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
              <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-[40px]">
                WEDDING
              </h1>
              <div className="h-[2px] bg-[#97a08e] w-full"></div>
              <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-[40px]">
                SHOOTS
              </h1>
            </div>

            {/* Right Section: Image */}
            <div className="w-[180px] h-auto">
              <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/wedding-couple.jpg`}
                alt="Wedding shoot"
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

        {/* Rotated image - wedding photoshoot */}
        <div className="absolute top-[86px] right-[3%] w-48 h-64 rounded-xl shadow-2xl transform overflow-hidden">
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/wedding-photo.jpg`}
            alt="Wedding photoshoot"
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
      <div className="block lg:hidden w-full px-6 py-8 space-y-12">
        {packages.map((pkg, index) => (
          <div key={index} className="space-y-6 flex flex-col items-center">
            {/* Wedding header + image */}
            <div className="w-full flex justify-start">
              <div className="inline-block bg-[#c8cdc3]">
                <div className="flex w-[380px] sm:w-[400px]">
                  <div className="flex-1 pl-3 bg-[#d3d4d6] flex flex-col justify-center">
                    <h1 className="text-[#97a08e] py-1 font-bold tracking-wide leading-none text-3xl">
                      WEDDING
                    </h1>
                    <div className="h-[2px] bg-[#97a08e] w-full"></div>
                    <h1 className="py-1 pr-8 text-[#97a08e] font-bold tracking-wide leading-none text-3xl">
                      SHOOTS
                    </h1>
                  </div>
                  <div className="w-[150px] h-[120px]">
                    <img
                      src={`${import.meta.env.VITE_IMAGE_BASE_URL}/WEB_MEDIA/wedding-couple.jpg`}
                      alt="Wedding shoot"
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

export default WeddingShootMenu;