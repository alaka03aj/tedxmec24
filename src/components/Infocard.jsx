const Infocard = ({ h1, h2, c }) => {
  return (
    <div className="relative flex flex-col md:flex-row bg-secondary-black1 rounded-lg text-secondary-white2 items-center w-full">
      <div className="p-8">
        <p className="font-helveticaLight text-xl md:text-2xl whitespace-nowrap">{h1}</p>
        <p className="font-helvetica text-3xl md:text-4xl font-bold text-primary-red">{h2}</p>
        <p className="mt-4 font-helvetica text-[16px] md:text-lg text-secondary-white2">{c}</p>
      </div>
    </div>
  );
};

export default Infocard;
