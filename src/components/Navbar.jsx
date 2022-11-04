import React from "react";
import icon from "../assets/icon.png";

const Navbar = () => {
  return (
    <div className="flex fixed mt-5 w-60 md:w-[500px] xl:w-[1000px] h-[80px] shadow-2xl rounded-2xl items-center px-4 py-2 justify-between bg-[#fbfbfc] z-10">
      <div className="flex items-center justify-center ">
        <img src={icon} alt="icon" className="w-10 h-10" />
        <h1 className="text-black text-xl font-bold p-4 ">Java.info</h1>
      </div>

      <div className="text-white">
        <button className="px-4 py-2 w-50 bg-blue-500 text-white rounded-md hover:bg-blue-600 hidden md:block">
          {/* icon uparrow key with the text Volver arriba*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline-block mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
          Volver Arriba
        </button>
      </div>
    </div>
  );
};

export default Navbar;
