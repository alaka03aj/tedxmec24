import Marquee from "../components/Marquee";
import About from "../components/About";
import Faq from "../components/Faq";
const Home = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen text-white">
        <div className="text-center">
          <h1 className="font-helveticaCompressed text-5xl md:text-6xl lg:text-9xl">
            <span className="animate-text text-transparent bg-clip-text bg-gradient-to-t from-primary-deepRed to-primary-red">
              TEDxMEC 2025
            </span>
          </h1>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-helveticaLight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-black2">
              COMING SOON
            </span>
          </h1>
        </div>
      </div>
      <About />
      <Faq />
      {/* <Marquee /> */}
    </>
  );
};

export default Home;
