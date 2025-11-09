import React from "react";

export const MaternityShoot = (): JSX.Element => {
  const floralElements = [
    { top: "32px", left: "52px" },
    { top: "32px", left: "192px" },
    { top: "32px", left: "312px" },
    { top: "72px", left: "122px" },
    { top: "72px", left: "232px" },
    { top: "72px", left: "382px" },
  ];

  return (
    <div
      id="maternityshoot"
      className="pt-10 pb-20 bg-white w-full h-[813.69px] flex items-center justify-center overflow-hidden"
    >
      {/* ======= Desktop Version ======= */}
      <div className="hidden lg:flex lg:items-center lg:justify-center w-full h-screen">
        <main className="relative w-[1440px] h-[813.69px] mx-auto">
          <img
            className="absolute top-8 left-0 w-[1056px] h-[438px]"
            alt="Frame"
            src="/frame21.jpg"
          />
          {/* 
          {floralElements.map((element, index) => (
            <div
              key={`floral-${index}`}
              className="absolute w-6 h-6"
              style={{ top: element.top, left: element.left }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="3" fill="black" />
                <circle cx="12" cy="4" r="2" fill="black" />
                <circle cx="12" cy="20" r="2" fill="black" />
                <circle cx="4" cy="12" r="2" fill="black" />
                <circle cx="20" cy="12" r="2" fill="black" />
              </svg>
            </div>
          ))} */}

          <section className="absolute top-[298px] left-[1295px] w-[145px] h-[250px] flex gap-4">
            <div className="w-9 h-[250px] flex flex-col items-center justify-start bg-[#d9d9d9] pt-1.5">
              <div className="[font-family:'Megrim',Helvetica] font-light text-black text-[28px] text-center tracking-[0] leading-[40px]">
                M<br />O<br />N<br />T<br />H
              </div>
            </div>

            <div className="mt-[157px] w-[41px] h-[145px] bg-[#d9d9d9] -rotate-90" />
          </section>

          <div className="absolute top-[299px] left-[1069px] w-[214px] h-[249px] [background:url(/frame-24.png)_50%_50%_/_cover]" />

          <div className="absolute top-[566px] left-[1069px] w-[214px] h-[249px] rounded-[0px_0px_600px_0px] [background:url(/frame-26.png)_50%_50%_/_cover]" />

          <div className="absolute top-8 left-[1069px] w-[214px] h-[249px] rounded-[0px_600px_0px_0px] [background:url(/frame-25.png)_50%_50%_/_cover]" />

          {/* SHOOTS - Megrim Font */}
          <h2
            className="absolute top-[648px] left-[349px] font-extralight text-black text-[65px] text-center tracking-[16.25px] leading-[normal]"
            style={{ fontFamily: "'Megrim', cursive" }}
          >
            SHOOTS
          </h2>

          <img
            className="absolute top-[649px] left-[81px] w-[893px] h-px object-cover"
            alt="Line"
            src="/line-1.svg"
          />

          <div className="pt-1 absolute top-[506px] left-[1301px] [font-family:'Megrim',Helvetica] font-light text-black text-[28px] text-center tracking-[6.00px] leading-[normal]">
            SPECIAL
          </div>

          {/* MATERNITY - Komorebi Font */}
          <h1
            className=" pl-20 absolute top-[506px] flex justify-start  font-normal text-black text-[140px] text-center tracking-[30px] leading-[normal] whitespace-nowrap"
            style={{ fontFamily: "'Komorebi', sans-serif" }}
          >
            MATERNITY
          </h1>
        </main>
      </div>

      {/* ======= Mobile Version ======= */}
      <div className="lg:hidden w-full bg-[#d9d9d9] py-8">
        <div className="relative w-full max-w-[420px] mx-auto">
          {/* MATERNITY */}
          <div className="text-center bg-white mt-32">
            <span
              className="font-normal text-black text-[56px] tracking-[12px] "
              style={{ fontFamily: "'Komorebi', sans-serif" }}
            >
              MATERNITY
            </span>
          </div>

          {/* SHOOTS */}
          <div className="text-center">
            <h2
              className="font-extralight text-black text-[24px] tracking-[12px]"
              style={{ fontFamily: "'Megrim', cursive" }}
            >
              SHOOTS
            </h2>
          </div>

          {/* Images section (number 9) */}
          <div className="relative w-full h-[480px] mt-6">
            {/* Circle of 9 */}
            <div
              className="absolute top-[14px] left-[69px] w-[180px] h-[220px]"
              style={{
                backgroundImage: "url(/ed_1.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* Tail of 9 - top */}
            <div
              className="absolute top-[20px] left-[200px] w-[106px] h-[125px] rounded-tr-[600px] overflow-hidden"
              style={{
                backgroundImage: "url(/frame-25.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* Tail of 9 - middle */}
            <div
              className="absolute top-[150px] left-[200px] w-[106px] h-[125px]"
              style={{
                backgroundImage: "url(/frame-24.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* Tail of 9 - bottom */}
            <div
              className="absolute top-[270px] left-[200px] w-[106px] h-[125px] rounded-br-[600px] overflow-hidden"
              style={{
                backgroundImage: "url(/frame-26.png)",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            />

            {/* Footprints */}
            {["230", "265", "300", "335", "370"].map((top, i) => (
              <div
                key={i}
                className="absolute left-[170px] text-black text-lg"
                style={{ top: `${top}px` }}
              >
                👣
              </div>
            ))}
          </div>

          {/* Bottom text */}
          <div className="text-center py-2 bg-white">
            <h3
              className="font-light text-black text-[20px] tracking-[14px]"
              style={{ fontFamily: "'Megrim', cursive" }}
            >
             MONTH SPECIAL
            </h3>
          </div>

          {/* Gray bottom strip */}
          <div className="w-full h-16 bg-[#d9d9d9]" />
        </div>
      </div>
    </div>
  );
};
