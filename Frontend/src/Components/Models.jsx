import React, { useEffect, useState } from "react";
import { Slide } from "../assets/assets";
import { Link } from "react-router-dom";
import "../index.css"; // make sure this CSS is imported

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

       <div className="relative flex items-center justify-center gap-4 uppercase mt-4"> 
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
    </section>
  );
};

export default Models;
