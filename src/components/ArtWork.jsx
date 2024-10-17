import React from "react";
import { dots2 } from "../constants";

const ArtWork = () => {
  return (
    <section className="flex  bg-customDark w-full h-full justify-between px-[30px] pt-[100px]">
      {/* Left Side: Rotated Text and Dots */}
      <div className="flex flex-col items-center w-[50px] gap-5 pointer-events-none">
        <h1 className="absolute font-modak text-white -rotate-90 text-[3.5rem] translate-x-1">
          ARTWORK
        </h1>
        <div className="mt-[100px]">
          <img src={dots2} width={10} className="mt-[100px]" alt="" />
          <img src={dots2} width={10} className="mt-5" alt="" />
        </div>
        <div className="h-[300px] w-[1px] bg-white "></div>
      </div>

      {/* Right side content */}
      <div className="flex w-full px-[30px]">
        <div className="w-1/2">
          <div></div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </section>
  );
};

export default ArtWork;
