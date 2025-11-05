import gsap from 'gsap'
import { assets } from '../assets/assets'
import { TextPlugin } from 'gsap/TextPlugin'
import { useEffect, useRef } from 'react'
import Models from '../Components/Models'


gsap.registerPlugin(TextPlugin)


const HeroSection = () => {

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

  return (
    <section>
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={assets.video1} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/25"></div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className=" font-oswald  text-4xl sm:text-5xl md:text-7xl font-bold uppercase tracking-wide"ref={textref} >
          Veluxe Rentals
        </h1>
        <p className="font-outfit mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-[90%]" ref={subText}>
        
        </p>
        <button className='relative mt-8 px-8 py-3 overflow-hidden rounded-xl border border-white/30 text-white backdrop-blur-md transition-all duration-500 ease-in-out group '>
        <span className='relative z-10'> Discover More</span>
        <span className='absolute inset-0 bg-linear-to-r from-pink-500/60 to-purple-600/60 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out'></span>
        </button>

      </div>  
     </div> 
    <Models/>
    </section>
  )
}

export default HeroSection

