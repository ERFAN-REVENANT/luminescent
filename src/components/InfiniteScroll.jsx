import React from "react";
import { circle } from "../constants";

const InfiniteScroll = () => {
  return (
    <div className="px-[30px] bg-customDark py-[50px]">
      <div className="relative border border-1 border-white rounded-full w-full py-3 flex gap-5 overflow-hidden">

        <div className="scroll-content flex animate-RightToLeft font-modak text-white items-center text-[1.5rem] gap-5 whitespace-nowrap">

          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />


          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
          <p>#LUMINESCENTTOWN</p>
          <img src={circle} width={35} alt="" />
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
