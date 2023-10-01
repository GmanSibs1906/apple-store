import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function WatchHalfPageBanner({ image, logo, link }) {
  return (
    <div className=" w-[48vw] h-[100%] bg-black flex flex-col justify-between ">
    <div className=" flex-col justify-center items-center mt-[40px] ">
      <h1 className=" font-semibold text-[25px] text-white flex w-full justify-center ">
      <img src={logo} alt="white logo" className=" h-[25px] object-contain mt-[5px] mr-[2px] " />
        WATCH
      </h1>
      <div className=" text-[13px] text-[#cc2127] font-semibold flex w-full justify-center my-[2px] ">SERIES 8</div>
      <h3 className=" text-white text-[16px] flex w-full justify-center ">
        Lovable. Drawable. Magical
      </h3>
      <Link to={link} className="hover:underline text-[#4478c5] mt-[15px]">
        <h5 className=" flex w-full justify-center items-center text-[15px] mt-[5px] ">
          Learn more
          <FontAwesomeIcon
            icon={faAngleRight}
            className="text-[10px] ml-[5px] mt-[3px] "
          />
        </h5>
      </Link>
    </div>
    <img src={image} alt="watch" className="" />
  </div>
  )
}

export default WatchHalfPageBanner