import React, { useState } from "react";
import OrderSummary from "../componants/checkout/OrderSummary";
import BagProductPreview from "../componants/products/BagProductPreview";
import { useSelector } from "react-redux";
import { aramex, courier, pep } from "../assets/images";
import { useEffect } from "react";

function CheckOut() {
  const { cartItems } = useSelector((store) => store.cart);

  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [courierComp, setCourierComp] = useState("");
  const [voucher, setVoucher] = useState("");
  const [discount, setDiscount] = useState(false);
  const [enablePayBtn, setEnablePayBtn] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (voucher === "rockstar") {
      setDiscount(true);
    } else {
      setDiscount(false);
    }
  }, [voucher]);

  const handleClick = () => {
    if (
      fullName !== "" &&
      contactNumber !== "" &&
      address !== "" &&
      city !== "" &&
      country !== ""
    ) {
      // generate orderId using clients contactNumber + date + random number (incase of multiple orders in same day)
      // Get the current date and time
      // date converted to string
      const myDate = new Date()
        .toLocaleString()
        //removed spaces
        .replace(/\s+/g, "")
        //split by ","
        .split(",")[0];
      // random number
      const randomNumber = Math.floor(Math.random() * 101);

      setOrderId((contactNumber + myDate + randomNumber).replace(/\//g, ""));
// enable disabled pay button
      setEnablePayBtn(true);
    } else {
      window.prompt("Please fill in all required fields");
    }
  };

  return (
    <div className=" w-full min-h-[92vh] bg-[#f1f1f1] flex relative ">
      {/* center with search and products */}
      <div className=" mx-[50px] mt-[50px] flex flex-col w-[65%] pt-[23px] pl-[10%]   ">
        {/*Shipping details */}
        <div className="flex flex-col bg-white w-[85%] p-[20px] rounded-[10px] ">
          <div className="text-[20px]">SHIPPING DETAILS</div>
          <div action="" className="mt-[10px] relative">
            <span className="text-red-600">*</span>
            <input
              type="text"
              placeholder="Full Name..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-red-600 ">*</span>
            <input
              type="text"
              required
              placeholder="Contact number..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
              onChange={(e) => {
                setContactNumber(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-red-600 ">*</span>
            <input
              type="text"
              required
              placeholder="Street address..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-red-600 ">*</span>
            <input
              type="text"
              required
              placeholder="City..."
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
              onChange={(e) => {
                setCity(e.target.value);
              }}
            />{" "}
            <br />
            <span className="text-red-600 ">*</span>
            <input
              type="text"
              placeholder="Country..."
              required
              className=" w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
            />
            <div className="flex flex-col ml-[7px]">
              <h3 className="text-[12px] mt-[15px] mb-[10px] text-red-600 font-bold">
                PLEASE SELECT SHIPPING OPTION BY CLICKING ON LOGO
              </h3>
              <div className="flex py-[8px]">
                <div
                  className="flex flex-col mr-[40px] "
                  onClick={() => {
                    setCourierComp("Aramex");
                  }}
                >
                  <img
                    src={aramex}
                    alt=""
                    className="h-[40px] rounded-[5px] object-contain"
                  />
                  <p className="text-orange-600 font-semibold text-center ">
                    R100
                  </p>
                </div>
                <div
                  className="flex flex-col mr-[40px] "
                  onClick={() => {
                    setCourierComp("Courier Guy");
                  }}
                >
                  <img
                    src={courier}
                    alt=""
                    className="h-[40px] rounded-[5px] object-contain"
                  />
                  <p className="text-blue-600 font-semibold text-center ">
                    R120
                  </p>
                </div>
                <div
                  className="flex flex-col mr-[40px] "
                  onClick={() => {
                    setCourierComp("Pep");
                  }}
                >
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
              className=" ml-[7px] w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300 mt-[10px]"
              onChange={(e) => {
                setVoucher(e.target.value);
              }}
            />
            <p className=" ml-[9px] mt-[-5px] text-[12px] text-green-600">
              Enter "<span className="font-bold text-black">rockstar</span>" for
              10% discount
            </p>
            <button
              onClick={() => {
                handleClick();
              }}
              className=" text-[12px] absolute right-0 bottom-0 mb-[6px] rounded-[5px] w-[120px] h-[25px] border border-[#d7d7d7] cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#151515] to-[#c9c9c9] hover:from-red-200 hover:to-orange-600 transition-all duration-300"
            >
              Confirm
            </button>
          </div>
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
      <OrderSummary
        courier={courierComp}
        discount={discount}
        enablePayBtn={enablePayBtn}
        contactNumber={contactNumber}
        address={address}
        city={city}
        country={country}
        courierComp={courierComp}
        fullName={fullName}
        orderId={orderId}
      />
    </div>
  );
}

export default CheckOut;
