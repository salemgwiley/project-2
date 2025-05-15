import React from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#061325] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo and Contact */}
          <div className="space-y-6">
            <div className="flex items-center">
              <img src={logo} alt="Rentcars Logo" className="h-8 mr-2" />
              <span className="text-xl font-bold uppercase">RENTCARS</span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                <p>25566 Hc 1, Glenallen, Alaska, 99588, USA</p>
              </div>

              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>+603 4784 273 12</p>
              </div>

              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 flex-shrink-0" />
                <p>rentcars@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Column 2: Our Product */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Career
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Car
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Priceline
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Download
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Partner Network
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Cruises
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: About & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-6">About Rentcars</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Why choose us
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Investor Relations
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Press Center
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-primary transition-colors">
                  Advertise
                </Link>
              </li>
            </ul>

            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className=" bg-opacity-10 p-2 rounded-full hover:text-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-opacity-10 p-2 rounded-full hover:text-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className=" bg-opacity-10 p-2 rounded-full hover:text-primary transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-gray-400 text-sm">
          <p>Copyright {currentYear} • Rentcars, All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
