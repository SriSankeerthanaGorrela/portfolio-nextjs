'use client';
import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  const educationData = [
    {
      degree: 'B.Tech ECE',
      year: '2019 - 2023',
      institution: 'Pragati Engineering College',
      grade: '8.27 CGPA',
    },
    {
      degree: 'Intermediate MPC',
      year: '2017 - 2019',
      institution: 'Sri Chaitanya Junior College',
      grade: '9.61 CGPA',
    },
    {
      degree: 'SSC',
      year: '2016 - 2017',
      institution: 'Adarsha Vidyalaya',
      grade: '9.7 CGPA',
    },
  ];

  return (
    <section className="w-full bg-black text-white " id="education">
      {/* Title */}
      <div className="mb-14 ">
        <h2 className="text-2xl lg:text-4xl font-bold bg-gradient-to-r w-fit from-fuchsia-500 to-violet-700 bg-clip-text text-transparent">
          EDUCATION
        </h2>
        <div className="mt-2 h-1 w-16 bg-fuchsia-600 rounded" />
      </div>

      {/* Timeline Cards */}
      <div className="space-y-10 max-w-4xl md:mr-5 ">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1e1e1e] to-[#111111] border border-gray-700 rounded-2xl p-6 shadow-lg shadow-purple-800/30 hover:shadow-fuchsia-700/30 transition duration-300 hover:scale-105"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg lg:text-2xl font-semibold text-violet-400">
                {edu.degree}
              </h3>
              <span className="text-[10px] lg:text-sm px-3 py-1 rounded-full bg-purple-800 text-purple-200">
                {edu.year}
              </span>
            </div>
            <p className="text-base lg:text-xl text-gray-100">{edu.institution}</p>
            <p className="text-sm text-gray-400 mt-1">{edu.grade}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;
