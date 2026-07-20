import CTAContent from "./CTAContent";
import CTAImage from "./CTAImage";

function CTA() {
  return (
    <section className="mt-[100px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="relative">
          {/* Card */}

          <div
            className="
              rounded-[45px]
              bg-light
              px-[60px]
              py-[60px]
              min-h-[347px]
            "
          >
            <CTAContent />
          </div>

          {/* Illustration */}

          <CTAImage />
        </div>
      </div>
    </section>
  );
}

export default CTA;
