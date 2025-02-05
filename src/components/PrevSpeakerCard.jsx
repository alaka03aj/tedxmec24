const PrevSpeakerCard = ({ image, name, designation, desc }) => {
  return (
    <div className="relative flex flex-col p-4 gap-2 group overflow-hidden transform transition-transform duration-700 hover:-translate-y-2">
      <div className=" bg-secondary-black1 rounded-md items-stretch">
        <div>
          <img src={image} alt={name} className="rounded-md" />
        </div>

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-secondary-black1 bg-opacity-90 text-white rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300">
          <h1 className="font-helvetica font-bold">{name}</h1>
          <p className="font-helvetica text-center p-4 text-sm">{desc}</p>
        </div>
      </div>
      <div className="text-secondary-white2 group-hover:hidden">
        <h1 className="font-helvetica font-bold">{name}</h1>
        <p className="font-helvetica text-sm">{designation}</p>
      </div>
    </div>
  );
};

export default PrevSpeakerCard;
