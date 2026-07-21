function TestimonialCard({ testimonial }) {
  return (
    <div className="min-w-full">
      <div
        className="
          mx-auto
          w-[606px]
          rounded-[45px]
          border
          border-primary
          p-12
        "
      >
        <p className="text-lg leading-8 text-white">"{testimonial.review}"</p>
      </div>

      <div className="mt-8 ml-16">
        <h4 className="text-primary text-xl font-medium">{testimonial.name}</h4>

        <p className="text-white">{testimonial.title}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
