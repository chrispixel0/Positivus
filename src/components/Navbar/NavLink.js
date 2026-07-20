function NavLink({ children }) {
  return (
    <a
      href="/"
      className="
        text-xl
        font-normal
        text-black
        transition-colors
        duration-300
        hover:text-lime-500
      "
    >
      {children}
    </a>
  );
}

export default NavLink;
