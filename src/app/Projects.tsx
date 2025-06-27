'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from 'react-icons/bi';

const projects = [
  {
    title: 'MicroTweet – Scalable Social Platform',
    highlights: [
      'Built using microservices with user profiles, tweet handling, and search.',
      'Used Hash Maps, Tokens, and BCrypt for session and authentication.',
      'Used B-Trees for tweet indexing, Graphs for follow system, and Redis for caching.',
      'Improved system performance by 25%.',
    ],
    tech: 'React, Spring Boot, Redis, Data Structures',
    github: 'https://github.com/SriSankeerthanaGorrela/TwitterDSA',
    view: null,
  },
  {
    title: 'OTT Platform',
    highlights: [
      'Integrated REST API for movie data with title, genre, rating.',
      'Responsive React frontend with Redux for state management.',
      'Spring Boot backend with MySQL for efficient API handling.',
      'Increased user engagement by 20%.',
    ],
    tech: 'React, Redux, Spring Boot, MySQL, Axios, Material UI',
    github: 'https://github.com/SriSankeerthanaGorrela/Netflix_clone',
    view: 'https://sankeerthana-movie-app.netlify.app/',
  },
  {
    title: 'Meeting Schedule App',
    highlights: [
      'Spring Boot backend for user/admin login & slot selection.',
      'Admin can view overlapping slots to finalize meeting times.',
      'Displays common available slots across users.',
    ],
    tech: 'Spring Boot, REST APIs, Postman, Maven',
    github: 'https://github.com/SriSankeerthanaGorrela/slotselection-app',
    view: null,
  },
  {
    title: 'WorkBees Company Website',
    highlights: [
      'Designed & developed a professional website for WorkBees company.',
      'Implemented modern UI with responsive layout.',
      'Showcased services, team, contact & portfolio sections.',
    ],
    tech: 'Nextjs, Tailwind, Hosting Tools',
    github: null,
    view: 'https://www.runer.in/',
  },
];

function Projects() {
  return (
    <section id="projects" className=" bg-black text-white">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl  lg:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-violet-700 text-transparent bg-clip-text mb-10 text-center md:text-left"
      >
        PROJECTS
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2  md:mr-5 gap-8 md:gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#111] p-5 sm:p-6 shadow-md hover:shadow-fuchsia-700/30 transition-all duration-300 border border-gray-700"
          >
            <h3 className="text-lg lg:text-xl font-semibold text-fuchsia-400 mb-3">
              {project.title}
            </h3>
            <ul className="list-disc pl-5 text-sm lg:text-base space-y-1 text-gray-300">
              {project.highlights.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm lg:text-base text-violet-300">
              <strong>Technologies:</strong> {project.tech}
            </p>

            {/* Conditional Links */}
            <div className="mt-4 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-300 hover:underline"
                >
                  <FaGithub /> GitHub
                </a>
              )}
              {project.view && (
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-purple-300 hover:underline"
                >
                  <BiLinkExternal /> Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
