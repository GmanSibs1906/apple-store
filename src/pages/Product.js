import React from 'react'
import Bag from '../componants/products/Bag'
import LeftSideBar from '../componants/products/LeftSideBar'

function Product() {
  return (
    <div className=' w-full h-full bg-[#f1f1f1] flex relative '>
    {/* left icon bar with icons */}
    <LeftSideBar />
    <div className="flex flex-col max-w-[70%] ">
    hello
    </div>
    {/* right side with cart products */}
    <Bag />
    </div>
  )
}

export default Product