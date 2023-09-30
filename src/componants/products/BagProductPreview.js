import React from 'react';
import watch from "../../assets/images/watch.png"

function BagProductPreview() {
  return (
    <div className=' w-[80px] h-[80px] flex justify-center items-center bg-white m-[8px] rounded-[12px] '>
    <img src={watch} alt="" className="flex" />
    </div>
  )
}

export default BagProductPreview