import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
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
        <div className={"ps-4 md:ps-26 w-32 md:w-64"}>
          <img src={"/Logo-Phoenix.svg"} alt={"Site Logo"} />
        </div>

        {/* Desktop Navigation */}
        <nav
          className={
            "mx-auto hidden items-center justify-center gap-16 border-b-2 border-white pb-5 text-2xl font-bold text-white md:flex"
          }
        >
          <Link
            to={"/"}
            className={`${window.location.pathname == "/" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Home
          </Link>
          <Link
            to={"/our-products"}
            className={`${window.location.pathname == "/our-products" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Our Products
          </Link>
          <Link
            to={"/contact-us"}
            className={`${window.location.pathname == "/contact-us" ? "!text-primary" : ""} hover:text-red-400`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="ml-auto mr-4 flex flex-col gap-1.5 md:hidden"
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
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Sliding Menu */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-64 bg-dark transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute right-4 top-6 text-white text-3xl"
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
          <Link
            to={"/"}
            onClick={closeMobileMenu}
            className={`text-xl font-bold text-white border-b border-gray-700 pb-3 ${
              window.location.pathname == "/" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Home
          </Link>
          <Link
            to={"/our-products"}
            onClick={closeMobileMenu}
            className={`text-xl font-bold text-white border-b border-gray-700 pb-3 ${
              window.location.pathname == "/our-products" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Our Products
          </Link>
          <Link
            to={"/contact-us"}
            onClick={closeMobileMenu}
            className={`text-xl font-bold text-white border-b border-gray-700 pb-3 ${
              window.location.pathname == "/contact-us" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
