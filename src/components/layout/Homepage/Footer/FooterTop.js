import logo from "../../../../assets/images/logo-white.png";
import SocialIcons from "./SocialIcons";

function FooterTop() {
  return (
    <div className="flex items-center justify-between">
      <img src={logo} alt="Positivus" className="h-8" />

      <ul className="flex gap-10 text-white">
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
