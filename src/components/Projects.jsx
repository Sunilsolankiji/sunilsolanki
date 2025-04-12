import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects and skills.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubLink: 'https://github.com/your-username/portfolio',
    liveLink: 'https://your-portfolio-link.com',
    image: 'path/to/image1.jpg',
  },
  {
    title: 'E-commerce App',
    description: 'A full-stack e-commerce application with payment integration.',
    techStack: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com/your-username/ecommerce',
    liveLink: 'https://ecommerce-demo.com',
    image: 'path/to/image2.jpg',
  },
];

const Projects = () => {
  return (
    <div className="bg-lightGray dark:bg-deepBlue text-deepBlue dark:text-lightGray min-h-screen p-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-slateGray rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-slateGray dark:text-lightGray mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-skyBlue text-white text-xs font-medium px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-skyBlue hover:underline"
                >
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-skyBlue hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;