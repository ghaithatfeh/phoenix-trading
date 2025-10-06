import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { LOCALE_STORAGE_KEY } from "../providers/localiztion-provider";
import { Link } from "react-router";

const Navbar = () => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  const pathname = window.location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLangDropdown = () => {
    setIsLangDropdownOpen(!isLangDropdownOpen);
  };

  const handleLanguageChange = (locale: string) => {
    changeLanguage(locale);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    setIsLangDropdownOpen(false);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLangDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <Link
            to={"/"}
            className={`${window.location.pathname == "/" ? "!text-primary" : ""} hover:text-red-400`}
          >
            {t("home")}
          </Link>
          <Link
            to={"/our-products"}
            className={`${window.location.pathname == "/our-products" ? "!text-primary" : ""} hover:text-red-400`}
          >
            {t("ourProductsNav")}
          </Link>
          <Link
            to={"/contact-us"}
            className={`${window.location.pathname == "/contact-us" ? "!text-primary" : ""} hover:text-red-400`}
          >
            {t("contactUsNav")}
          </Link>

          <div className="relative" ref={langDropdownRef}>
            <button
              onClick={toggleLangDropdown}
              className="flex cursor-pointer items-center hover:text-red-400"
            >
              {language === "en"
                ? "English"
                : language === "ar"
                  ? "العربية"
                  : "Français"}
              <svg
                className={`ml-1 h-4 w-4 transition-transform ${isLangDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>

            {isLangDropdownOpen && (
              <div className="bg-dark absolute right-0 z-50 mt-2 w-40 rounded-md shadow-lg">
                <div className="py-1">
                  <button
                    onClick={() => handleLanguageChange("en")}
                    className={`block w-full px-4 py-2 text-left text-white hover:bg-gray-700 ${
                      language === "en" ? "bg-gray-700" : ""
                    }`}
                  >
                    {t("english")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("ar")}
                    className={`block w-full px-4 py-2 text-left text-white hover:bg-gray-700 ${
                      language === "ar" ? "bg-gray-700" : ""
                    }`}
                  >
                    {t("arabic")}
                  </button>
                  <button
                    onClick={() => handleLanguageChange("fr")}
                    className={`block w-full px-4 py-2 text-left text-white hover:bg-gray-700 ${
                      language === "fr" ? "bg-gray-700" : ""
                    }`}
                  >
                    {t("french")}
                  </button>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          onClick={toggleMobileMenu}
          className="ms-auto me-4 flex flex-col gap-1.5 md:hidden"
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
        className={`bg-dark fixed top-0 ${language === "ar" ? "right-0" : "left-0"} z-50 h-full w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "translate-x-0"
            : language === "ar"
              ? "translate-x-full"
              : "-translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={closeMobileMenu}
          className="absolute end-4 top-6 text-3xl text-white"
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Logo in Mobile Menu */}
        <div className="flex w-full items-center justify-start px-6 pt-6 pb-8">
          <img src={"/Logo-Phoenix.svg"} alt={"Site Logo"} className="w-20" />
        </div>

        {/* Mobile Navigation Links */}
        <nav className="flex flex-col gap-6 px-6">
          <Link
            to={"/"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            {t("home")}
          </Link>
          <Link
            to={"/our-products"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/our-products" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            {t("ourProductsNav")}
          </Link>
          <Link
            to={"/contact-us"}
            onClick={closeMobileMenu}
            className={`border-b border-gray-700 pb-3 text-xl font-bold text-white ${
              window.location.pathname == "/contact-us" ? "!text-primary" : ""
            } hover:text-red-400`}
          >
            {t("contactUsNav")}
          </Link>
          <div className="border-b border-gray-700 pb-3">
            <button
              onClick={() => handleLanguageChange("en")}
              className={`block w-full py-2 text-left text-xl font-bold ${
                language === "en" ? "text-primary" : "text-white"
              } hover:text-red-400`}
            >
              {t("english")}
            </button>
            <button
              onClick={() => handleLanguageChange("ar")}
              className={`block w-full py-2 text-left text-xl font-bold ${
                language === "ar" ? "text-primary" : "text-white"
              } hover:text-red-400`}
            >
              {t("arabic")}
            </button>
            <button
              onClick={() => handleLanguageChange("fr")}
              className={`block w-full py-2 text-left text-xl font-bold ${
                language === "fr" ? "text-primary" : "text-white"
              } hover:text-red-400`}
            >
              {t("french")}
            </button>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
