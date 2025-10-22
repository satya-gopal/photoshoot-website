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
    <div id="maternityshoot" className="bg-white w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="hidden lg:block w-full" style={{
        aspectRatio: '1440 / 813.69',
        maxWidth: '100vw',
        maxHeight: '100vh',
      }}>
        <main className="relative w-[1440px] h-[813.69px] origin-top-left" style={{
          transform: 'scale(var(--scale))',
          ['--scale' as any]: 'min(100vw / 1440, 100vh / 813.69)'
        }}>
          <img
            className="absolute top-8 left-0 w-[1056px] h-[438px]"
            alt="Frame"
            src="/frame-21.svg"
          />

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
          ))}

          <section className="absolute top-[298px] left-[1295px] w-[145px] h-[250px] flex gap-4">
            <div className="w-9 h-[250px] flex flex-col items-center justify-start bg-[#d9d9d9] pt-1.5">
              <div className="[font-family:'Poppins',Helvetica] font-light text-black text-[28px] text-center tracking-[0] leading-[36px]">
                M<br/>O<br/>N<br/>T<br/>H
              </div>
            </div>

            <div className="mt-[157px] w-[41px] h-[145px] bg-[#d9d9d9] -rotate-90" />
          </section>

          <div className="absolute top-[299px] left-[1069px] w-[214px] h-[249px] [background:url(/frame-24.png)_50%_50%_/_cover]" />

          <div className="absolute top-[566px] left-[1069px] w-[214px] h-[249px] rounded-[0px_0px_600px_0px] [background:url(/frame-26.png)_50%_50%_/_cover]" />

          <div className="absolute top-8 left-[1069px] w-[214px] h-[249px] rounded-[0px_600px_0px_0px] [background:url(/frame-25.png)_50%_50%_/_cover]" />

          <h2 className="absolute top-[628px] left-[349px] [font-family:'Montserrat',Helvetica] font-extralight text-black text-[65px] text-center tracking-[16.25px] leading-[normal]">
            SHOOTS
          </h2>

          <img
            className="absolute top-[619px] left-[81px] w-[893px] h-px object-cover"
            alt="Line"
            src="/line-1.svg"
          />

          <div className="absolute top-[506px] left-[1301px] [font-family:'Poppins',Helvetica] font-light text-black text-[28px] text-center tracking-[3.00px] leading-[normal]">
            SPECIAL
          </div>

          <h1 className="absolute top-[506px] left-[185px] [font-family:'Miltonian',Helvetica] font-normal text-black text-8xl text-center tracking-[0] leading-[normal] whitespace-nowrap">
            MATERNITY
          </h1>
        </main>
      </div>

      <div className="lg:hidden w-full min-h-screen flex flex-col">
        <div className="relative w-full px-4 py-8 md:px-8 md:py-12">
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
            {floralElements.slice(0, 4).map((_, index) => (
              <div key={`floral-mobile-${index}`} className="w-4 h-4 md:w-6 md:h-6">
                <svg
                  width="100%"
                  height="100%"
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
            ))}
          </div>

          <div className="relative mb-8 md:mb-12">
            <img
              className="w-full h-auto max-w-full"
              alt="Frame"
              src="/frame-21.svg"
            />
          </div>

          <div className="text-center mb-8 md:mb-12">
            <h1 className="[font-family:'Miltonian',Helvetica] font-normal text-black text-4xl md:text-6xl mb-4 md:mb-6 tracking-tight">
              MATERNITY
            </h1>

            <div className="w-full h-px bg-black mb-4 md:mb-6" />

            <h2 className="[font-family:'Montserrat',Helvetica] font-extralight text-black text-3xl md:text-5xl tracking-[8px] md:tracking-[12px]">
              SHOOTS
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="rounded-tl-[100px] md:rounded-tl-[150px] overflow-hidden aspect-[4/5] [background:url(/frame-25.png)_50%_50%_/_cover]" />
            <div className="aspect-[4/5] [background:url(/frame-24.png)_50%_50%_/_cover]" />
            <div className="rounded-br-[100px] md:rounded-br-[150px] overflow-hidden aspect-[4/5] [background:url(/frame-26.png)_50%_50%_/_cover]" />
          </div>

          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div className="relative flex items-center justify-center w-24 h-32 md:w-32 md:h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#d9d9d9] text-[120px] md:text-[160px] leading-none">
                  9
                </span>
              </div>
              <div className="relative z-10 [font-family:'Poppins',Helvetica] font-light text-black text-sm md:text-lg text-center tracking-[0] leading-tight">
                M<br/>O<br/>N<br/>T<br/>H
              </div>
            </div>

            <div className="[font-family:'Poppins',Helvetica] font-light text-black text-base md:text-xl tracking-[3px] md:tracking-[5px]">
              SPECIAL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
