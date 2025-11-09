import React from "react";

export const NewBorn = (): JSX.Element => {
  return (
    <section className="w-full overflow-hidden bg-[linear-gradient(270deg,rgba(255,222,163,1)_0%,rgba(255,129,145,1)_100%)] flex justify-center items-end pt-6 pb-10 md:pb-0 md:pt-20 px-4 md:px-0">
      <div className="w-full max-w-[1440px] ">

        {/* 🖥️ Desktop / Tablet Layout */}
        <div className="hidden md:grid grid-cols-[70%_30%] items-center">
          {/* Left Large Image */}
          <div className="w-full h-full">
            <img
              src="/web.jpg"
              alt="Main"
              className="w-full h-full  "
            />
          </div>

          {/* Right Two Images (stacked vertically) */}
          <div className="flex flex-col ">
            <img
              src="/shoes1.jpg"
              alt="Shoes"
              className="w-full h-auto object-cover "
            />
            <img
              src="/group-3-2.jpg"
              alt="Group"
              className="w-full h-auto object-cover "
            />
          </div>
        </div>

        {/* 📱 Mobile Layout */}
        <div className="flex flex-col md:hidden items-center justify-center gap-4 mt-6">
          <img
            src="/web.jpg"
            alt="Main"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <img
            src="/shoes1.jpg"
            alt="Shoes"
            className="w-full h-auto object-cover rounded-2xl"
          />
          <img
            src="/group-3-2.jpg"
            alt="Group"
            className="w-full h-auto object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};