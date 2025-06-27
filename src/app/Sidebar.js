"use client";
import React, { useEffect, useState, useRef } from "react";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const items = ["About", "Education", "Skills", "Projects", "Experience", "Contact"];
  const [activeSection, setActiveSection] = useState("About");
  const [isOpen, setIsOpen] = useState(false);
  const observerRef = useRef(null);

  const activeIndex = items.indexOf(activeSection);
  const fillStart = (activeIndex / items.length) * 100;
  const fillEnd = ((activeIndex + 1) / items.length) * 100;

  const handleClick = (item) => {
    setActiveSection(item);
    const targetId = item.toLowerCase();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => setIsOpen(false), 400);
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -50% 0px", // ✅ updated margins
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const formatted = id.charAt(0).toUpperCase() + id.slice(1);
          setActiveSection(formatted);
        }
      });
    }, observerOptions);

    // Observe each section
    items.forEach((item) => {
      const section = document.getElementById(item.toLowerCase());
      if (section) observer.observe(section);
    });

    observerRef.current = observer;

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex mt-20 gap-10 pr-10 pt-5">
        {/* Progress Line */}
        <div className="relative h-[400px] w-1 rounded-full">
          <div
            className="absolute w-full bg-purple-700 transition-all duration-300"
            style={{
              top: `${fillStart}%`,
              height: `${fillEnd - fillStart}%`,
            }}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-7">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-xl lg:text-2xl font-semibold px-4 py-2 transition duration-200 ${
                activeSection === item ? "text-gray-400" : "text-violet-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
