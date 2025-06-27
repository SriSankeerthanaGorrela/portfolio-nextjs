'use client';
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'WorkBees Technologies',
    role: 'Web Developer',
    duration: 'March 2025 – Present',
    responsibilities: [
      'Developed and maintained the official company website using React and Tailwind CSS.',
      'Created and integrated an internal employee management system.',
      'The system handles department-wise employee roles, designations, login/logout tracking, and access control.',
      'Worked closely with backend team to build secure APIs and ensured smooth user experience for admins and employees.',
      'Developed and maintained the official company website.',
      'Implemented responsive layouts using React and Tailwind CSS.',
      'Collaborated with designers to enhance user experience.',
      'Optimized performance with lazy loading and SEO practices.',
    ],
    tech: 'Next.js, React, Tailwind CSS, TypeScript, Git',
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="bg-black text-white "
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 to-violet-700 text-transparent bg-clip-text mb-10 text-center md:text-left"
      >
        EXPERIENCE
      </motion.h2>

      <div className="space-y-8 sm:space-y-10 md:mr-5 ">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#111] border border-gray-700 rounded-xl p-5 sm:p-6 shadow-md hover:shadow-purple-600/40 transition duration-300"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3 gap-2">
              <h3 className="text-lg lg:text-xl font-semibold text-fuchsia-400">
                {exp.role} <span className="text-gray-300">at</span> {exp.company}
              </h3>
              <p className="text-xs lg:text-sm text-purple-200 bg-purple-900 px-3 py-1 rounded-md w-fit">
                {exp.duration}
              </p>
            </div>

            <ul className="list-disc pl-5 sm:pl-6 text-sm lg:text-base text-gray-300 space-y-1 mb-3">
              {exp.responsibilities.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <p className="text-sm lg:text-base text-violet-300">
              <strong>Technologies:</strong> {exp.tech}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
