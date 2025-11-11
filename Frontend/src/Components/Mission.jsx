import React, { useEffect, useRef } from "react";
import { FaFlagCheckered, FaCarSide, FaLeaf } from "react-icons/fa";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"
import { assets } from "../assets/assets";

gsap.registerPlugin(ScrollTrigger)


const Mission = () => {

const sectionRef = useRef(null)
const cardRef = useRef(null)
useEffect(()=>{
const ctx =gsap.context(()=>{
    gsap.from(".mission-title", {
        opacity:0,
        y: 50,
        duration:1,
        scrollTrigger:{
            trigger:sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
        }
    });
    gsap.from(cardRef.current,{
        opacity: 0,
        y:80,
         scale: 0.9,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
           toggleActions: "play none none reverse",
        },
    })
})
  return () => ctx.revert();
},[])

  return (
    <section ref={sectionRef}  className="mission-title  bg-[#FBF5F3] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center" >
        {/* Title */}
        <h2  className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We’re on a mission to redefine car rentals by delivering comfort,
          luxury, and sustainability in every journey. Whether it’s your
          business trip, weekend drive, or dream ride — we make it smooth,
          stylish, and unforgettable.
        </p>

        {/* Mission Highlights */}
        <div ref={cardRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all">
            <FaFlagCheckered className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Premium Experience
            </h3>
            <p className="text-gray-500 text-sm">
              We ensure every customer enjoys a first-class driving experience
              with luxury and comfort in every car.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all">
            <FaCarSide className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Seamless Service
            </h3>
            <p className="text-gray-500 text-sm">
              From booking to delivery, our process is effortless — built for
              speed, reliability, and satisfaction.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition-all">
            <FaLeaf className="text-indigo-600 text-4xl mx-auto mb-4" />
            <h3 className="font-semibold text-xl text-gray-800 mb-2">
              Sustainable Future
            </h3>
            <p className="text-gray-500 text-sm">
              We’re moving towards a greener tomorrow by promoting
              fuel-efficient and eco-friendly vehicle options.
            </p>
          </div>
        </div>
      </div>

    <div className="bg-[#D3D5D7] px-8 py-16">
  <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 md:w-4/5 mx-auto">
    
    {/* Left Section - Why Choose Us */}
    <div className="flex flex-col w-full md:w-1/2 gap-6">
      <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left mb-4">
        Why Choose Us
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-3">
          <img src={assets.carIcon} alt="Icon 1" className="w-10 h-10"/>
          <p className="text-black font-medium leading-relaxed">
            **Premium Fleet:** Drive from a wide range of luxury and well-maintained cars.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.booking} alt="Icon 2" className="w-10 h-10"/>
          <p className="text-black font-medium leading-relaxed">
            **Seamless Booking:** Fast, easy, and hassle-free booking experience.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.comfort} alt="Icon 3" className="w-10 h-10"/>
          <p className="text-black font-medium leading-relaxed">
            **Affordable Luxury:** Competitive pricing without compromising comfort.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.eco_friendly} alt="Icon 4" className="w-10 h-10"/>
          <p className="text-black font-medium leading-relaxed">
            **Sustainability:** Eco-friendly options for a greener journey.
          </p>
        </div>

        <div className="flex items-start gap-3">
          <img src={assets.Support24} alt="Icon 5" className="w-10 h-10"/>
          <p className="text-black font-medium leading-relaxed">
            **24/7 Support:** Our team is always ready to assist you anytime.
          </p>
        </div>
      </div>
    </div>

    {/* Right Section - Image */}
    <div className="w-full  md:w-1/2 flex items-center justify-center">
      <img src={assets.luxury_img2} alt="Luxury Car" className="w-full shadow-lg rounded-lg" />
    </div>

  </div>
</div>





    </section>
  );
};

export default Mission;


