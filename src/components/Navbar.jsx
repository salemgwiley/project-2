import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when the window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative py-4 px-6 md:px-12 lg:px-20 flex justify-between items-center container mx-auto z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="RentCars Logo" className="h-8" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        <Link to="/become-renter" className="text-gray-700 hover:text-primary">
          Become a renter
        </Link>
        <Link to="/rental-deals" className="text-gray-700 hover:text-primary">
          Rental deals
        </Link>
        <Link to="/how-it-works" className="text-gray-700 hover:text-primary">
          How it work
        </Link>
        <Link to="/why-us" className="text-gray-700 hover:text-primary">
          Why choose us
        </Link>
      </div>

      {/* Desktop Auth Buttons */}
      <div className="hidden lg:flex items-center space-x-4">
        <Link
          to="/signin"
          className="text-gray-700 hover:text-primary px-4 py-2"
        >
          Sign in
        </Link>
        <Link
          to="/signup"
          className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary/90 transition duration-200"
        >
          Sign up
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-gray-700 focus:outline-none z-50"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? (
          <X size={24} className="text-gray-700" />
        ) : (
          <Menu size={24} className="text-gray-700" />
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out z-40 lg:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">

          <div className="flex flex-col space-y-6 px-2">
            <Link
              to="/become-renter"
              className="text-gray-700 text-lg py-2"
              onClick={toggleMenu}
            >
              Become a renter
            </Link>
            <Link
              to="/rental-deals"
              className="text-gray-700 text-lg py-2"
              onClick={toggleMenu}
            >
              Rental deals
            </Link>
            <Link
              to="/how-it-works"
              className="text-gray-700 text-lg py-2"
              onClick={toggleMenu}
            >
              How it work
            </Link>
            <Link
              to="/why-us"
              className="text-gray-700 text-lg py-2"
              onClick={toggleMenu}
            >
              Why choose us
            </Link>
          </div>

          <div className="mt-auto">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                to="/signin"
                className="text-gray-700 py-3 px-4 border border-gray-200 rounded-md text-center"
                onClick={toggleMenu}
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="bg-primary text-white py-3 px-4 rounded-md text-center"
                onClick={toggleMenu}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
