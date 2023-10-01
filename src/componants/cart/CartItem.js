import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTrash,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/features/cart/cartSlice";

function CartItem({ id, title, image, model, price, rating, quantity }) {

  const dispatch = useDispatch();

  return (
    <div className=" w-[65vw] h-[200px] bg-white mt-[20px] rounded-[10px] p-[20px] flex ">
      <img src={image} alt="" className="w-[15vw] object-contain " />
      <div className=" w-[38vw] pl-[15px] flex flex-col ">
        <h2 className="text-[20px] font-light ">{title}</h2>
        <p className="text-[#848484] text-[14px] mt-[5px]">{model}</p>
        <div className="flex my-[20px] items-center ">
          {rating && (
            <>
              {[...Array(Math.round(rating.rate))].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className="text-[17px] mr-[5px]"
                />
              ))}
            </>
          )}
          <span className=" font-light ml-[20px] ">
            {rating ? rating.rate : null}
          </span>
          <span className=" font-light flex ml-[20px]">
            Ratings: {rating ? rating.count : null}
          </span>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex font-light text-[14px]">
            <span className="">R{price}</span>
            <span className="mx-[5px]">x</span>
            <span className="">{quantity}</span>
            <span className="ml-[150%] font-normal">Total</span>
            <span className="ml-[15px] font-semibold">R{(quantity * price).toFixed(2)}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[7vw] items-end ">
        <FontAwesomeIcon
          icon={faTrash}
          className="text-[17px] text-red-400 mr-[5px]"
           onClick={() => {
            dispatch(removeItem(id));
          }}
        />
        <div className="flex flex-col mt-auto items-end">
          <FontAwesomeIcon
            icon={faChevronUp}
            className="text-[17px] text-green-400 mr-[5px]"
               onClick={() => {
              dispatch(increaseQuantity(id));
            }}
          />
          <span className="text-[20px] my-[10px] mr-[9px]">{quantity}</span>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="text-[17px] text-red-400 mr-[5px]"
            onClick={() => {
              if ( quantity === 1 ) {
                dispatch(removeItem(id));
                return
              }
              dispatch(decreaseQuantity(id));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
