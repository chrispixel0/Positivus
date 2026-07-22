import greenArrow from "../../assets/icons/arrow-green.svg";
import blackArrow from "../../assets/icons/arrow-black.svg";

function ArrowButton({ dark }) {
  return (
    <div
      className={`
        flex h-10 w-10 mt-2 items-center justify-center rounded-full
        ${dark ? "bg-white" : "bg-dark"}
      `}
    >
      <img src={dark ? blackArrow : greenArrow} alt="" className="h-5 w-5" />
    </div>
  );
}

export default ArrowButton;
