import React, { useEffect, useRef } from "react";
import { FaFlagCheckered, FaCarSide, FaLeaf } from "react-icons/fa";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


const Mission = () => {

const sectionRef = useRef(null)
const cardRef = useRef(null)
useEffect(()=>{
const tl =gsap.context(()=>{
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
    <section ref={sectionRef}  className="bg-[#FBF5F3] py-16">
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
    </section>
  );
};

export default Mission;

