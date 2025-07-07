import React, { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "../assets/Logo-main.png"; 
import { NavLink } from "react-router-dom";
import { openCalendlyPopup } from "../utils/calendly";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStartedClick = (e) => {
    e.preventDefault();
    openCalendlyPopup();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  return (
    <>
    {/* sticky top-0 z-50 backdrop-blur-sm border-b border-white/10 */}
      <nav className="primary-bg text-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <img 
                src={Logo} 
                alt="28-media Logo" 
                className="h-20 md:h-32 w-auto transition-transform duration-300 group-hover:scale-105" 
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                <li>
                  <a 
                    href="/" 
                    className="text-white hover:text-orange-300 transition-colors duration-300 font-medium relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-white hover:text-orange-300 transition-colors duration-300 font-medium relative group"
                  >
                    About
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-white hover:text-orange-300 transition-colors duration-300 font-medium relative group"
                  >
                    Contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              </ul>
              
              {/* CTA Button */}
              <button 
                onClick={handleGetStartedClick}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-orange-300 focus:outline-none focus:text-orange-300 transition-colors duration-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="px-4 flex flex-col items-center justify-center pt-2 pb-6 space-y-4 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-sm">
            <a
              href="#"
              className="block px-4 py-3 text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-3 text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-4 py-3 text-white hover:text-orange-300 hover:bg-white/10 rounded-lg transition-all duration-300 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile CTA Button */}
            <div className="pt-4">
              <button 
                onClick={handleGetStartedClick}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
