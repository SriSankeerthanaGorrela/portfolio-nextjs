"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function About() {
  const titles = ["Web Developer", "Java Developer"];
  const [index, setIndex] = useState(0); // current title index
  const [text, setText] = useState(""); // text being typed
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[index];
    const speed = isDeleting ? 60 : 120;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <div className="border  space-x-15 flex flex-col lg:flex-row items-center">
      {/* Left Content */}
      <div className="space-y-10 text-center lg:text-left">
        {/* <h1 className="text-base font-semibold w-fit text-violet-700">
          Welcome to My Portfolio
        </h1> */}
        <Image
          src="/skills/about.png"
          alt="High quality image"
          width={0}
          height={0}
          className="rounded-full shadow-md mt-10 shadow-purple-700 w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80"
          unoptimized
        />
      </div>

      {/* Right Content */}
      <div className="space-y-2 md:space-y-4 text-center pt-10 md:pt-30 lg:text-left">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold w-fit bg-gradient-to-r font-mono from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
          Sri
        </h2>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-semibold w-fit bg-gradient-to-r font-mono from-fuchsia-700 to-violet-700 bg-clip-text text-transparent">
          Sankeerthana
        </h2>
        <hr className="border-white w-32 mx-auto lg:mx-0" />

        {/* Typewriter Text */}
        <h3 className="text-2xl font-medium text-white font-mono h-8">
          {text}
          <span className="animate-ping text-purple-500">|</span>
        </h3>
      </div>
    </div>
  );
}

export default About;
