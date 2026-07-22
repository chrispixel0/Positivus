function TestimonialCard({ testimonial }) {
  return (
    <div className="w-full shrink-0 px-2 md:px-4">
      <div
        className="
          mx-auto
          w-full
          max-w-[606px]
          rounded-[45px]
          border
          border-primary
          p-12
        "
      >
        <p className="text-base md:text-lg leading-8 text-white">
          "{testimonial.review}"
        </p>
      </div>

      <div className="mt-8 text-center md:text-left md:ml-16">
        <h4 className="text-primary text-xl font-medium">{testimonial.name}</h4>

        <p className="text-white">{testimonial.title}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
