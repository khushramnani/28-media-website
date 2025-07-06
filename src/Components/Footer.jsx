import React from 'react'
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Facebook, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-8 md:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold patua-one-regular">
                28<span className="text-orange-500">Media</span>
              </h3>
              <p className="text-gray-600 mt-2 leading-relaxed">
                We build brands that sell. Transforming real estate marketing with creative strategies and data-driven results.
              </p>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold oswald-regular mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-colors group">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-colors group">
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-colors group">
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="bg-gray-100 hover:bg-orange-500 hover:text-white p-3 rounded-full transition-colors group">
                  <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Social Media Marketing
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Video Production
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Branding & Design
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Paid Advertising
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Website Development
              </a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                About Us
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Our Portfolio
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Case Studies
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Blog
              </a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2 group">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                Contact
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold oswald-regular text-orange-500">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">+91 98765 43210</p>
                  <p className="text-gray-600 text-sm">Mon - Sat, 9 AM - 7 PM</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">hello@28media.in</p>
                  <p className="text-gray-600 text-sm">We reply within 24 hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500 p-2 rounded-lg mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">Mumbai, India</p>
                  <p className="text-gray-600 text-sm">Serving PAN India</p>
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
        <div className="max-w-7xl mx-auto px-8 md:px-16 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © 2025 28-Media. All rights reserved. | Designed by <a href="https://www.khushramnani.me" className="text-orange-500 hover:underline">Khush Ramnani</a>
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
