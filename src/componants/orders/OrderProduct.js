import React from "react";

function OrderProduct({ title, productQuantity, price, image }) {
  return (
    <div className=" flex flex-col w-[40%] ">
      <div className=" flex justify-between items-center ">
        <img
          src={image}
          alt="Product purchased"
          className=" h-[50px] object-contain "
        />
        <h3 className=" font-semibold ">{title}</h3>
        <span className="">{productQuantity}</span>
        <span className="">R{price.toFixed(2)}</span>
      </div>
      <div className=" border-[1px] border-slate-600 my-[20px]" />
    </div>
  );
}

export default OrderProduct;
