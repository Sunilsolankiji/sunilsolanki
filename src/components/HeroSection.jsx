import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'react-icons/fa';
import { techStack } from '../constants/techStack';

const HeroSection = () => {
  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray min-h-screen flex flex-col items-center justify-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4 text-skyBlue dark:text-lightGray">Sunil Solanki</h1>
        <p className="text-xl mb-6">Software Engineer | Frontend Developer</p>
        <div className="flex justify-center gap-4">
          <button className="bg-skyBlue text-deepBlue px-6 py-2 rounded font-semibold hover:bg-lightGray hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">View Projects</button>
          <button className="bg-lightGray dark:bg-slateGray text-deepBlue dark:text-lightGray px-6 py-2 rounded font-semibold hover:bg-skyBlue hover:scale-105 transition-all duration-300 ease-in-out shadow-md hover:shadow-lg">Download Resume</button>
        </div>
      </motion.div>

      {/* Tech Stack Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-12 flex gap-8"
      >
        {techStack.map((tech, index) => (
          <div key={index} className="text-center">
            {React.createElement(Icons[tech.icon], { size: 50, className: tech.color })}
            <p className="mt-2">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HeroSection;