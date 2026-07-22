import logos from "../../../../data/logo";
import LogoItem from "./LogoItem";

function CompanyLogos() {
  return (
    <section className="mt-[70px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="grid place-items-center grid-cols-6 max-lg:grid-cols-3 max-md:grid-cols-2 gap-8">
          {logos.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;
