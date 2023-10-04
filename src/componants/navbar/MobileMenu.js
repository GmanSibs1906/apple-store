import React from 'react'
import { Link } from 'react-router-dom'

function MobileMenu({ onClose }) {
  return (
    <div className=" md:hidden fixed inset-0 flex items-center justify-center z-50 mt-[50px]">
      {/* <div className="fixed inset-0 bg-gray-700 opacity-70"></div> */}
      <div className="relative pl-[30px] font-bold z-10 inset-0 bg-[#454545] opacity-95 p-4 min-h-[94vh] w-full flex flex-col text-[35px] text-white">
        {/* Your content here */}
        <Link to="/" onClick={onClose}>
          <span className="  ">
            Home
          </span>
        </Link>
        <Link to="products/Mac" className=" mt-[15px] " onClick={onClose}>
          <span className="  ">
            Mac
          </span>
        </Link>
        <Link to="products/iPad" className=" mt-[15px] " onClick={onClose}>
          <span className=" mt-[30px] ">
            iPad
          </span>
        </Link>
        <Link to="products/iPhone" className=" mt-[15px] " onClick={onClose}>
          <span className="   ">
            iPhone
          </span>
        </Link>
        <Link to="products/Watch" className=" mt-[15px] " onClick={onClose}>
          <span className="  ">
            Watch
          </span>
        </Link>
        <Link to="products/electronics" className=" mt-[15px] " onClick={onClose}>
          <span className="   ">
            Other
          </span>
        </Link>
        <span className=" mt-[15px] " onClick={onClose}>
          Log in
        </span>
      </div>
    </div>
  )
}

export default MobileMenu