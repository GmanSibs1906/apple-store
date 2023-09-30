import React, { useEffect } from 'react';
import LeftSideBar from "../componants/products/LeftSideBar";
import BagCheckout from "../componants/cart/BagCheckout";
import CartItem from '../componants/cart/CartItem';
import { useSelector, useDispatch } from "react-redux";
import { clearCart, calculateTotals } from "../redux/features/cart/cartSlice";
import { Link } from 'react-router-dom';

function Cart() {

  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(calculateTotals())
  },[cartItems])

  // empty cart
  if (quantity > 1) {
    return (
      <section className="flex w-full min-h-[94vh] bg-[#f1f1f1] relative  flex-col  justify-center items-center">
        <div className="flex text-[#80461B] justify-center w-full text-[60px] font-extrabold ">
          Your Cart
        </div>
        <div className="flex text-[#80461B] w-full justify-center text-[30px] font-light">
          is currently empty
        </div>
        <Link to="/">
          <button className="flex w-[150px] h-[40px] justify-center items-center bg-[#80461B] text-white my-[50px] rounded-md">
            Add Items
          </button>
        </Link>
      </section>
    );
  }

  return (
    <div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex relative ">
      {/* left icon bar with icons */}
      <LeftSideBar />

      {/* center with search and products */}
      <div className=" mx-[120px] mt-[50px] flex flex-col max-w-[80%]  ">
        <h1 className=" text-[35px] font-light ">Check your Bag Items</h1>
        {cartItems.map((item) => {
        return <CartItem key={item.id} {...item} />;
      })}
      </div>

      {/* right side with cart products */}
      <BagCheckout />
    </div>
  );
}

export default Cart;
