import React, { useState } from "react";
import { TbLayoutNavbar } from "react-icons/tb";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const navButton = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  };
  return (
    <div className="absolute w-full flex justify-between p-4">
      <p className="text-white font-bold z-30 md:text-3xl text-l font-Teko">
        Experiences
      </p>
      <TbLayoutNavbar
        className="right-0 flex justify-center text-white z-30 cursor-pointer"
        size={25}
        onClick={navButton}
      />
      <div
        className={
          nav
            ? "fixed ease-out top-0 left-0 h-screen w-full flex-col justify-center items-center text-gray-300 z-20 bg-black/90 duration-500"
            : "fixed ease-in h-screen left-[-100%] duration-500"
        }
      >
        <ul className="flex flex-col fixed w-full h-full items-center justify-center">
          <li className="p-8 font-bold text-gray-200 text-xl cursor-pointer">
            Home
          </li>
          <li className="p-8 font-bold text-gray-200 text-xl cursor-pointer">
            Rooms
          </li>
          <li className="p-8 font-bold text-gray-200 text-xl cursor-pointer">
            Amenities
          </li>
          <li className="p-8 font-bold text-gray-200 text-xl cursor-pointer">
            Destination
          </li>
          <li className="p-8 font-bold text-gray-200 text-xl cursor-pointer">
            Contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
