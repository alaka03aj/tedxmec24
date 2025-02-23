import { SpeakersData } from "../data/SpeakersData";
import SpeakerCard from "./SpeakerCard";

const PrevSpeakers = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 md:px-16 mb-10">
      <h1 className="text-secondary-white2 font-bold font-helvetica text-[36px] leading-snug text-center md:text-5xl">OUR SPEAKERS</h1>
      <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 lg:grid-cols-3">
        {SpeakersData.map((speaker, index) => (
          <SpeakerCard
            key={index}
            image={speaker.image}
            name={speaker.name}
            designation={speaker.designation}
            desc={speaker.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default PrevSpeakers;