import image from "../../../../assets/images/contact-image.png";

function ContactImage() {
  return (
    <img
      src={image}
      alt="Contact"
      className="
        absolute
        right-[-220px]
        top-1/2
        w-[500px]
        -translate-y-1/2
        object-contain
      "
    />
  );
}

export default ContactImage;
