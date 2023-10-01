import React from "react";
import OrderSummary from "../componants/checkout/OrderSummary";
import BagProductPreview from "../componants/products/BagProductPreview";
import { useSelector } from "react-redux";
import { aramex, courier, pep } from "../assets/images";

function CheckOut() {
  const { cartItems } = useSelector((store) => store.cart);

  return (
    <div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex relative ">
      {/* center with search and products */}
      <div className=" mx-[50px] mt-[50px] flex flex-col w-[65%] pt-[23px] pl-[10%]   ">
        {/*Shipping details */}
        <div className="flex flex-col bg-white w-[85%] p-[20px] rounded-[10px] ">
          <div className="text-[20px]">SHIPPING DETAILS</div>
          <form action="" className="mt-[10px] relative">
            <input
              type="text"
              placeholder="Full Name..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
            />
            <input
              type="text"
              placeholder="Contact number..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
            />
            <input
              type="text"
              placeholder="Street address..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
            />
            <input
              type="text"
              placeholder="City..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
            />
            <input
              type="text"
              placeholder="Country..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
            />
            <div className="flex flex-col">
              <h3 className="text-[12px] mt-[15px] mb-[10px] text-red-600 font-bold">
                PLEASE SELECT SHIPPING OPTION BY CLICKING ON LOGO
              </h3>
              <div className="flex py-[8px]">
                <div className="flex flex-col mr-[40px] ">
                  <img
                    src={aramex}
                    alt=""
                    className="h-[40px] rounded-[5px] object-contain"
                  />
                  <p className="text-orange-600 font-semibold text-center ">
                    R100
                  </p>
                </div>
                <div className="flex flex-col mr-[40px] ">
                  <img
                    src={courier}
                    alt=""
                    className="h-[40px] rounded-[5px] object-contain"
                  />
                  <p className="text-blue-600 font-semibold text-center ">
                    R120
                  </p>
                </div>
                <div className="flex flex-col mr-[40px] ">
                  <img
                    src={pep}
                    alt=""
                    className="h-[40px] rounded-[5px] object-contain"
                  />
                  <p className="text-blue-400 font-semibold text-center ">
                    R99
                  </p>
                </div>
              </div>
            </div>
             <input
              type="text"
              placeholder="Discount voucher..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300 mt-[10px]"
            />
            <p className=" mt-[-5px] ml-[2px] text-[12px] text-green-600">Enter "<span className="font-bold text-black">gmanDev</span>" for 10% discount</p>
            <button className=" text-[12px] absolute right-0 bottom-0 mb-[6px] rounded-[5px] w-[120px] h-[25px] border border-[#d7d7d7] cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#151515] to-[#c9c9c9] hover:from-red-200 hover:to-orange-600 transition-all duration-300">
              Confirm
            </button>
          </form>
        </div>
        {/* Cart review */}
        <div className=" flex flex-col bg-white w-[85%] p-[20px] rounded-[10px] mt-[20px]">
          <div className=" text-[20px] "> ITEMS IN YOUR BAG </div>
          <div className="flex flex-wrap justify-center">
            {cartItems.map((item) => {
              return <BagProductPreview key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>

      {/* right side with cart products */}
      <OrderSummary />
    </div>
  );
}

export default CheckOut;
