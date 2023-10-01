import React from 'react';
import OrderSummary from '../componants/checkout/OrderSummary';

function CheckOut() {
  return (
   <div className=" w-full min-h-[94vh] bg-[#f1f1f1] flex relative ">

      {/* center with search and products */}
      <div className=" mx-[50px] mt-[50px] flex flex-col w-[65%] pt-[23px] pl-[10%]   ">
        <div className="flex flex-col bg-white w-[85%] p-[20px] rounded-[10px] ">
        <div className="text-[20px]">SHIPPING DETAILS</div>
        <form action="" className='mt-[10px]'>
        <input type="text" placeholder='Full Name...' className=' w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300'/>
        <input type="text" placeholder='Contact number...' className=' w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300'/>
        <input type="text" placeholder='Street address...' className=' w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300'/>
        <input type="text" placeholder='City...' className=' w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300'/>
        <input type="text" placeholder='Country...' className=' w-[30vw] my-[6px] rounded-md h-[35px] pl-[10px] border border-slate-300'/>
        </form>
        </div>
      </div>

      {/* right side with cart products */}
      <OrderSummary />
    </div>
  )
}

export default CheckOut