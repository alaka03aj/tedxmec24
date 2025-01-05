import tedxmeclogo from "../assets/tedxmec_logo.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-secondary-black1">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href=""
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={tedxmeclogo} className="h-8" alt="TEDxMEC Logo" />
          </a>
          <ul className="flex flex-row justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-5">
            <li>
              <a href="#" className="hover:underline">
                <AiFillInstagram className="text-2xl" />
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                <TiSocialLinkedin className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8" />
        <span className="block text-sm text-secondary-black2 sm:text-center">
          © All Rights Reserved by TEDxMEC.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
