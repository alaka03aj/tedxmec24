const Infocard = ({ h1, h2, c }) => {
  return (
    <div className="flex flex-col bg-secondary-black1 rounded-lg text-secondary-white2 justify-center p-4 gap-4 w-full items-stretch lg:p-6">
      <div className="w-full text-secondary-white2 flex flex-col items-start">
        <p className="font-helveticaLight text-2xl whitespace-nowrap ">{h1}</p>
        <p className="font-helveticaCompressed text-4xl tracking-wide">{h2}</p>
      </div>
      <div className="w-full font-helvetica">{c}</div>
    </div>
  );
};

export default Infocard;
