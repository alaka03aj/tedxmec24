import { Routes, Route } from "react-router-dom";
import { useRef } from "react";
import { CiDesktopMouse2 } from "react-icons/ci";

import About from "../components/About";
import Faq from "../components/Faq";
import PrevSpeakers from "../components/PrevSpeakers";

const Home = () => {
  const aboutRef = useRef(null); // Reference for About section

  const handleButtonClick = () => {
    // Smoothly scroll to About section on button click
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen text-white bg-[url('/bg-water.gif')] bg-cover w-full">
        <div className="text-center">
          <h1 className="font-helvetica font-black text-[48px] tracking-tight sm:text-[82px] md:text-[110px] lg:text-9xl">
            <span className="text-primary-red">
              TEDxMEC 2025
            </span>
          </h1>
          <h1 className="text-2xl leading-[1px] md:text-4xl md:leading-[1px] lg:text-5xl font-helvetica">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-black2">
              COMING SOON
            </span>
          </h1>
        </div>

        <button
          onClick={handleButtonClick}
          className="absolute bottom-0 mb-10"
        >
          <CiDesktopMouse2 className="text-secondary-white2 w-10 h-10 animate-bounce" />
        </button>
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

export default Home;
