import React from 'react';
import { FaCode, FaGraduationCap, FaHiking, FaMusic } from 'react-icons/fa';

const About = () => {
  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Short Bio */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hi, I'm Sunil Solanki, a passionate Software Engineer and Frontend Developer with a knack for creating elegant and efficient web solutions. I love turning ideas into reality using code and staying updated with the latest technologies.
          </p>
        </div>

        {/* Skills Stack */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <FaCode size={24} className="text-skyBlue" />
              <span>Frontend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode size={24} className="text-skyBlue" />
              <span>Backend Development</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode size={24} className="text-skyBlue" />
              <span>UI/UX Design</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCode size={24} className="text-skyBlue" />
              <span>React.js</span>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Experience & Education</h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-slateGray p-4 rounded">
            <h3 className="text-xl font-semibold">Software Engineer at XYZ Corp</h3>
            <p className="text-sm">Jan 2020 - Present</p>
            <p>Developed scalable web applications and collaborated with cross-functional teams.</p>
          </div>
          <div className="bg-white dark:bg-slateGray p-4 rounded">
            <h3 className="text-xl font-semibold">Bachelor's in Computer Science</h3>
            <p className="text-sm">2015 - 2019</p>
            <p>Graduated with honors, specializing in software development and algorithms.</p>
          </div>
        </div>
      </div>

      {/* Hobbies/Interests */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-4">Hobbies & Interests</h2>
        <div className="flex gap-8">
          <div className="text-center">
            <FaHiking size={40} className="text-skyBlue" />
            <p className="mt-2">Hiking</p>
          </div>
          <div className="text-center">
            <FaMusic size={40} className="text-skyBlue" />
            <p className="mt-2">Music</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;