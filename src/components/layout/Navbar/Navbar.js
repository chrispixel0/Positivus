import logo from "../../../assets/images/Logo.png";
import NavLink from "./NavLink";

function Navbar() {
  const navItems = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

  return (
    <header className="w-full">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-5 py-8">
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
