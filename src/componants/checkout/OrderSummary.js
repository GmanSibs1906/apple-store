import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newOrder } from "../../redux/features/orders/orderSlice";

function OrderSummary({
  discount,
  courier,
  enablePayBtn,
  fullName,
  contactNumber,
  address,
  city,
  country,
  courierComp,
  orderId,
}) {
  const dispatch = useDispatch();

  const { total, cartItems, quantity } = useSelector((store) => store.cart);

  const orderStatus = "Pending...";

  const [orderTotal, setOrderTotal] = useState(0);

  let shipping = 0;
  if (courier === "Aramex") {
    shipping = 100;
  } else if (courier === "Pep") {
    shipping = 99;
  } else {
    shipping = 120;
  }

  let voucher = discount ? total / 10 : 0;

  useEffect(() => {
    setOrderTotal(total + shipping - voucher);
  }, [total, shipping, voucher]);

  // handle confirmation
  const handleOrderConfirmation = () => {
    // new order object with the required details
    const order = {
      orderId,
      fullName,
      contactNumber,
      address,
      city,
      country,
      courierComp,
      discount,
      cartItems,
      orderTotal,
      total,
      quantity,
      orderDate: new Date().toISOString(),
      orderStatus,
    };

    // dispatch the new order
    dispatch(newOrder(order));
  };

  return (
    <div className=" fixed right-[100px] flex w-[22vw] h-[80vh] mt-[70px] px-[20px] flex-col items-center">
      {/* Order summary */}
      <div className="flex bg-white w-[250px] rounded-[10px] flex-col px-[15px] py-[20px]">
        <div className="font-semibold text-[18px]"> Order Summary</div>
        <div className="flex flex-col text-[14px] font-light text-[#454545] my-[10px] h-[130px] justify-evenly ">
          <div className="flex w-full justify-between">
            <span>Items:</span>
            <span>{quantity}</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Cost:</span>
            <span>R{total.toFixed(2)}</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Shipping:</span>
            <span>R{shipping.toFixed(2)}</span>
          </div>
          <div className="flex w-full justify-between">
            <span>Discount:</span>
            <span>R{voucher.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center border-1 border-t border-b border-t-[#acacac] border-b-[#acacac] h-[50px] ">
          <div className="flex w-full justify-between text-red-600 text-[18px] font-bold ">
            <span>Order total:</span>
            <span>R{orderTotal.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex w-full justify-center">
          {enablePayBtn ? (
            <Link to="/orders">
              <button
                onClick={handleOrderConfirmation}
                className="flex mt-[23px] mb-[2px] w-[200px] h-[30px] justify-center items-center bg-black rounded-[9px] "
              >
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="text-[14px] text-white mt-[2px]"
                />
                <p className="text-[14px] flex justify-center items-center text-white ml-[10px]  ">
                  Pay
                </p>
              </button>
            </Link>
          ) : (
            <div>
              <button
                className="flex mt-[23px] mb-[2px] w-[200px] h-[30px] justify-center items-center bg-gray-400 rounded-[9px] "
                disabled
              >
                <FontAwesomeIcon
                  icon={faCreditCard}
                  className="text-[14px] text-white mt-[2px]"
                />
                <p className="text-[14px] flex justify-center items-center text-white ml-[10px]  ">
                  Pay
                </p>
              </button>
              <p className="text-red-600 text-sm mt-2">
                Please confirm details first
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="flex mt-[20px] ml-auto ">
        {/* Back button */}
        <Link to="/cart">
          <button className="w-[80px] border border-black rounded-[8px] py-[4px] flex justify-end px-[10px] items-center ">
            <FontAwesomeIcon
              icon={faChevronLeft}
              className="text-[13px] text-black mt-[1px] mr-[9px]"
            />
            <span className="text text-[14px]">Back</span>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderSummary;
