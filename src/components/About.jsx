import Infocard from "./Infocard";
import { AboutDetails } from "../data/AboutDetails";

const About = () => {
  return (
    <>
      <div className="text-white pl-10">
        <p className="text-4xl text-secondary-black2 font-bold">ABOUT US</p>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-10 lg:flex-row">
        {AboutDetails.map((about, index) => (
          <Infocard
            key={index}
            h1={about.heading1}
            h2={about.heading2}
            c={about.content}
          />
        ))}
      </div>
    </>
  );
};

export default About;
