const Bento = () => {
  return (
    <>
      <div className="grid w-full h-full grid-cols-3 grid-rows-3 xl:grid-cols-3 xl:grid-rows-3 pt-14 px-4 gap-2 xl:gap-5 xl:pt-24 xl:pb-10 xl:px-16 md:mt-10">
        <div className="py-4 xl:py-8 row-span-1 col-span-3 text-center xl:row-span-1 xl:col-span-2 bg-black border-primary-red border-2 rounded-xl font-helveticaLight text-primary-red flex items-center justify-center text-4xl xl:text-8xl font-semibold hover:bg-primary-red hover:text-black">
          TEDxMEC 2025
        </div>
        
        <div className="row-span-2 col-span-3 bg-black xl:row-span-2 xl:col-span-1 border-primary-red border-2 rounded-xl flex flex-1 bg-[url('/theme.png')] bg-cover bg-center xl:bg-contain xl:bg-bottom xl:bg-no-repeat ">
        </div>

        <div className="text-4xl xl:text-7xl p-4 text-center font-semibold font-helvetica text-primary-red row-span-1 col-span-3 xl:row-span-2 xl:col-span-1 border-primary-red border-2 rounded-lg flex flex-1 bg-black justify-center items-center hover:bg-primary-red hover:text-black">
          MARCH 2, 2025
        </div>
        <div className="text-4xl xl:text-6xl p-4 items-center text-center font-semibold font-helvetica text-primary-red row-span-1 col-span-3 xl:row-span-2 xl:col-span-1 border-primary-red border-2 rounded-xl flex flex-1 bg-black justify-center hover:bg-primary-red hover:text-black">
          <a href="https://maps.app.goo.gl/n9TgH1dCaHxVbCnS9">ATHULYA HALL, INFOPARK</a>
        </div>
        
        <div className="row-span-1 col-span-3 p-4 xl:row-span-1 xl:col-span-1 border-primary-red border-2 rounded-xl bg-primary-red flex justify-center items-center text-4xl text-center font-helvetica text-black font-semibold hover:bg-black hover:text-primary-red">
        <a href="https://bit.ly/TEDxMEC-EarlyBird">GET TICKETS NOW!!</a>
        </div>
      </div>
    </>
  );
};

export default Bento;
