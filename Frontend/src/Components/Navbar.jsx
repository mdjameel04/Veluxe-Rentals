import React from 'react'
import { assets, NavItems } from '../assets/assets'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
     
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

   {/* Desktop Nav Items */}
      <div className="hidden md:flex items-center gap-6 ml-7">
        {NavItems.map((item) => {
           const isActive = location.pathname === item.path;
           return(
          <Link
            key={item.name}
            to={item.path}
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item.name}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              {item.name}
            </span>
             {/* underline */}
         <span className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-all duration-300 ${isActive ? "bg-" : "bg-transparent group-hover:bg-red-400"} `}>

         </span>
          </Link>
)})}
      </div>
 




      </div>
    </nav>
  )
}

export default Navbar
