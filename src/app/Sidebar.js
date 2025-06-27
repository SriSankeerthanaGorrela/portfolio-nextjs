"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Sidebar() {
  const items = ["About", "Education", "Skills", "Projects", "Contact"];
  const [activeSection, setActiveSection] = useState("About");
  const [isOpen, setIsOpen] = useState(false); // Sidebar visibility
  const activeIndex = items.indexOf(activeSection);
  const fillStart = (activeIndex / items.length) * 100;
  const fillEnd = ((activeIndex + 1) / items.length) * 100;

  const handleClick = (item) => {
    setActiveSection(item);
    const targetId = item.toLowerCase();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
     // Delay closing sidebar to allow scroll to complete
      setTimeout(() => setIsOpen(false), 400);
    } else {
      setIsOpen(false);
    }
   // close sidebar on item click
  };

  return (
    <>
      {/* Hamburger Menu - visible only on small screens */}
      <div className="md:hidden fixed top-4 right-5 z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="w-6 h-6 text-violet-700" />
          ) : (
            <Menu className=" w-6 h-6 text-violet-700" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      {/* Mobile sidebar: appears over content when open */}
      {isOpen && (
        <div className="sm:hidden fixed top-0 my-1 left-0 h-70 w-40 bg-black z-40 shadow-lg p-6 flex flex-col gap-5">
          {items.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`text-sm font-semibold transition duration-200 ${
                activeSection === item ? "text-gray-400" : "text-violet-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <div className="hidden sm:flex mt-20 gap-10 pr-10 pt-5">
        {/* Progress Line */}
        <div className="relative h-[300px] w-1 rounded-full">
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
