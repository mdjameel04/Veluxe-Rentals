import React, { useEffect, useState } from "react";
import { assets, Slide } from "../assets/assets";
import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa";


const Models = () => {
  const [count, setCount] = useState(0);

  const nextSlide = () => {
    setCount((prev) => (prev + 1) % Slide.length);
  };

  const prevSlide = () => {
    setCount((prev) => (prev - 1 + Slide.length) % Slide.length);
  };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCount((prev) => (prev + 1) % Slide.length);
  //   }, 4000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section>
      <div className="mt-6 flex items-center ">
        <h1 className="text-2xl md:text-6xl mt-8  ml-[5%] font-bold">Models</h1>
      </div>

      {/* Slides */}
      <div className="w-full overflow-hidden relative mt-10">
        <div
          className="flex slider-track transition-transform duration-700 ease-in-out"
          style={{ "--slide-position": `-${count * 100}%` }}
        >
          {Slide.map((item) => (
            <div
              key={item.id}
              className="flex shrink-0 w-full flex-col items-center justify-center"
            >
              <h3 className="text-2xl md:text-5xl font-extrabold text-gray-500 mb-6">
                {item.text}
              </h3>
              <img
                src={item.img}
                alt={item.text}
                className="object-contain w-full"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 border-2 border-black p-3 rounded-md bg-white/70 hover:bg-white transition"
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 border-2 border-black p-3 rounded-md bg-white/70 hover:bg-white transition"
        >
          →
        </button>

       <div className="relative flex items-center justify-center gap-4 uppercase mt-4 mb-4"> 
       <button className="bg-[#ffc000] py-3 px-6 rounded-lg transition-all duration-500  text-black  hover:bg-black/30">
        start configuration → 
       </button>
       <Link to={'/booking'}>
       <button className=" border-2 border-black py-3 px-6 rounded-lg transition-all duration-500  text-white bg-black/20 ">
        Explore car → 
       </button>
       </Link>
       </div>
      </div>
      {/* featuer */}
<div className="bg-amber-200 px-16 py-8">
  <h2 className="text-2xl font-bold text-black text-center">
    Drive Your Way, <br /> Anytime, Anywhere
  </h2>

  <div className="flex items-center justify-center gap-4 mt-4 flex-wrap">
    <button className="text-sm text-black font-bold bg-amber-100 px-4 py-2 rounded-2xl hover:bg-black hover:text-white">
      Scan Payments
    </button>
    <button className="text-sm text-black font-bold bg-amber-100 px-2 py-2 rounded-2xl hover:bg-black hover:text-white">
      Advance Tracking
    </button>
    <button className="text-sm text-black font-bold bg-amber-100 px-4 py-2 rounded-2xl hover:bg-black hover:text-white">
      Personal Experience
    </button>
    <button className="text-sm text-black font-bold bg-amber-100 px-4 py-2 rounded-2xl hover:bg-black hover:text-white">
      Real-time Assistance
    </button>
  </div>

  {/* Section with image on left and text on right */}
  <div className="w-full  flex flex-col md:flex-row items-center justify-center mt-8 gap-8">
    {/* left side - image */}
    <div className="w-full md:w-1/2">
      <img
        src={assets.mobile_map}
        alt="map preview"
        className="rounded-2xl shadow-lg w-full object-cover"
      />
    </div>

    {/* right side - text */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <p className="text-black leading-relaxed font-bold ">
       Multiple payments Options Credit card, digital wallets , or bank transfer. Transparent pricing view detailed costs with no hidden fees. Loyalty points integration Redeem discounts and rewards during checkout.
      </p>
      <div className="flex items-center justify-center gap-2 mt-4">
      <div>
    
      <button className=" bg-orange-600 px-4 py-2 rounded-2xl font-medium text-white">  playstore</button>
      </div>
 <div>
      <button className="bg-orange-600 px-4 py-2 rounded-2xl font-medium text-white  " > Applestore</button>
      </div>

      </div>
    </div>
  </div>
</div>
{/* info */}
     
<div className="w-full bg-white px-8 md:px-16 py-12">
  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    
    {/* LEFT SIDE - TEXT CONTENT */}
    <div className="w-full md:w-1/2">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-3">
        Keys to freedom, <br /> wheels to adventure.
      </h2>

      <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
        Discover the freedom to travel on your terms with our reliable and affordable car rental services.
        Whether you are exploring the city, we offer a wide range of vehicles to suit your needs.
      </p>

      <ul className="space-y-2">
        <li className="text-sm md:text-base text-gray-600 hover:text-black cursor-pointer">
          ➤ Flexible Booking Options
        </li>
        <li className="text-sm md:text-base text-gray-900 font-semibold hover:text-black cursor-pointer">
          ➤ Luxury and Comfort
        </li>
        <li className="text-sm md:text-base text-gray-600 hover:text-black cursor-pointer">
          ➤ 24/7 Roadside Assistance
        </li>
        <li className="text-sm md:text-base text-gray-600 hover:text-black cursor-pointer">
          ➤ Affordable Pricing
        </li>
        <li className="text-sm md:text-base text-gray-600 hover:text-black cursor-pointer">
          ➤ Loyalty Rewards Program
        </li>
        <li className="text-sm md:text-base text-gray-600 hover:text-black cursor-pointer">
          ➤ One-Way Rentals
        </li>
      </ul>
    </div>

    {/* RIGHT SIDE - IMAGE */}
    <div className="w-full md:w-1/2 flex justify-center">
      <img
        src={assets.Audi_tt}  // Replace with your image asset
        alt="Luxury Car"
        className="w-full  object-contain"
      />
    </div>
  </div>
</div>


    </section>
  );
};

export default Models;
