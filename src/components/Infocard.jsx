import info_bg from "../assets/info_bg.png";

const Infocard = () => {
  return (
    <div className="bg-secondary-black1 rounded-lg w-2/5 p-10 relative overflow-hidden">
      <div className="flex flex-row gap-10">
        <div className="flex flex-col text-white w-4/5">
          <p className="font-helveticaLight text-3xl">WHAT IS</p>
          <p className="font-helveticaCompressed text-4xl">TEDX?</p>
          <p className="font-helvetica text-xl mt-5">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxMEC, where x = independently organized TED event. At our
            TEDxMEC event, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group.
          </p>
        </div>
        <img src={info_bg} alt="" className=" w-auto absolute bottom-0 right-0 h-full object-contain"/>
      </div>
    </div>
  );
};

export default Infocard;
