import Infocard from "./Infocard";
import { AboutDetails } from "../data/AboutDetails";

const About = () => {
  return (
    <>
      <div className="text-center">
        <span className="text-4xl font-helvetica text-transparent bg-clip-text bg-gradient-to-r from-white to-secondary-black2">
          ABOUT US
        </span>
      </div>
      <div className="flex flex-col justify-stretch gap-5 p-10 lg:flex-row lg:items-stretch lg:px-32">
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
