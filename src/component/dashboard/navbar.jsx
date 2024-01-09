import React, { useContext } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { SidebarContext } from "../context/themeContext";
import { BsQuestionCircle } from "react-icons/bs";
import MsgIcon from "../../assets/icons/msg.png";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  const sidebarWidth = useContext(SidebarContext);

  return (
    <div className="bg-white z-40 w-full p-4 sticky top-0 shadow">
      <div className="flex justify-between items-center">
        <div className="flex items-center md:ml-[2.5%]">
          <p className="font-inter text-lg">Payments</p>
          <BsQuestionCircle
            size={30}
            className="px-2 text-gray-600 hidden sm:block"
          />
          <p className="text-gray-600 text-sm hidden sm:block">How it Works</p>
        </div>
        <form className="w-1/4 hidden md:block">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 bg-[#f7f7f7] border border-gray-300  rounded-lg "
              placeholder="Search features, tutorials, etc."
            />
          </div>
        </form>
        <div className="flex items-center gap-4 mr-[3%]">
          <img
            src={MsgIcon}
            alt=""
            className="p-2 bg-gray-600/20 rounded-full w-10 object-scale-down"
          />
          <FaCaretDown
            size={25}
            className="p-2 h-10 bg-gray-600/20 rounded-full w-10 object-scale-down text-black/65"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
