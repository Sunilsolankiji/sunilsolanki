import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slateGray text-lightGray py-4">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="mb-4">&copy; 2025 Sunil Solanki. All rights reserved.</p>
        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-skyBlue" />
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-skyBlue" />
          </a>
          <a href="https://twitter.com/your-handle" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-skyBlue" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;