import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Icons for the hamburger menu
import ButtonsForSigning from "../../pages/Signing/ButtonsForSigning/ButtonsForSigning";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSubmit = () => {
      navigate("/book-appointment")
}
  return (
    <header className="bg-indigo-100 w-screen fixed top-0 left-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold text-black">
          MyLogo
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:items-center lg:space-x-8 absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0`}
        >
          <Link to="/" className="block lg:inline text-black hover:text-indigo-900 font-medium py-2 lg:py-0">
            Home
          </Link>
          <Link to="/aboutUs" className="block lg:inline text-black hover:text-blue-900 font-medium py-2 lg:py-0">
            About Us
          </Link>
          <Link to="/services" className="block lg:inline text-black hover:text-indigo-900 font-medium py-2 lg:py-0">
            Services
          </Link>
          <Link to="/blog" className="block lg:inline text-black hover:text-indigo-900 font-medium py-2 lg:py-0">
            Blog
          </Link>
          <Link to="/contactUs" className="block lg:inline text-black hover:text-indigo-900 font-medium py-2 lg:py-0">
            Contact Us
          </Link>

          {/* Book Appointment Button (Visible in Menu Bar on Small Screens) */}
          <button className="block lg:hidden bg-blue-900 text-white px-6 py-2 hover:bg-blue-600 rounded-full mt-4"
          onClick={handleSubmit}>
            Book Appointment
          </button>
        </nav>

        {/* Call-to-Action Button (Visible on Larger Screens) */}
        <button className="hidden lg:block bg-indigo-900 text-white px-6 py-2 hover:opacity-75 rounded-full"
        onClick={handleSubmit}>
          Book Appointment
        </button>
      </div>
    </header>
  );
};

export default Header;