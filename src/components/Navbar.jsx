import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="sticky top-0 bg-lightGray dark:bg-deepBlue shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-skyBlue dark:text-lightGray">
          Sunil Solanki
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <ScrollLink to="hero" smooth={true} duration={500} className="cursor-pointer text-deepBlue dark:text-lightGray hover:text-skyBlue">
            Home
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} className="cursor-pointer text-deepBlue dark:text-lightGray hover:text-skyBlue">
            Projects
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} className="cursor-pointer text-deepBlue dark:text-lightGray hover:text-skyBlue">
            About
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} className="cursor-pointer text-deepBlue dark:text-lightGray hover:text-skyBlue">
            Contact
          </ScrollLink>
          <button
            onClick={toggleDarkMode}
            className="text-deepBlue dark:text-lightGray hover:text-skyBlue"
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-deepBlue dark:text-lightGray hover:text-skyBlue">
            ☰
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;