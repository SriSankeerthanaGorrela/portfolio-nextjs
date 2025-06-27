import React from 'react';

function Aboutme() {
  return (
    <div
      id="about"
      className=" space-y-3 md:space-y-5"
    >
      <h1 className="bg-gradient-to-r w-fit from-fuchsia-500 to-violet-700 text-transparent bg-clip-text font-bold text-2xl  lg:text-4xl">
        ABOUT ME
      </h1>
        <div className="mt-2 h-1 w-16 bg-fuchsia-600 rounded" />
      <p className="text-white text-sm  lg:text-xl leading-relaxed md:mr-5">
        I am Sri Sankeerthana, a passionate and detail-oriented Full Stack Developer skilled in
        building dynamic, responsive, and scalable web applications. With a solid foundation in
        both frontend and backend technologies—including React, Next.js, HTML, CSS on the frontend,
        and Java, Spring Boot, and SQL on the backend—I strive to deliver seamless user experiences
        and robust application logic. I enjoy turning complex problems into clean, efficient code
        and continuously enhancing my skills to stay aligned with modern development practices.
      </p>
    </div>
  );
}

export default Aboutme;
