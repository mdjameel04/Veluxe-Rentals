import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <section className='w-full bg-gray-800 py-16 px-8'>
      <div className='flex items-center justify-center mx-auto gap-6'>
{/* left */}
  <div className='flex flex-col text-white items-center justify-center '>
    <h2 className='text-2xl font-bold mb-3 '> Connect with Veluxe Rentals</h2>
    <p className='text-sm text-gray-600'>Follow us to receive all latest updates </p>
      <div className='flex items-center justify-center mt-8 gap-4'>
       <FaFacebook className='w-6 h-6' />
       <FaInstagramSquare className='w-6 h-6' />
       <FaTwitter className='w-6 h-6'/>
       <BsLinkedin className='w-6 h-6'/>
      </div>
  </div>
  <div className='w-0.5 h-44 bg-amber-50'></div>
{/* right side */}
  <div className='flex flex-col justify-center items-center text-white gap-2'>
  <h2 className='text-2xl font-bold mb-4'>Get Exclusive Discount on Luxury Cars </h2>
  <p>Subscribe to our Veluxe Rentals to receive Special offers,  </p>
<div className='flex items-center justify-center gap-4'>
<input type="text" name='email' placeholder='Enter your Email' className='w-full border-2 border-gray-300 rounded-xl py-2 px-6 focus:ring-2 focus:ring-[#FF6B6B] focus:outline-none transition-all duration-200 ease-linear'/>
<div>
    <button className=' font-outfit px-4 py-2 bg-red-600 rounded-2xl shadow-2xl hover:bg-gray-600 text-amber-400' type='submit'>Subscribe </button>
</div>
</div>
  </div>
      </div> 
      <div className='w-full h-0.5 bg-amber-50 mt-2'></div>

     {/* bottom Headline */}
      <div className='flex items-start justify-evenly gap-4 flex-wrap mt-4'>
       <div className='flex flex-col  gap-2 '>
        
     <h3 className='text-white text-md font-semibold'> Veluxe Rentals</h3>
     <Link to={'/'}>
       <p className='text-white/50 text-sm hover:text-white hover:font-bold'> Home</p>
     </Link>
     <Link to={"/booking"}>
       <p className='text-white/50 text-sm hover:text-white hover:font-bold'> Bookings</p>
     </Link>
     <Link to={"/about"}>
       <p className='text-white/50 text-sm hover:text-white hover:font-bold'> About Us</p>
     </Link>
     <Link to={"/Contact"}>
       <p className='text-white/50 text-sm hover:text-white hover:font-bold'> Contact Us</p>
     </Link>
 </div>
           <div className="flex flex-col gap-2">
          <h3 className="text-white text-md  font-semibold mb-2">Services</h3>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">Bookings</p>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">Luxury Cars</p>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">Special Offers</p>
        </div>

           <div className="flex flex-col gap-2">
          <h3 className="text-white text-md font-semibold mb-2">Support</h3>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">FAQ</p>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">Privacy Policy</p>
          <p className="text-white/60 text-sm hover:text-white cursor-pointer">Terms & Conditions</p>
        </div>
                <div className="flex flex-col gap-2">
     <Link to={"/Contact"}>
          <h3 className="text-white text-md font-semibold mb-2">Contact</h3>
     </Link>
          <p className="text-white/60 text-sm  hover:text-white">📍 hyderabad, India</p>
          <p className="text-white/60 text-sm  hover:text-white">📞 +91 7013684532</p>
          <p className="text-white/60 text-sm  hover:text-white">✉️ support@veluxerentals.com</p>
        </div>
      
      </div>
    </section>
  )
}

export default Footer
