import tedxmeclogo from "../assets/tedxmec_logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-secondary-black1 items-center flex p-4">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <img src={tedxmeclogo} alt="TEDxMEC" width={128} />
      </div>
    </nav>
  );
};

export default Navbar;
