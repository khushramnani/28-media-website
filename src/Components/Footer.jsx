import React from 'react'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold patua-one-regular">
                28<span className="text-orange-500">Media</span>
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed text-sm md:text-base">
                We build brands that sell. Transforming real estate marketing with creative strategies and data-driven results.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold oswald-regular mb-4 text-gray-900">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:shadow-md">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:shadow-md">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:shadow-md">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-all duration-300 group hover:scale-110 hover:shadow-md">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Social Media Marketing
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Video Production
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Branding & Design
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Paid Advertising
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Website Development
              </a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                About Us
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Our Portfolio
              </a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Case Studies
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Blog
              </a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors duration-300 flex items-center gap-2 group text-sm md:text-base">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                Contact
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1 hover:bg-orange-600 transition-colors duration-300">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm md:text-base">+91 91736 66777</p>
                  <p className="text-gray-600 text-xs md:text-sm">Mon - Sat, 9 AM - 7 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1 hover:bg-orange-600 transition-colors duration-300">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <input type="email" className="text-gray-900 font-medium text-sm md:text-base" value="saumya@28media.com" readOnly />
                  <p className="text-gray-600 text-xs md:text-sm">We reply within in 12 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1 hover:bg-orange-600 transition-colors duration-300">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium text-sm md:text-base">Gujarat, India</p>
                  <p className="text-gray-600 text-xs md:text-sm">Serving All over World</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        {/* <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h4 className="text-xl font-bold patua-one-regular mb-2">
              Stay Updated with <span className="text-orange-500">Marketing Tips</span>
            </h4>
            <p className="text-gray-400 mb-6">
              Get weekly insights on real estate marketing trends and strategies.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
              />
              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-xs md:text-sm text-center md:text-left">
              © 2025 28-Media.com All rights reserved. | Designed by <a href="https://www.khushramnani.me" target='_blank' className="text-orange-500 hover:underline">Khush Ramnani</a>
            </p>
            <div className="flex gap-4 md:gap-6 text-xs md:text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
