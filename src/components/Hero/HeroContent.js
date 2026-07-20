function HeroContent() {
  return (
    <div className="flex max-w-[531px] flex-col">
      <h1 className="text-[60px] font-medium leading-[76px] text-dark">
        Navigating the digital landscape for success
      </h1>

      <p className="mt-[35px] text-[20px] leading-[28px] text-dark">
        Our digital marketing agency helps businesses grow and succeed online
        through a range of services including SEO, PPC, social media marketing,
        and content creation.
      </p>

      <button
        className="
          mt-[35px]
          w-fit
          rounded-[14px]
          bg-dark
          px-[35px]
          py-[20px]
          text-[20px]
          text-white
          transition
          hover:opacity-90
        "
      >
        Book a consultation
      </button>
    </div>
  );
}

export default HeroContent;
