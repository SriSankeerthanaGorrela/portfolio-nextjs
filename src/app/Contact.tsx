'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-10 px-10 flex flex-col items-center"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl lg:text-4xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 to-violet-700 bg-clip-text text-transparent"
      >
        CONTACT
      </motion.h2>

      {/* Contact Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center"
      >
        <p className="lg:text-xl text-gray-300">Feel free to reach out to me!</p>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 mt-6">
          {/* GitHub */}
          <a
            href="https://github.com/SriSankeerthanaGorrela"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-purple-300 hover:text-fuchsia-400 transition"
          >
            <FaGithub size={20} /> GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sri-sankeerthana/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-purple-300 hover:text-fuchsia-400 transition"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:sankeerthana.gorrela@example.com"
            className="flex items-center gap-3 text-purple-300 hover:text-fuchsia-400 transition"
          >
            <MdEmail size={20} /> sankeerthanagorrela@gmail.com
          </a>

          {/* Phone */}
          <div className=" items-center hidden md:flex gap-3 text-purple-300">
            <FaPhoneAlt size={18} /> +91 7569488277
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;
