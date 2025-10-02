import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          RoseFitZone Gym
        </motion.h1>
        <nav>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className="hidden md:flex gap-6 font-medium">
            <li>
              <Link to="/" className="hover:text-yellow-300 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-300 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-yellow-300 transition duration-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/membership" className="hover:text-yellow-300 transition duration-300">
                Membership
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-0 right-0 h-full w-3/4 bg-gradient-to-r from-purple-500 via-pink-300 to-purple-500 text-white flex flex-col items-center gap-6 py-10 shadow-lg md:hidden ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
              <X size={24} />
            </button>
            <ul className="flex flex-col items-center gap-6 font-medium">
              <li>
                <Link to="/" onClick={toggleMenu} className="hover:text-yellow-300 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={toggleMenu} className="hover:text-yellow-300 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" onClick={toggleMenu} className="hover:text-yellow-300 transition duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/membership" onClick={toggleMenu} className="hover:text-yellow-300 transition duration-300">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={toggleMenu} className="hover:text-yellow-300 transition duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>
        </nav>
      </div>
    </header>
  );
}