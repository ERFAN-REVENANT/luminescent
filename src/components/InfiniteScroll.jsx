import React from "react";
import { circle, scrollContent } from "../constants";

const InfiniteScroll = () => {
  const generateInfiniteContent = (items, repeatCount) => {
    let repeatedContent = [];
    let count = 0;

    do {
      repeatedContent = [...repeatedContent, ...items];
      count++;
    } while (count < repeatCount);

    return repeatedContent;
  };

  const infiniteContent = generateInfiniteContent(scrollContent, 20);

  return (
    <div className="px-[30px] bg-customDark py-[50px]">
      <div className="relative border border-1 border-white rounded-full w-full py-3 flex gap-5 overflow-hidden">
        <div className="scroll-content flex animate-RightToLeft font-modak text-white items-center text-[1.5rem] gap-5 whitespace-nowrap">
          {infiniteContent.map((item, index) => (
            <React.Fragment key={index}>
              <p>{item.text}</p>
              <img src={circle} width={35} alt="" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfiniteScroll;
