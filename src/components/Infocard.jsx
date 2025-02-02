import info_bg from "../assets/info_bg.png";

const Infocard = ({ h1, h2, c }) => {
  return (
    <div className="relative flex flex-col md:flex-row bg-secondary-black1 rounded-lg text-secondary-white2 items-stretch w-full">
      {/* Text Section */}
      <div className="p-8">
        <p className="font-helveticaLight text-2xl whitespace-nowrap">{h1}</p>
        <p className="font-helvetica text-4xl font-bold text-primary-red">{h2}</p>
        <p className="mt-4 font-helvetica text-lg text-secondary-white2">{c}</p>
      </div>
      
      {/* Image Section */}
      <div className="right-0 bottom-0 hidden xl:block xl:w-3/5">
        <img 
          src={info_bg} 
          alt="info_bg" 
          className="h-full w-auto"
        />
      </div>
    </div>
  );
};

export default Infocard;
