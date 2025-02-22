import { Routes, Route } from "react-router-dom";

import About from "../components/About";
import Faq from "../components/Faq";
import PrevSpeakers from "../components/PrevSpeakers";
import Bento from "../components/Bento";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen text-white bg-cover w-full">
        <Bento />
      </div>
      <Marquee />
      <About />
      <PrevSpeakers />
      <Faq />

      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
};

export default Home;
