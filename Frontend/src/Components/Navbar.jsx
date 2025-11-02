import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <nav>
      <div className='w-full flex items-center justify-between bg-green-500    fixed px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 text-white'>
        {/* logo */}
        <div className=' flex items-center justify-center gap-1 mt-4'>
  <img src={assets.Logo} alt="" className='w-24 h-20 mt-2'/>
   <div>
<h1 className='font-medium '>Veluxe Rentals </h1>
   </div>
        </div>







      </div>
    </nav>
  )
}

export default Navbar
