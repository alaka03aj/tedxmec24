import { TeamDetails } from "../data/TeamDetails";
const Team = () => {
  return (
    <div className="scroll-smooth overflow-hidden">
      <div className="w-full px-12 sm:px-16 md:pt-10 md:pb-10 md:px-16 justify-between">
        <div className=" text-secondary-white2 py-[5rem]">
          <h1 className="font-bold font-helvetica text-[36px] text-center sm:text-5xl">
            Meet The Team
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TeamDetails.map((member) => (
            <div
              key={member.name}
              className="relative overflow-hidden rounded-xl aspect-[999/1000]"
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-red/90 z-10" />
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 font-helvetica">
                <h3 className="text-white text-2xl font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary-white2 leading-tight">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
