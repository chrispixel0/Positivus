import { useState } from "react";
import testimonials from "../../../../data/testimonials";
import TestimonialCard from "./TestimonialCard";
import TestimonialNavigation from "./TestimonialNavigation";

function TestimonialSlider() {
  const [current, setCurrent] = useState(0);

  const previous = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="mt-20 rounded-[45px] bg-dark px-4 py-10 md:px-10 md:py-16 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {testimonials.map((item) => (
          <TestimonialCard key={item.id} testimonial={item} />
        ))}
      </div>

      <TestimonialNavigation
        current={current}
        total={testimonials.length}
        previous={previous}
        next={next}
      />
    </div>
  );
}

export default TestimonialSlider;
