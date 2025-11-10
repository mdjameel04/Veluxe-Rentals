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
     
 <div className='w-full flex md:flex-col items-center justify-center   px-4 md:w-1/2 gap-2 flex-col-reverse'>
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
    </section>
  )
}

export default About
