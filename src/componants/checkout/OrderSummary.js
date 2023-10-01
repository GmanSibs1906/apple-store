import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

function OrderSummary() {
  return (
    <div className=" fixed right-[100px] flex w-[22vw] h-[80vh] mt-[70px] px-[20px] flex-col items-center">
      <div className="flex bg-white w-[250px] rounded-[10px] flex-col px-[15px] py-[20px]">
        <div className="font-semibold text-[18px]"> Order Summary</div>
        <div className="flex flex-col text-[14px] font-light text-[#454545] my-[10px] h-[130px] justify-evenly ">
          <div className="flex w-full justify-between">
            <span>Items:</span>
            <span>5</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Cost:</span>
            <span>R1234.00:</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Shipping:</span>
            <span>R123.00:</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Discount:</span>
            <span>R14.00:</span>
          </div>
        </div>
        <div className="flex items-center border-1 border-t border-b border-t-[#acacac] border-b-[#acacac] h-[50px] ">
          <div className="flex w-full justify-between text-red-600 text-[18px] font-bold ">
            <span>Order total:</span>
            <span>R15784.00</span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <button className="flex mt-[23px] mb-[2px] w-[200px] h-[30px] justify-center items-center bg-black rounded-[9px] ">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="text-[14px] text-white mt-[2px]"
            />
            <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
              Pay
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
