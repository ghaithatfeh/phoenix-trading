import { useState } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const pathname = window.location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <div className={"flex items-center pt-6"}>
        {/*  Site Logo  */}
        <div className={"w-32 ps-4 md:w-64 md:ps-26"}>
          <img src={"/Logo-Phoenix.svg"} alt={"Site Logo"} />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={
            "mx-auto hidden items-center justify-center gap-16 border-b-2 border-white pb-5 text-2xl font-bold text-white md:flex"
          }
        >
          <a
            href={"/"}
            className={`${window.location.pathname == "/" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Home
          </a>
          <a
            href={"/our-products"}
            className={`${window.location.pathname == "/our-products" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Our Products
          </a>
          <a
            href={"/contact-us"}
            className={`${window.location.pathname == "/contact-us" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Contact Us
          </a>

          <a
            className={`hover:text-red-400`}
            onClick={() => {
              changeLanguage(language == "en" ? "ar" : "en");
            }}
          >
            {language == "en" ? "AR" : "انكليزي"}
          </a>
        </nav>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="mr-4 ml-auto flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className="h-0.5 w-8 bg-white transition-all"></span>
          <span className="h-0.5 w-8 bg-white transition-all"></span>
          <span className="h-0.5 w-8 bg-white transition-all"></span>
        </button>

        {pathname != "/" && (
          <div className="hidden flex-col space-y-6 self-end md:flex">
            <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
            <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
            <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-40 bg-black md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`bg-dark fixed top-0 left-0 z-50 h-full w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute top-6 right-4 text-3xl text-white"
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Logo in Mobile Menu */}
        <div className="px-6 pt-6 pb-8">
          <img src={"/Logo-Phoenix.svg"} width={120} alt={"Site Logo"} />
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-6 px-6">
          <a
            href={"/"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Home
          </a>
          <a
            href={"/our-products"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/our-products" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Our Products
          </a>
          <a
            href={"/contact-us"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/contact-us" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Contact Us
          </a>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
