import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hero from "./pages/Hero";
import Gallery from "./pages/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-black bg-[url('/bg_lines.png')] bg-top bg-repeat w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
