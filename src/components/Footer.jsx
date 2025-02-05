import tedxmeclogo from "../assets/tedxmec_logo.png";

const Footer = () => {
  return (
    <footer className="bottom-0 bg-secondary-black1">
      <div className="w-full py-10 px-4 md:px-16">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse justify-center"
          >
            <img src={tedxmeclogo} className="h-8" alt="TEDxMEC Logo" />
          </a>
          <ul className="flex flex-row justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 gap-5">
          <li>
              <a href="mailto:reachtedxmec@gmail.com" className="hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/tedxmec/" className="hover:underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/tedxmec/" className="hover:underline">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8" />
        <span className="block text-sm text-secondary-black2 text-center sm:text-left">
          © All Rights Reserved by TEDxMEC.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
