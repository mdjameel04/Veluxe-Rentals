import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-12 bg-gray-50 text-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Left section */}
        <div>
          {/* Image + Socials */}
          <div className="relative mb-8">
            <div className="relative w-full h-full rounded-2xl overflow-hidden custom-cut">
              <img
                src={assets.contact_img}
                alt="Decor showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Icons */}
            <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-md rounded-full px-6 py-3 flex items-center gap-5">
              <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
              <FaInstagram className="hover:text-pink-600 cursor-pointer" />
              <FaLinkedinIn className="hover:text-blue-500 cursor-pointer" />
              <FaTwitter className="hover:text-gray-700 cursor-pointer" />
            </div>
          </div>

          {/* Contact Info Boxes */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-2">Chat to support</h3>
              <p className="text-sm text-gray-600 mb-1">Speak to our friendly team.</p>
              <p className="font-medium text-sm">veluxe@gmail.com</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white">
              <h3 className="font-semibold text-lg mb-2">Chat to select</h3>
              <p className="text-sm text-gray-600 mb-1">Talk to get advice.</p>
              <p className="font-medium text-sm text-blue-600 cursor-pointer">Connect with chatbot</p>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white flex items-start gap-3">
              <FaMapMarkerAlt className="text-2xl text-amber-600" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Visit us</h3>
                <p className="text-sm text-gray-600">banjara hills , hyderabad</p>
              </div>
            </div>

            <div className="p-6 border border-gray-200 rounded-xl shadow-sm bg-white flex items-start gap-3">
              <FaPhoneAlt className="text-2xl text-amber-600" />
              <div>
                <h3 className="font-semibold text-lg mb-1">Call us</h3>
                <p className="text-sm text-gray-600">Mon–sun from 9am to 7pm</p>
                <p className="font-medium text-sm">+91 7013684532</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right section - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 text-center">Contact us</h2>
          <p className="text-center text-sm text-gray-600 mb-8">
            Our friendly team would love to hear from you.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-amber-400" />
              <input type="text" placeholder="Last name" className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-amber-400" />
            </div>

            <input type="email" placeholder="you@example.com" className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-amber-400" />
            <input type="tel" placeholder="+91 98765 43210" className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-amber-400" />
            <textarea placeholder="Leave us a message..." rows="4" className="p-3 border rounded-md w-full outline-none focus:ring-2 focus:ring-amber-400"></textarea>

            <div className="flex items-start gap-2">
              <input type="checkbox"  className="mt-1" required />
              <label className="text-sm text-gray-600">
                You agree to our friendly <span className="text-blue-500 underline">privacy policy</span>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-amber-600 transition"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

