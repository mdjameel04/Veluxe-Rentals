import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
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

  <div className='flex flex-col justify-center items-center text-white gap-3'>
  <h2 className='text-2xl font-bold mb-4'>Get Exclusive Discount on Luxury Cars </h2>
  <p>Subscribe to our Veluxe Rentals to receive Special offers,  </p>
  </div>
      </div>
      <div className='w-full h-0.5 bg-amber-50 mt-2'></div>
    </section>
  )
}

export default Footer
