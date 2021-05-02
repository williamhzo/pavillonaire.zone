import React from "react";

export default function Instagram({ handleClick }) {
  return (
    <a
      onClick={handleClick}
      className=" fill-current text-white blend-difference absolute z-10 w-9 h-9 left-6 top-6 border border-white flex justify-center items-center cursor-pointer group"
    >
      <div className="bg-white w-3 h-3 transform rotate-45 group-hover:rotate-0 transition duration-300 ease-in-out" />
    </a>
  );
}
