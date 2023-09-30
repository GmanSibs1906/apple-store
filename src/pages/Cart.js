import React, { useState, useEffect } from 'react';
import LeftSideBar from "../componants/products/LeftSideBar";
import BagCheckout from "../componants/cart/BagCheckout";
import CartItem from '../componants/cart/CartItem';

function Cart() {

  return (
    <div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex relative ">
      {/* left icon bar with icons */}
      <LeftSideBar />

      {/* center with search and products */}
      <div className=" mx-[120px] mt-[50px] flex flex-col max-w-[80%]  ">
        <h1 className=" text-[35px] font-light ">Check your Bag Items</h1>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      {/* right side with cart products */}
      <BagCheckout />
    </div>
  );
}

export default Cart;
