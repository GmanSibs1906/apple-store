import React from 'react';
import { logo } from "../assets/images";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <div className=' flex justify-center w-[100%] overflow-x-hidden h-[50px] bg-[#454545] text-[#c9c9c9] text-[12px] '>
        <div className=' w-[80vw] flex justify-evenly items-center ' >
            <img src={logo} alt="logo" className=' w-[25px] object-contain ' />
            <span className=''>Mac</span>
            <span className=''>iPad</span>
            <span className=''>iPhone</span>
            <span className=''>Watch</span>
            <span className=''>Support</span>
            <span className=''>Where to Buy</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} className='text-[14px]' />
        </div>
    </div>
  )
}

export default Navbar