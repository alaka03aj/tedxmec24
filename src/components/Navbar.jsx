import { useState } from "react";
import { Link } from "react-router-dom";

import { NavbarDetails } from "../data/NavbarDetails";
import tedxmeclogo from "../assets/tedxmec_logo.png";
import { GoArrowRight } from "react-icons/go";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const showNavbar = () => setToggle(!toggle);

  return (
    <nav className="fixed top-0 w-full bg-secondary-black1 items-center flex p-4 text-secondary-white2 z-50 md:px-12 lg:px-16">
      <div className="flex justify-between items-center w-full flex-wrap md:flex-nowrap">
        <Link to="/"><img src={tedxmeclogo} alt="TEDxMEC" className="w-24 md:w-32 lg:w-36" /></Link>
        <button
          className="flex justify-end md:hidden ring-1 ring-black rounded"
          onClick={showNavbar}
        >
          <CgMenu className="text-xl" />
        </button>
        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col justify-center items-center w-full first:mt-2 md:flex-row md:w-auto md:space-x-10 md:flex`}
        >
          {NavbarDetails.map((details, index) => {
            return (
                <li key={index} className={details.cname}>
                  <Link to={details.href}>{details.title}</Link>
                </li>
            );
          })}
        </ul>
        {/* <button
          className={`${
            toggle ? "flex" : "hidden"
          } text-white mx-auto md:mx-0 md:flex md:mt-0 items-center justify-center font-medium bg-black px-1 p-2 rounded-lg mt-4 w-32 border-solid border-2 border-primary-red hover:bg-primary-red transition-colors duration-300 ease-in-out`}
        >
          <div className="flex justify-center items-center space-x-1">
            <span>Get Tickets </span>
            <GoArrowRight className="text-white text-xl" />
          </div>
        </button> */}
      </div>
    </nav>
  );
};

export default Navbar;
