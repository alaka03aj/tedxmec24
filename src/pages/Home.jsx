import { Routes, Route } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import { CiDesktopMouse2 } from "react-icons/ci";

import Marquee from "../components/Marquee";
import About from "../components/About";
import Faq from "../components/Faq";
import PrevSpeakers from "../components/PrevSpeakers";

const Home = () => {
  const aboutRef = useRef(null); // Reference for About section
  const [isScrolling, setIsScrolling] = useState(false); // State to track scrolling

  useEffect(() => {
    const handleScroll = () => {
      if (!isScrolling) {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        setIsScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  const handleButtonClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h1 className="font-helveticaCompressed text-5xl md:text-6xl lg:text-9xl">
            <span className="animate-text text-transparent bg-clip-text bg-gradient-to-t from-primary-deepRed to-primary-red">
              TEDxMEC 2025
            </span>
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-helvetica">
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
      <div ref={aboutRef}>
        <About />
      </div>

      {/* Other Sections */}
      <PrevSpeakers />
      <Faq />
      {/* <Marquee /> */}

      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default Home;
