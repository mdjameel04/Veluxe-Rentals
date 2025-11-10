import React, { useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { FaHome} from 'react-icons/fa'
import gsap from "gsap"
import { ScrollTrigger} from 'gsap/ScrollTrigger'
import {TextPlugin} from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(ScrollTrigger)
const About = () => {

const textref = useRef(null)
const subText = useRef(null)
 const titleRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);
  const p3Ref = useRef(null);

useEffect(()=>{

const t1 = gsap.timeline({delay:1});
t1.fromTo(textref.current,{ opacity:0, y:40},
  {opacity:1, y:0, duration:1.5, ease:"power2.out"}
)
   .to(subText.current,{
     duration: 3,
        text: "From Now On — The Future of Performance",
        ease: "power2.inOut", 
   })
},[])
const secondRef= useRef(null);

useEffect(()=>{
    const t1 = secondRef.current;
     gsap.fromTo(t1, 
{opacity:0, y:100},
{ opacity: 1 ,
    y:0,
     duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: t1,
          start: "top 80%",   // starts when top of section hits 80% of viewport
          toggleActions: "play none none reverse", // replays when scrolled back up
        },
     })  

},[])

// overview 
useEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(titleRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
    .from(
      [p1Ref.current, p2Ref.current, p3Ref.current],
      {
        y: 25,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      },
      "-=0.3"
    );
  });

  return () => ctx.revert();
}, []);

  return (
    <section>   
        <div className='w-full bg-[#F2E3BC]  text-white py-4  border-4 border-black px-5'>
             <div className='mt-4 flex justify-center items-center gap-2 mb-4  ' >
        
          <FaHome size={20} color='gray'/>
        
        <h3 className='text-sm text-gray-500 font-bold text-center   italic '> Home |</h3>
     <h3 className='text-sm text-black font-bold text-center   italic underline-offset-4 decoration-2 underline '> About us</h3>
      </div>
      {/* heroSection */}
      <div className='flex flex-col md:flex-row items-center justify-between mt-6 '>
         {/* left */}
         <div className='w-full flex flex-col items-center justify-center text-left  px-4 md:w-1/2 gap-2' ref={textref} >
        <p className="font-bold text-sm mb-4 text-black uppercase tracking-wide">
              Enjoy with us
            </p>
          <h3 className="text-3xl md:text-5xl font-bold text-black leading-snug mb-6" ref={subText}>
              Drive Your Journey <br /> Anytime, AnyWhere <br /> Feel The Luxury
            </h3>
          <p className='text-base leading-relaxed" text-center text-gray-900' >Book the luxuriest cars with us! Travel wherever you want. We are hare for 24/7 join with us and fell the luxury style</p>
          <button className='bg-yellow-400 rounded-2xl px-3 py-2 text-black mt-4 mr-3 hover:bg-amber-200 font-bold '> Shop Now</button>
         </div>

     {/* right */}
     
 <div className='w-full flex md:flex-col items-center justify-center   px-4 md:w-1/2 gap-2 flex-col-reverse    '>
          <img src={assets.luxury_img} alt="" className='w-full shadow-lg mt-2' />
         </div>
 </div>
{/* second box */}
 <div className='flex flex-col md:flex-row items-center justify-between' ref={textref}>

     {/* left */}
     
 <div className='w-full flex flex-col items-center justify-center   px-4 md:w-1/2 gap-2 mt-4' >
          <img src={assets.luxury_img2} alt="" className='w-full shadow-lg' />
         </div>
              {/* left */}
         <div className='w-full flex flex-col items-center justify-center text-left  px-4 md:w-1/2 gap-2'>
 <p className="h-1 bg-amber-500 w-full mt-2 ">
              
            </p>
          <h3 className="text-3xl md:text-5xl font-bold text-black leading-snug mb-6">
              Drive Your Journey <br /> Anytime, AnyWhere <br /> Feel The Luxury
            </h3>
          <p className='text-base leading-relaxed" text-center text-gray-900' >Book the luxuriest cars with us! Travel wherever you want. We are hare for 24/7 join with us and fell the luxury style</p>
         </div>
 </div>
    </div>
    <div  >
     </div>

{/* overview */}
     <div className="bg-[#C19875] text-black py-16" ref={secondRef}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* LEFT IMAGE */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.Agent_img}
            alt="Luxury Car"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-black" ref={titleRef}>
            Company Overview
          </h2>

          <p className="text-black font-medium leading-relaxed" ref={p1Ref}>
            Founded in 2023, <span className="font-semibold text-black">LuxDrive Rentals</span> is redefining 
            the way people experience car travel. We combine luxury, comfort, 
            and convenience — offering everything from compact sedans to 
            high-end sports cars.
          </p>

          <p className="text-black font-medium  leading-relaxed" ref={p2Ref}>
            Our mission is to make premium car rentals effortless and 
            accessible for everyone. From business trips to weekend escapes, 
            every ride you take with us guarantees quality, style, and safety.
          </p>

          <p className="text-black  font-medium leading-relaxed" ref={p3Ref}>
            With a seamless online booking system, transparent pricing, and 
            24/7 customer support, LuxDrive Rentals ensures a smooth and 
            memorable journey every time. Wherever the road takes you — we’re 
            here to drive your experience.
          </p>

          <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>

     
    </section>
  )
}

export default About
