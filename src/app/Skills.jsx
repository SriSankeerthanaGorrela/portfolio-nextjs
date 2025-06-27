'use client'
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    { name: "Java", url: "/skills/java.png" },
    { name: "Spring Boot", url: "/skills/spring.png" },
    { name: "React", url: "/skills/React.webp" },
    { name: "Next.js", url: "/skills/next.png" },
    { name: "HTML", url: "/skills/html.png" },
    { name: "CSS", url: "/skills/css.png" },
    { name: "SQL", url: "/skills/sql.png" },
  ];

  return (
    <section className=" text-white " id="skills">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 to-violet-700 text-transparent bg-clip-text w-fit">
          SKILLS
        </h1>

        <div className="grid  grid-cols-2 lg:grid-cols-4  md:mr-5 gap-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center bg-[#1a1a1a] rounded-2xl p-5 shadow-lg shadow-violet-700/20 hover:shadow-fuchsia-600/30"
            >
              <Image
                src={skill.url}
                alt={skill.name}
                width={64}
                height={64}
                className="w-16 h-16 object-contain mb-3"
              />
              <p className="text-sm font-medium text-violet-300">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
