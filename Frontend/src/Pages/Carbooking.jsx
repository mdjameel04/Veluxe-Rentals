import React from 'react'
import { assets } from '../assets/assets'

const Carbooking = () => {
  return (
      <section>
    <div className='w-full bg-black text-white py-4'>
      <div className='  flex flex-col md:flex-row items-center justify-between px-6'>

        {/* LEFT - Text Section */}
        <div className='flex flex-col items-start justify-center text-left w-full md:w-1/2 px-4'>
          <p className='font-bold text-sm mb-4 text-gray-300 uppercase tracking-wide'>
            Enjoy with us
          </p>

          <h3 className='text-3xl md:text-5xl font-bold text-white leading-snug mb-6'>
            Rent The Best Car <br /> Around the <br /> World
          </h3>

          <p className='text-gray-400 text-base leading-relaxed'>
            We make your journey smooth, stylish, and unforgettable. Choose from a wide range of
            luxury, sports, and premium cars to explore the world your way.
          </p>
        </div>

        {/* RIGHT - Image Section */}
        <div className='w-full md:w-1/2 flex items-center justify-center mt-10 md:mt-0 '>
          <img
            src={assets.rightSide_img}
            alt='Luxury Car'
            className='w-full   rounded-2xl shadow-lg '
          />
        </div>
      </div>
    </div>

  {/* bookings */}

   <div className='w-full bg-white py-10'>
    <div className='max-w-6xl mx-auto px-4'>
{/* title */}
    <h1 className='text-2xl font-bold text-gray-800 text-center mb-6 md:text-3xl '>Book your suitable car</h1>
  {/* Filters */}
   <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
{/* Dropdown */}

  <select className='px-4 py-2 w-60 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500'>
    <option value={""}> Select car</option>
     <option value="low-high">Low to High</option>
        <option value="high-low">High to Low</option>
 </select>

 {/* Brand Dropdown */}
      <select
        className="px-4 py-2 w-60 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Brand</option>
        <option value="audi">Audi</option>
        <option value="bmw">BMW</option>
        <option value="lamborghini">Lamborghini</option>
      </select>

      {/* Type Dropdown */}
      <select
        className="px-4 py-2 w-60 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Type</option>
        <option value="suv">SUV</option>
        <option value="sedan">Sedan</option>
        <option value="sports">Sports</option>
        <option value="sports">Electric</option>
      </select>

   </div>

    </div>
   </div>


    </section>
  )
}

export default Carbooking

