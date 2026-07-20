import logo from "../../../assets/images/Logo.png";
import NavLink from "./NavLink";
import { useEffect, useState } from "react";

function Navbar() {
  const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed py-2 z-10 bg-white ${scrolled ? "top-0" : "top-10"}`}
    >
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Positivus" className="h-9 w-auto" />
        </a>

        {/* Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <NavLink key={item}>{item}</NavLink>
          ))}

          <button
            className="
              rounded-[14px]
              border
              border-black
              px-9
              py-5
              text-lg
              font-medium
              transition
              duration-300
              hover:bg-black
              hover:text-white
            "
          >
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
