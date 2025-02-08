import { TeamDetails } from "../data/TeamDetails";
const Team = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full px-12 sm:px-16 md:py-10 md:px-16 justify-between">
        <div className=" text-secondary-white2 pt-20 pb-10 md:py-20">
          <h1 className="font-bold font-helvetica text-[36px] text-center sm:text-5xl">
            Meet The Team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TeamDetails.map((member) => (
            <div key={member.name} className="flex flex-col rounded-2xl overflow-hidden border border-primary-deepRed">
              <div>
                <img
                  src={member.img}
                  alt={member.name}
                  className=""
                />
                <div className=" bg-black text-secondary-white2 text-center py-2 font-helvetica">
                  <h1 className="font-bold text-lg text-primary-red">{member.name.toUpperCase()}</h1>
                  <p className="text-xs">{member.role.toUpperCase()}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
