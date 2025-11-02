
import { assets } from '../assets/assets'
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
      autoPlay
      loop
      muted
      playsInline
      className='absolute w-full inset-0 object-cover'>
    <source src={assets.video1} type="video/mp4" />
      </video>
    </div>
  )
}

export default HeroSection
