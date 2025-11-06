import React, { useState } from 'react'
import { assets, cars } from '../assets/assets'

const Carbooking = () => {
 const [selectedBrand, setselectedBrand] = useState("");
const [selectedModel, setselectedModel] = useState("");

const filteredCars = cars.filter((car)=>{
  return(
    (selectedBrand ? car.brand === selectedBrand: true) &&
    (selectedModel ? car.model === selectedModel : true)
  )
})
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


 {/* Brand Dropdown */}
      <select
        className="px-4 py-2 w-60 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
       value={selectedBrand}
       onChange={(e)=> setselectedBrand(e.target.value)}>
        <option value="">All Brand</option>
        <option value="Audi">Audi</option>
        <option value="bmw">Bmw</option>
        <option value="Lamborghini">Lamborghini</option>
      </select>

      {/* Type Dropdown */}
      <select
        className="px-4 py-2 w-60 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
     value={selectedModel}
     onChange={(e)=> setselectedModel(e.target.value)} >
        <option value="model"> model</option>
        <option value="Suvs">Suvs</option>
        <option value="Sedans">Sedans</option>
        <option value="Sports">Sports</option>
        
      </select>
   </div>
    {/* filterd cars */}
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCars.length>0 ? (
              filteredCars.map((car)=>(
                <div key={car.id}   className="border p-4 rounded-xl shadow hover:shadow-lg transition-all" >
                <img
                  src={car.img}
                  alt={car.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h2 className="text-lg font-semibold">{car.name}</h2>
                <p className="text-gray-600">
                  {car.brand} — {car.model} — {car.fuel}
                </p>
                </div>
              ))
            ): (
              <p className="text-center text-gray-500 col-span-full">
              No cars found.
            </p>
            )}
   </div>

    </div>
   </div>


    </section>
  )
}

export default Carbooking

