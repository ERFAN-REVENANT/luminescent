import React from "react";
import { menuItems } from "../constants";
import { RiMenu3Line } from "react-icons/ri"; // Import the icon

const Header = () => {
  return (
    <div className="bg-customDark  flex items-center h-full w-full justify-between">
      {/* Logo */}
      <p className="font-modak text-white text-[2rem] px-[30px]">JOANN</p>

      {/* Menu and button container */}
      <div className="h-full flex-grow bg-white rounded-l-full px-7 py-1 flex items-center justify-between font-asap font-bold">
        {/* Menu items */}
        <div className="flex">
          {menuItems.map((item) => (
            <div className="px-10 hover:cursor-pointer" key={item.id}>
              {item.title}
            </div>
          ))}
        </div>

        {/* Button with icon */}
        <button className="bg-customDark text-white p-2 rounded-md flex items-center">
          <RiMenu3Line size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
