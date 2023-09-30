import React from "react";
import { logo } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" sticky z-50 top-0 flex justify-center w-[100%] overflow-x-hidden h-[50px] bg-[#454545]  text-[12px] ">
      <div className=" w-[80vw] flex justify-evenly items-center text-[#c9c9c9] ">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-[25px] object-contain " />
        </Link>
        <Link to="products/Mac">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-blue-300 hover:to-blue-700 transition-all duration-300 ">
            Mac
          </span>
        </Link>
        <Link to="products/iPad">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-yellow-200 hover:to-orange-600 transition-all duration-300 ">
            iPad
          </span>
        </Link>
        <Link to="products/iPhone">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-pink-200 hover:to-purple-600 transition-all duration-300 ">
            iPhone
          </span>
        </Link>
        <Link to="products/Watch">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-blue-300 hover:to-blue-700 transition-all duration-300 ">
            Watch
          </span>
        </Link>
        <Link to="products/electronics">
          <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-yellow-200 hover:to-orange-600 transition-all duration-300 ">
            Other
          </span>
        </Link>
        <span className=" cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#c9c9c9] to-[#c9c9c9] hover:from-pink-200 hover:to-purple-600 transition-all duration-300 ">
          Log in
        </span>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[14px]" />
      </div>
    </div>
  );
}

export default Navbar;
