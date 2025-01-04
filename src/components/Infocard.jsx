import infocard_bg from '../assets/infocard_bg.png';

const Infocard = () => {
  return (
    <div className="relative bg-secondary-black1 p-6 rounded-lg w-60 h-60">
      <div className="text-white">
        <p className="font-helveticaLight text-3xl">WHAT IS</p>
        <p className="font-helveticaCompressed text-4xl">TEDX?</p>
      </div>
      <img 
        src={infocard_bg} 
        alt="infocard bg" 
        className="absolute bottom-0 right-0 w-24 h-24 object-contain" 
      />
    </div>
  );
};

export default Infocard;
