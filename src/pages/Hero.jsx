import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";
import { Routes, Route } from "react-router-dom";
import About from "../components/About";
import Faq from "../components/Faq";
import PrevSpeakers from "../components/PrevSpeakers";

const Hero = () => {
  const [hoveredCell, setHoveredCell] = useState(null);
  const aboutRef = useRef(null); // Reference for About section

  const handleMouseEnter = (index) => {
    setHoveredCell(index);
  };

  const handleMouseLeave = () => {
    setHoveredCell(null);
  };

  const handleButtonClick = () => {
    // Smoothly scroll to About section on button click
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Calculate the number of rows and columns based on the screen size
  const cellSize = 100; // 100px
  const gapSize = 1; // 1px gap
  const numCols = Math.floor(window.innerWidth / (cellSize + gapSize));
  const numRows = Math.floor(window.innerHeight / (cellSize + gapSize));
  const totalCells = numCols * numRows;

  const cells = Array.from({ length: totalCells }, (_, index) => index);

  return (
    <>
      {/* Hero Section with Grid Background */}
      <div className="w-screen h-screen bg-black overflow-hidden relative">
        {/* Grid Background */}
        <div
          className="grid grid-px"
          style={{
            gridTemplateColumns: `repeat(${numCols}, ${cellSize}px)`,
            gridTemplateRows: `repeat(${numRows}, ${cellSize}px)`,
          }}
        >
          {cells.map((index) => (
            <motion.div
              key={index}
              className="border border-white/10 relative rounded-sm"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              initial={{ backgroundColor: "transparent" }}
              animate={{
                backgroundColor:
                  hoveredCell === index ? "rgba(235, 0, 40, 0.75)" : "transparent",
              }}
              transition={{ duration: 0.01 }} // Faster transition for smoother feel
            />
          ))}
        </div>

        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none">
          <h1 className="font-helveticaCompressed text-5xl md:text-6xl lg:text-9xl pointer-events-none">
            <span className="animate-text text-transparent bg-clip-text bg-gradient-to-t from-primary-deepRed to-primary-red">
              TEDxMEC 2025
            </span>
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-helvetica mt-4 pointer-events-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-black2">
              COMING SOON
            </span>
          </h1>

          {/* Scroll Down Button */}
          <button
            onClick={handleButtonClick}
            className="absolute bottom-0 mb-10 pointer-events-auto"
          >
            <CiDesktopMouse2 className="text-secondary-white2 w-10 h-10 animate-bounce" />
          </button>
        </div>
      </div>

      {/* About Section */}
      <div ref={aboutRef} id="about-us">
        <About />
      </div>

      {/* Other Sections */}
      <PrevSpeakers />
      <Faq />

      {/* React Router Routes */}
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default Hero;