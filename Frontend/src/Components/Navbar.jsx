import React, { useEffect, useState } from "react";
import { assets, NavItems } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setisScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/"); // redirect to home after logout
  };

  return (
    <nav>
      <div
        className={`w-full flex items-center justify-between lg:px-16 relative transition-all duration-500 z-50 ${
          isScrolled ? "bg-gray-400 text-black" : "bg-black text-white"
        }`}
      >
        {/* logo */}
        <div className="flex items-center justify-center gap-1">
          <img src={assets.Logo} alt="" className="w-20 h-20 mt-2" />
          <div>
            <h1 className="font-medium">Veluxe Rentals</h1>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-4 ml-7">
          {NavItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className="relative overflow-hidden h-6 group"
              >
                <span className="block group-hover:-translate-y-full transition-transform duration-300">
                  {item.name}
                </span>
                <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
                  {item.name}
                </span>
                {/* underline */}
                <span
                  className={`absolute bottom-0 left-0 h-[3px] w-full rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-linear-to-l bg-pink-600 to-purple-600"
                      : "bg-transparent group-hover:bg-red-400"
                  }`}
                ></span>
              </Link>
            );
          })}
        </div>

        {/* Right side (auth or user) */}
        <div className="hidden md:flex items-center gap-4 mr-2">
          {!user ? (
            <>
              <Link to="/signin">
                <button className="text-sm font-medium bg-gray-600 px-4 py-2 shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-white rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 hover:text-black">
                  SignIn
                </button>
              </Link>
              <Link to="/login">
                <button className="text-sm font-medium bg-gray-600 px-5 py-2 shadow-[0px_0px_30px_7px] hover:shadow-[0px_0px_30px_14px] text-white rounded-full transition duration-300 hover:bg-slate-100 shadow-white/50 hover:shadow-white/50 hover:text-black">
                  LogIn
                </button>
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="text-sm font-medium bg-gray-600 px-4 py-2 rounded-full text-white hover:bg-red-500 transition duration-300"
              >
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu icon */}
        <div className="block md:hidden">
          <img
            src={menuOpen ? assets.close_Icon : assets.menuBar}
            alt=""
            className="w-8 h-8"
            onClick={toggleMenu}
          />
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div
            className="fixed right-0 bottom-0 w-[60%] top-16 flex flex-col items-center justify-start 
            space-y-8 z-50 bg-transparent text-white backdrop-blur-sm md:hidden transition-all duration-500"
            onClick={toggleMenu}
          >
            {NavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={toggleMenu}
                className="text-2xl font-medium hover:text-yellow-400 transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Auth options for mobile */}
            {!user ? (
              <div className="flex flex-col items-center gap-4">
                <Link to="/signin" onClick={toggleMenu}>
                  <button className="text-sm bg-gray-600 px-4 py-2 rounded-full text-white hover:bg-slate-100 hover:text-black transition">
                    SignIn
                  </button>
                </Link>
                <Link to="/login" onClick={toggleMenu}>
                  <button className="text-sm bg-gray-600 px-5 py-2 rounded-full text-white hover:bg-slate-100 hover:text-black transition">
                    LogIn
                  </button>
                </Link>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <span className="text-sm font-medium">Hi, {user.name}</span>
                <button
                  onClick={handleLogout}
                  className="text-sm bg-gray-600 px-4 py-2 rounded-full text-white hover:bg-red-500 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
