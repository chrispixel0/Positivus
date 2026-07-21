import linkedin from "../../../../assets/icons/linkedin.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import twitter from "../../../../assets/icons/twitter.svg";

function SocialIcons() {
  return (
    <div className="flex gap-5">
      <img src={linkedin} alt="LinkedIn" className="cursor-pointer" />

      <img src={facebook} alt="Facebook" className="cursor-pointer" />

      <img src={twitter} alt="Twitter" className="cursor-pointer" />
    </div>
  );
}

export default SocialIcons;
