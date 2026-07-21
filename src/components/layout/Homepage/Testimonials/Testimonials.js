import SectionHeader from "../../../ui/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";

function Testimonials() {
  return (
    <section className="mt-[140px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <SectionHeader
          title="Testimonials"
          description="Hear from our satisfied clients about their experience working with us."
        />

        <TestimonialSlider />
      </div>
    </section>
  );
}

export default Testimonials;
