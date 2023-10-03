import React from "react";

function OrderProduct({ title, productQuantity, price, image }) {
  return (
    <div className=" flex flex-col w-full ">
      <div className=" flex justify-between items-center ">
        <img
          src={image}
          alt="Product purchased"
          className=" h-[50px] object-contain "
        />
        <h3 className=" font-semibold ">{title.slice(0, 20)}</h3>
        <span className="">{productQuantity} each</span>
        <span className="">R{price.toFixed(2)}</span>
      </div>
      <div className=" border-[1px] border-slate-600 my-[20px]" />
    </div>
  );
}

export default OrderProduct;
