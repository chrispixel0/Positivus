import illustration from "../../../../assets/images/CTA.png";

function CTAImage() {
  return (
    <img
      src={illustration}
      alt=""
      className="
        hidden
        lg:block
        absolute
        right-[75px]
        top-1/2
        w-[360px]
        -translate-y-1/2
        object-contain
      "
    />
  );
}

export default CTAImage;
