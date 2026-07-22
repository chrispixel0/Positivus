import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

function Hero() {
  return (
    <section className="mt-[138px]">
      <div className="mx-auto flex max-w-[1240px] items-center md:justify-between max-md:flex-col gap-[108px] px-5">
        <HeroContent />

        <HeroImage />
      </div>
    </section>
  );
}

export default Hero;
