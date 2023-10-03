import React, { useState } from "react";
import { iphone1 } from "../assets/images";
import { useSelector } from "react-redux";
import OrderProduct from "../componants/orders/OrderProduct";

function Orders() {
  const { orders } = useSelector((store) => store.order);

  console.log(orders);

  const [courier, setCourier] = useState("");
  const [discount, setDiscount] = useState();
  const [totalPrice, setTotalPrice] = useState();

  // calculate cost of shipping
  const calcShipping = (company) => {
    let shipping = 0;
    if (company === "Aramex") {
      shipping = 100;
    } else if (company === "Pep") {
      shipping = 99;
    } else {
      shipping = 120;
    }
    return shipping;
  };

  // check and calculate discount
  const calcDisount = (checkVoucher, fullAmount) => {
    if (checkVoucher) {
      voucher = fullAmount / 10;
    }
    return voucher;
  };

  let voucher = discount ? totalPrice / 10 : 0;

  return (
    <div className=" flex flex-col w-full min-h-[92vh] bg-[#f1f1f1] p-[100px] ">
      <div className="flex">
        {orders.map((order) => (
          <div
            className=" w-full min-h-[300px] bg-white p-[20px] rounded-[10px] flex justify-between "
            key={order.orderId}
          >
            <div className=" flex flex-col w-[40%] ">
              <h3 className=" text-[20px] font-bold ">
                Order Id:{" "}
                <span className="text-[#454545]">{order.orderId}</span>
              </h3>
              <div className=" flex flex-col ">
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className="font-light">Name:</span>
                  <span className="text-[#454545] font-bold">
                    {order.fullName}
                  </span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] font-light">
                    Contact Number:
                  </span>
                  <span className="text-[#454545] font-bold">
                    {order.contactNumber}
                  </span>
                </div>
                <div className=" flex justify-between items-start mt-[10px] ">
                  <span className=" min-ml-[30px] font-light">Address:</span>
                  <div className=" flex flex-col items-end ">
                    <span className="text-[#454545] font-bold">
                      {order.address}
                    </span>
                    <span className="text-[#454545] font-bold">
                      {order.city}
                    </span>
                    <span className="text-[#454545] font-bold">
                      {order.country}
                    </span>
                  </div>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] font-light">Order Date:</span>
                  <span className="text-[#454545] font-bold">
                    {order.orderDate.split("T")[0]}
                  </span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] font-light">Courier:</span>
                  <span className="text-[#454545] font-bold">
                    {order.courierComp}
                  </span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] font-light">
                    Order Status:
                  </span>
                  <span className="text-red-600 font-bold">
                    {order.orderStatus}
                  </span>
                </div>
              </div>
            </div>

            <div className=" flex flex-col w-[40%] ">
              {order.cartItems.map((item) => (
                <OrderProduct
                  title={item.title}
                  productQuantity={item.quantity}
                  price={item.price}
                  image={item.image}
                  key={item.id}
                />
              ))}

              <div className=" flex flex-col ">
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] ">Sub Total</span>
                  <span className="">R{order.total}</span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] ">Shipping</span>
                  <span className="">
                    R{calcShipping(order.courierComp).toFixed(2)}
                  </span>
                </div>
                <div className=" flex justify-between items-center mt-[10px] ">
                  <span className=" min-ml-[30px] ">Discount</span>
                  <span className="">
                    R{calcDisount(order.discount, order.total).toFixed(2)}
                  </span>
                </div>
                <div className=" border-[1px] border-slate-400 my-[10px]" />
                <div className=" flex justify-between items-center font-bold text-red-600  ">
                  <span className=" min-ml-[30px] ">TOTAL</span>
                  <span className="">R{order.orderTotal.toFixed(2)}</span>
                </div>
                <div className=" border-[1px] border-slate-400 my-[10px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Orders;
