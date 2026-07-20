function LogoItem({ logo }) {
  return (
    <img
      src={logo.image}
      alt={logo.name}
      className="
        h-12
        object-contain
        grayscale
        opacity-80
        transition
        duration-300
        hover:grayscale-0
        hover:opacity-100
      "
    />
  );
}

export default LogoItem;
