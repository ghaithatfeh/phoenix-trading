const Navbar = () => {
  const pathname = window.location.pathname;

  return (
    <div className={"flex items-center pt-6"}>
      {/*  Site Logo  */}
      <div className={"ps-26"}>
        <img src={"/Logo-Phoenix.svg"} width={150} alt={"Site Logo"} />
      </div>
      <nav
        className={
          "mx-auto flex items-center justify-center gap-16 border-b-2 border-white pb-5 text-2xl font-bold text-white"
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
      </nav>

      {pathname != "/" && (
        <div className="flex flex-col space-y-6 self-end">
          <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
          <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
          <div className="from-primary h-2 w-40 rounded-l-full bg-gradient-to-l to-red-600" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
