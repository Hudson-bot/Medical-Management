import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Send } from "lucide-react";


    
    const Footer = () => {
      return (
        <footer className="bg-[#0B1330] text-white py-12 px-6 md:px-12 ">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <h2 className="text-2xl font-bold">LOGO</h2>
              <p className="text-gray-400 mt-4">
                We offer a wide range of healthcare services to meet your needs.
              </p>
            </div>
    
            {/* Healthcare Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Healthcare</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Doctors</li>
                <li>• Diagnostics</li>
                <li>• Caregiver</li>
                <li>• Hospitality</li>
                <li>• Emergency</li>
              </ul>
            </div>
    
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="text-gray-400 space-y-2">
                <li>• Home</li>
                <li>• About Us</li>
                <li>• FAQs</li>
                <li>• Blogs</li>
                <li>• Facilities</li>
              </ul>
            </div>
    
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">yourmail@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">+1 (213) 465 789</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                  <span className="text-gray-400">Delhi</span>
                </div>
              </div>
            </div>
          </div>
    
          {/* Bottom Section */}
          <div className="max-w-6xl mx-auto mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>Copyright © 2024 All Rights Reserved.</p>
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-white" />
              <Instagram className="w-5 h-5 cursor-pointer hover:text-white" />
              <Send className="w-5 h-5 cursor-pointer hover:text-white" />
            </div>
            {/* Policies */}
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span className="mx-2">•</span>
              <a href="#" className="hover:text-white">
                Terms & Conditions
              </a>
            </div>
          </div>
        </footer>
      );
    };
    
    export default Footer;
    


