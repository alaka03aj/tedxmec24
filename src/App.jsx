import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Team from "./pages/Team";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black bg-[url('/bg_lines.png')] bg-top bg-repeat w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
