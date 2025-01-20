import { prevSpeakerDetails } from "../data/PrevSpeakersDetails";
import PrevSpeakerCard from "./PrevSpeakerCard";

const PrevSpeakers = () => {
  return (
    <div className="flex flex-col justify-center items-center px-10 lg:px-20">
      <h1 className="text-5xl text-secondary-white2 font-bold font-helvetica">Our Previous Speakers</h1>
      <div className="grid grid-cols-1 gap-5 p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {prevSpeakerDetails.map((speaker, index) => (
          <PrevSpeakerCard
            key={index}
            image={speaker.image}
            name={speaker.name}
            designation={speaker.designation}
          />
        ))}
      </div>
    </div>
  );
};

export default PrevSpeakers;