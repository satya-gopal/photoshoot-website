export const PrePostWeddings = (): JSX.Element => {
  return (
    <div
      className="
      flex items-center justify-center 
       lg:h-[813px]
    "
    >
      <div
        id="prepostweddings"
        className=" bg-white flex  justify-center overflow-x-hidden  lg:h-[813px] lg:w-[1440px]  w-full"
      >
        <div className="flex flex-col md:flex-row w-full max-w-[1920px] h-full overflow-hidden relative">
          {/* Right section (Frame 55) - appears first on mobile */}
          <div className="relative order-1 md:order-2 flex-1 bg-[#fefefe] min-h-[500px] md:min-h-[855px]">
            <div
              className="absolute top-20 left-1/2 -translate-x-1/2 md:top-36 md:left-[235px] md:translate-x-0 w-[300px] md:w-[606px] h-[250px] md:h-[525px] bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: "url(../frame-55.png)" }}
            />

            <div className="absolute top-[10px] left-[5%] md:top-[45px] md:left-[108px] w-[90%] md:w-[867px] h-[40px] md:h-[69px] bg-[#d6d6d6]" />

            <div className="absolute top-[300px] left-[5%] md:top-[490px] md:left-[27px] [font-family:'Cheque'] font-normal text-black text-[40px] md:text-[85px] tracking-[0] leading-[normal]">
              PRE&amp;
              <br />
              POST
              <br />
              WEDDINGS
            </div>
          </div>

          {/* Left section (Frame 53) - appears second on mobile */}
          <div
            className="
            order-2 md:order-1 
            w-full md:w-[479px] md:flex-shrink-0
            h-[600px] md:h-[855px] 
            mt-6 md:mt-0 
            bg-cover bg-top md:bg-center bg-no-repeat
          "
            style={{ backgroundImage: "url(../frame-53.png)" }}
          />
        </div>
      </div>
    </div>
  );
};
