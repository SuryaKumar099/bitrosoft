import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            BITROSOFT
          </h3>
          <p className="text-sm leading-relaxed">
            We provide cutting-edge IT solutions, consulting, and staffing
            services to help businesses scale globally.
          </p>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Services
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Mobile Development</li>
            <li className="hover:text-white cursor-pointer">Web Development</li>
            <li className="hover:text-white cursor-pointer">Cloud Computing</li>
            <li className="hover:text-white cursor-pointer">IT Consulting</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Clients</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">
            Contact
          </h4>
          <p className="text-sm mb-2">
            Email: <span className="text-white">info@bitstatic.com</span>
          </p>
          <p className="text-sm mb-4">
            Phone: <span className="text-white">+91 98765 43210</span>
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3">
            <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition">
              <FaFacebookF />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a className="p-2 bg-gray-800 rounded-full hover:bg-pink-500 transition">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} BITROSOFT. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;
