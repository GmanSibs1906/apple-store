import React from "react";
import { mac1 } from "../../assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function CartItem() {
  return (
    <div className=" w-[69vw] h-[200px] bg-white mt-[20px] rounded-[10px] p-[20px] flex ">
      <img src={mac1} alt="" className="w-[15vw] object-contain " />
      <div className=" w-[45vw] flex flex-col ml-auto">
        <h2 className="text-[20px] font-light ">Dell XPS 13</h2>
        <p className="text-[#848484] text-[14px] mt-[5px]">White</p>
        <div className="flex my-[20px] items-center ">
          <FontAwesomeIcon
            icon={faStar}
            className="text-[17px] mr-[5px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-[17px] mr-[5px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-[17px] mr-[5px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-[17px] mr-[5px]"
          />
          <FontAwesomeIcon
            icon={faStar}
            className="text-[17px] mr-[5px]"
          />
          <span className=" font-light ml-[20px] ">4.5</span>
          <span className=" font-light flex ml-[20px]">Ratings: 200</span>
        </div>
        <div className="flex w-full justify-between">
        <div className="flex font-light text-[14px]">
        <span className="">R15936.00</span>
        <span className="mx-[5px]">x</span>
        <span className="">1</span>
        </div>
        <div className="flex items-center mr-[20px]">
        <span className=" text-red-600 text-[20px] ">-</span>
        <span className="mx-[18px]">1</span>
        <span className=" text-green-800 text-[20px] mb-[3px] ">+</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
