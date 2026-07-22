import greenArrow from "../../../../assets/icons/arrow-green.svg";

function CaseStudies() {
  return (
    <section className="mt-[140px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-center gap-10 max-md:flex-col">
          <h2 className="rounded-md bg-primary px-2 text-[40px] font-medium">
            Case Studies
          </h2>
          <p className="max-w-[580px] text-lg">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </p>
        </div>
        <div className="bg-black rounded-[45px] max-w-[1240px] md:divide-x divide-white mx-auto mt-20 md:py-[70px] md:px-[60px] max-md:p-2.5 flex majustify-evenly max-md:flex-col max-md:divide-y">
          <div className="text-white text-lg max-md:pl-[10px] pr-[30px] max-md:pr-2.5 max-md:py-[20px]">
            <p>
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <button className="flex items-center mt-5">
              <img src={greenArrow} alt="" className="h-5 w-5" />
              <span className="text-xl ml-2">Learn more</span>
            </button>
          </div>
          <div className="text-white text-lg px-[30px] max-md:px-2.5 max-md:py-[20px]">
            <p>
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <button className="flex items-center mt-5">
              <img src={greenArrow} alt="" className="h-5 w-5" />
              <span className="text-xl ml-2">Learn more</span>
            </button>
          </div>
          <div className="text-white text-lg pl-[30px] max-md:px-2.5 max-md:py-[20px]">
            <p>
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <button className="flex items-center mt-5">
              <img src={greenArrow} alt="" className="h-5 w-5" />
              <span className="text-xl ml-2">Learn more</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
