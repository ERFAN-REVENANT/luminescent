import React from "react";
import {
  dots2,
  arrow,
  artContent,
  img1,
  ovals,
  barcode,
  img6,
  img2,
} from "../constants"; // Ensure artContent and arrow are imported correctly

const ArtWork = () => {
  return (
    <section className="flex flex-col md:flex-row bg-customDark w-full h-full items-start justify-between px-[30px]">
      {/* Left Side: Rotated Text and Dots (Hidden by default, visible on md and above) */}
      <div className="hidden md:flex flex-col items-center w-[50px] gap-5 pointer-events-none">
        <h1 className="absolute font-modak text-white -rotate-90 text-[3.5rem] translate-x-1 translate-y-[87px]">
          ARTWORK
        </h1>
        <div className="mt-[100px]">
          <img src={dots2} width={10} className="mt-[180px]" alt="" />
          <img src={dots2} width={10} className="mt-5" alt="" />
        </div>
        <div className="h-[740px] w-[1px] bg-white"></div>
      </div>

      {/* Right Side: Art Content (Becomes a column on small screens and row on md and above) */}
      <div className="flex flex-col md:flex-row  w-full md:pl-[30px] gap-[30px] justify-between">
        {/* Left Column of the Right Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          <div className="w-full border border-1 border-white rounded-[40px] relative p-4 grid grid-cols-2 grid-rows-2 gap-4">
            {/* Horizontal and Vertical Lines */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Vertical Line */}
              <div className="h-full w-[1px] bg-white absolute"></div>
              {/* Horizontal Line */}
              <div className="w-full h-[1px] bg-white absolute"></div>
            </div>

            {/* Render artContent in 2x2 grid */}
            {artContent.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start justify-between px-1 md:px-3 py-4 font-asap gap-[150px]"
              >
                {/* Title and Arrow */}
                <div className="flex items-center justify-between w-full">
                  <h1 className="text-white text-sm md:text-xl font-extrabold">
                    {item.title}
                  </h1>
                  <img src={arrow} alt="arrow" width={50} />
                </div>

                {/* Icon and Text */}
                <div className="flex flex-col items-start">
                  <img
                    src={item.icn}
                    alt={item.title}
                    width={60}
                    className="mb-5"
                  />
                  <p className="text-white text-sm md:text-md text-justify">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Background Image */}
          <div
            className="h-[16rem] md:h-full rounded-[40px]"
            style={{
              backgroundImage: `url(${img2})`,
              backgroundSize: "cover",
              backgroundPosition: "0% 45%",
            }}
          ></div>
        </div>

        {/* Right Column of the Right Side */}
        <div className="w-full md:w-1/2">
          <div className="w-full hidden md:block">
            <div
              className="h-[12rem] md:h-[18rem] rounded-[40px] mb-1"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "0% 40%",
              }}
            ></div>

            {/* Second div with background image */}
            <div
              className="h-[12rem] md:h-[16rem] rounded-[40px]"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: "cover",
                backgroundPosition: "0% 89%",
              }}
            ></div>
          </div>

          {/* Text and Image Section */}
          <div className="flex flex-col md:flex-row w-full justify-center mt-[20px] md:mt-[45px] pointer-events-none">
            <div className="flex flex-col md:flex-row gap-[30px] text-white w-full max-w-[1200px]">
              {/* Text Block */}
              <div className="w-full md:w-2/5 flex flex-col items-center md:items-start">
                <img src={ovals} className="mb-7" width={270} alt="" />
                <p className="font-asap text-justify mb-5">
                  LUMINESCENT TOWN STANDS AS A TESTAMENT TO THE HARMONIOUS UNION
                  OF ARTISTRY AND MACHINE INTELLIGENCE. WITNESS HOW HUMAN
                  CREATIVITY INFORMED AND GUIDED THE Al ALGORITHM, INFUSING IT
                  WITH A VISION THAT GOES BEYOND ALGORITHMIC CALCULATIONS.
                </p>
                <p className="text-left font-bold text-xl w-full">
                  <span className="inline-flex items-center justify-between mb-1">
                    UNVEILING THE{" "}
                    <img src={barcode} width={90} alt="" className="ml-2" />
                  </span>
                  <br />
                  <span className="block">CREATIVE PROCESS</span>
                </p>
                <p className="font-comforter font-bold text-[#e55c90] text-[4rem] md:text-[4.5rem]">
                  Luminescent
                </p>
              </div>

              {/* Image Block */}
              <div className="w-full md:w-3/5">
                <img
                  className="rounded-[40px] object-cover h-[20rem] md:h-[30rem] w-full"
                  src={img6}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtWork;
