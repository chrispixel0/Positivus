import heroImage from "../../../../assets/images/Illustration.png";

function HeroImage() {
  return (
    <div className="flex justify-end">
      <img
        src={heroImage}
        alt="Digital Marketing"
        className="w-[600px] object-contain hidden lg:block"
      />
    </div>
  );
}

export default HeroImage;
