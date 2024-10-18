import React from "react";
import {
  dots2,
  headerData,
  oval,
  pointer,
  img8,
  over,
  pixelarrow,
  img4,
} from "../constants";

const Hero = () => {
  return (
    <section className="bg-customDark pointer-events-none">
      <div className=" justify-between p-[30px] hidden md:flex">
        {headerData.map((item) => (
          <div key={item.id} className="text-white">
            <p className="font-bold">{item.title}</p>
            <p dangerouslySetInnerHTML={{ __html: item.details }} />
          </div>
        ))}
      </div>
      <h1 className="font-modak text-center text-white text-[3rem] md:text-[14.7rem] leading-[12rem] ">
        LUMINESCENT
      </h1>
      <p className="font-comforter font-bold text-center text-[#ec749e] text-[3rem] -mt-[110px] md:text-[7rem] md:-mt-[130px]">
        Town
      </p>
      <div className=" px-[30px] items-center justify-between pb-5 hidden md:flex">
        <div className="flex items-center gap-5">
          <div>
            <img src={oval} width={100} alt="" />
          </div>
          <div className="gap-3 flex">
            <img src={dots2} width={15} alt="" />
            <img src={dots2} width={15} alt="" />
          </div>
          <div className="flex flex-col text-white">
            <p className="font-bold text-3xl">傷つく</p>
            <p className="tracking-[14px] font-asap ">HURT</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <img src={pointer} width={70} alt="" />
          <div className="flex gap-1">
            <div className="rounded-md bg-[#ffb7d0] w-12 h-12"></div>
            <div className="rounded-md bg-[#f997b9] w-12 h-12"></div>
            <div className="rounded-md bg-[#ef7ea5] w-12 h-12"></div>
            <div className="rounded-md bg-[#ef6494] w-12 h-12"></div>
            <div className="rounded-md bg-[#e04b79] w-12 h-12"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-[30px] gap-8 mt-10">
        <div className="flex flex-col w-1/2 gap-1 ">
          {/* Background image div 1 */}
          <div
            className="h-[16rem] rounded-3xl"
            style={{
              backgroundImage: `url(${img8})`,
              backgroundPosition: "0% 0%",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Background image div 2 */}
          <div
            className="relative h-[21rem] rounded-3xl "
            style={{
              backgroundImage: `url(${img8})`,
              backgroundPosition: "0% 50%",
              backgroundSize: "cover",
            }}
          >
            <img
              src={over}
              alt="Overlay"
              className="absolute  -top-[335px] w-[200%] h-[200%] object-contain"
            />
          </div>
        </div>
        <div className="w-1/2 font-asap text-white flex flex-col justify-between">
          <div div className="">
            <h1 className="font-extrabold">ABOUT</h1>
            <p className="font-semibold text-justify">
              A CAPTIVATING FUSION OF LIGHT AND IMAGINATION. A MESMERIZING
              ARTWORK THAT TRANSPORTS YOU TO A WORLD OF ETHEREAL BEAUTY AND
              ENCHANTMENT. CREATED THROUGH THE INGENIOUS COLLABORATION OF HUMAN
              CREATIVITY AND ARTIFICIAL INTELLIGENCE ALGORITHMS. "LUMINESCENT
              TOWN" IS A TESTAMENT TO THE LIMITLESS POSSIBILITIES OF
              A1-GENERATED ART.
            </p>
            <div className="flex justify-between items-center mt-5 font-asap font-bold">
              <button className="border border-white rounded-full w-3/5 py-2">
                SEE MORE
              </button>
              <div className="w-2/5 flex items-center justify-end gap-3">
                <p className="text-right font-medium text-sm">
                  CONTROL YOUR <br></br> SCROLL
                </p>
                <img src={pixelarrow} alt="Arrow" />
              </div>
            </div>
          </div>
          <div className="flex h-[21rem] gap-1">
            <div
              style={{
                backgroundImage: `url(${img4})`,
                backgroundPosition: "0% 60%",
                backgroundSize: "150%",
              }}
              className="rounded-3xl w-2/3 h-full bg-red-200" // Added a background color for visibility
            ></div>
            <div
              style={{
                backgroundImage: `url(${img4})`,
                backgroundPosition: "95% 59.4%",
                backgroundSize: "285%",
              }}
              className="rounded-3xl w-1/3 h-full bg-blue-200" // Added a background color for visibility
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
