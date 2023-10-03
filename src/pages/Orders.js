import React from "react";
import { iphone1 } from "../assets/images";

function Orders() {
  return (
    <div className=" flex flex-col w-full min-h-[92vh] bg-[#f1f1f1] p-[100px] ">
      <div className="flex">
        <div className=" w-full min-h-[300px] bg-white p-[20px] rounded-[10px] flex justify-between ">
          <div className=" flex flex-col w-[40%] ">
            <h3 className=" text-[25px] font-bold ">
              Order Id: 098765432156789
            </h3>
            <div className=" flex flex-col ">
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className="">Name:</span>
                    <span className="">John Doe</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Contact Number:</span>
                    <span className="">John Doe</span>
                </div>
                <div className=" flex justify-between items-start mt-[10px] ">
                    <span className=" min-ml-[30px] ">Address:</span>
                    <div className=" flex flex-col items-end ">
                    <span className="">John Doe ndsndsnlkn ds;dsm;mvl; dsnkdns;k</span>
                    <span className="">John Doe</span>
                    <span className="">John Doe</span>
                    </div>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Order Date:</span>
                    <span className="">John Doe</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Courier:</span>
                    <span className="">John Doe</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Order Status:</span>
                    <span className="">John Doe</span>
                </div>
            </div>
          </div>

          <div className=" flex flex-col w-[40%] ">
            <div className=" flex justify-between items-center ">
            <img src={iphone1} alt="Product purchased" className=" h-[50px] object-contain " />
            <h3 className=" font-semibold ">Product Name</h3>
            <span className="">4</span>
            <span className="">R2834.00</span>
            </div>
            <div className=" border-[1px] border-slate-600 my-[20px]" />

            <div className=" flex flex-col " >
        <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Sub Total</span>
                    <span className="">R29464.00</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Shipping</span>
                    <span className="">R345.00</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                    <span className=" min-ml-[30px] ">Discount</span>
                    <span className="">R193.00</span>
                </div>
                <div className=" border-[1px] border-slate-400 my-[10px]" />
                <div className=" flex justify-between items-center  ">
                    <span className=" min-ml-[30px] ">TOTAL</span>
                    <span className="">R4325.00</span>
                </div>
                <div className=" border-[1px] border-slate-400 my-[10px]" />
        </div>
        </div>

        

        </div>
      </div>
    </div>
  );
}

export default Orders;
