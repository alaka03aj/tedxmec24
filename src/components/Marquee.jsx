const Marquee = () => {
  return (
    <div className="my-5 lg:my-10 relative flex overflow-x-hidden text-primary-red bg-black font-helvetica border-y-2 border-primary-red">
      <div className="py-2 animate-marquee whitespace-nowrap">
        <span className="text-xl xl:text-4xl mx-4">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4">
          REGISTER NOW
        </span>
      </div>

      <div className="absolute top-0 py-2 animate-marquee2 whitespace-nowrap">
        <span className="text-xl xl:text-4xl mx-4 ">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4 ">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4 ">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4 ">
          REGISTER NOW
        </span>
        <span className="text-xl xl:text-4xl mx-4 ">
          REGISTER NOW
        </span>
      </div>
    </div>
  );
};

export default Marquee;
