import logo from "../../../../assets/images/logo-white.png";
import SocialIcons from "./SocialIcons";

function FooterTop() {
  return (
    <div className="flex items-center justify-between flex-wrap max-md:flex-col">
      <img src={logo} alt="Positivus" className="h-8" />

      <ul className="flex md:gap-10 text-white max-md:flex-col max-md:gap-1">
        <li>
          <a href="/">About us</a>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Use Cases</a>
        </li>
        <li>
          <a href="/">Pricing</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
      </ul>

      <SocialIcons />
    </div>
  );
}

export default FooterTop;
