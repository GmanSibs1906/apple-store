import React, { useState, useRef  } from "react";
import OrderSummary from "../componants/checkout/OrderSummary";
import BagProductPreview from "../componants/products/BagProductPreview";
import { useSelector } from "react-redux";
import { aramex, courier, pep } from "../assets/images";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import CellOrderSummary from "../componants/checkout/CellOrderSummary";

function CheckOut() {

  // use-ref for the target section
  const targetSectionRef = useRef(null);

  //  handle button click and scroll to the target section
  const scrollToSection = () => {
    if (targetSectionRef.current) {
      targetSectionRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  const { cartItems, quantity } = useSelector((store) => store.cart);

  const [fullName, setFullName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [courierComp, setCourierComp] = useState("Courier Guy");
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

  if (quantity < 1) {
    return (
      <section className="w-full min-h-[92vh] bg-[#f1f1f1] flex relative">
        <div className=" w-full md:ml-[100px] flex md:w-[80%] flex-col justify-center items-center">
          <div className="flex text-[#454545] justify-center w-full text-[60px] font-extrabold ">
            Your Cart
          </div>
          <div className="flex text-[#454545] w-full justify-center text-[30px] font-light">
            is currently empty
          </div>
          <Link to="/products/iPhone">
            <button className="flex mt-[30px] w-[130px] h-[35px] justify-center items-center bg-[#454545] rounded-[9px] ">
              <svg
                width="16"
                height="18"
                viewBox="0 0 20 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5H1.75C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8V18.125C0.25 19.9531 1.79688 21.5 3.625 21.5H16.375C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836V8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5H6.25V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z"
                  fill="white"
                />
              </svg>
              <p className=" text-[14px] flex justify-center items-center text-white ml-[10px] ">
                Add Items
              </p>
            </button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <div className=" w-full min-h-[92vh] bg-[#f1f1f1] flex relative ">
      {/* center with search and products */}
      <div className=" md:mx-[50px] mt-[50px] pl-[5%] pr-[5%] md:pr-[0px] flex flex-col lg:w-[65%] md:pt-[23px] md:pl-[10%]   ">
        {/*Shipping details */}
        <div className="flex flex-col bg-white lg:w-[85%] p-[20px] rounded-[10px] ">
          <div className="text-[20px]">SHIPPING DETAILS</div>
          <div action="" className="mt-[10px] relative">
            <span className="text-red-600">*</span>
            <input
              type="text"
              placeholder="Full Name..."
              className=" w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
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
              className=" w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
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
              className=" w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
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
              className=" w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
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
              className=" w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300"
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
              className=" ml-[7px] w-[75vw] md:w-[60vw] lg:w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300 mt-[10px]"
              onChange={(e) => {
                setVoucher(e.target.value);
              }}
            />
            <p className=" ml-[9px] mt-[-5px] mb-[50px] lg:mb-[0px] text-[12px] text-green-600">
              Enter "<span className="font-bold text-black">rockstar</span>" for
              10% discount
            </p>
            <Link to="#pay" onClick={scrollToSection}>
            <button
              onClick={() => {
                handleClick();
              }}
              className=" text-[12px] absolute right-0 bottom-0 mt-[90px] lg:mt-[0px] md:mb-[6px] rounded-[5px] w-[120px] h-[25px] border border-[#d7d7d7] cursor-pointer bg-clip-text text-green-600 font-semibold "
            >
              Confirm
            </button>
            </Link>
           
          </div>
        </div>
        {/* Cart review */}
        <div className=" flex flex-col bg-white lg:w-[85%] p-[20px] rounded-[10px] mt-[20px]">
          <div className=" text-[20px] "> ITEMS IN YOUR BAG </div>
          <div className="flex flex-wrap justify-center">
            {cartItems.map((item) => {
              return <BagProductPreview key={item.id} {...item} />;
            })}
          </div>
        </div>

        {/* Cellphone Order summary */}
        <div className="w-full lg:hidden" ref={targetSectionRef}>
        <CellOrderSummary
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
