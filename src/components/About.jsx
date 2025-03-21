import Infocard from "./Infocard";
import { AboutDetails } from "../data/AboutDetails";

const About = () => {
  return (
    <div className="my-20 flex flex-col justify-center">
      <div className="text-center">
        <span className="text-[36px] font-bold font-helvetica text-secondary-white2 md:text-5xl">
          WHO ARE WE?
        </span>
      </div>
      <div className="flex flex-col justify-stretch gap-5 py-10 px-4 md:px-16 lg:flex-row lg:items-stretch">
        {AboutDetails.map((about, index) => (
          <Infocard
            key={index}
            h1={about.heading1}
            h2={about.heading2}
            c={about.content}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
