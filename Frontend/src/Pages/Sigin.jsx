import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Sigin = () => {
  return (
    <section>
       <div className=" min-h-screen flex items-center justify-center  px-8  ">
<div className="bg-white/40 shadow-xl w-full max-w-md rounded-lg p-8">
<div className='flex items-center justify-center gap-4 '>
 <h2 className='text-3xl font-bold text-center mb-6 text-gray-800 mt-2'> Sign In</h2>
<img src={assets.Sigin} alt="" className='w-6 h-6'/>
</div>

 {/* form */}
<form className='space-y-5'>

    <div> 
<label className='block w-full text-gray-600 font-medium mb-2 ml-2 mt-2 sm:text-base '> password</label>
<input type="text" name='name' placeholder='Name'  className='w-full border rounded-md px-4 py-2 border-gray-300 focus:ring-2 focus:ring-[#FF6B6B] focus:outline-none transition-all duration-200 ease-linear' required minLength={8} maxLength={12}/>
</div>
{/* email */}
    <div>
        <label className='block text-gray-600 font-medium mb-2 ml-2 sm:text-base'>Email </label>
<input type="email" name='email' placeholder='Enter your email' className='w-full py-2 px-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#FF6B6B] focus:outline-none transition-all duration-200' required  />
    </div>
    {/* password */}
<div> 
<label className='block w-full text-gray-600 font-medium mb-2 ml-2 mt-2 sm:text-base '> password</label>
<input type="password" name='password' placeholder='Enter your password' className='w-full border rounded-md px-4 py-2 border-gray-300 focus:ring-2 focus:ring-[#FF6B6B] focus:outline-none transition-all duration-200 ease-linear' required minLength={8} maxLength={12}/>
</div>

{/* remeber */}

<div className='flex items-center justify-between text-sm text-gray-600'>
<label className='flex items-center gap-2' >
    <input type="checkbox" className='w-4 h-4' required />
    Remember Me
</label>
 <a href="#" className="text-[#FF6B6B] hover:underline"> Forgot password?  </a>
</div>

 <button  type="submit" className="w-full bg-[#FF6B6B] text-white py-2 rounded-md font-semibold hover:bg-[#ff4c4c] transition" >
     Sign In
    </button>
</form>      
      <div className='flex items-center my-6'>
          <hr className='grow border-gray-300' />
          <span className='px-2 text-gray-500 text-sm'>or</span>
          <hr className='grow border-gray-300' />
      </div>
      

<p className="text-sm text-center text-gray-600 mt-6">
  Already have an account?{" "}
  <Link to="/login" className="text-[#FF6B6B] font-semibold hover:underline">
    Log In
  </Link>
</p>

</div>
    </div>
    </section>
  )
}

export default Sigin
