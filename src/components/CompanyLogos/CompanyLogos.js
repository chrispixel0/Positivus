import logos from "../../data/logo";
import LogoItem from "./LogoItem";

function CompanyLogos() {
  return (
    <section className="mt-[70px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex flex-wrap items-center justify-between gap-8">
          {logos.map((logo) => (
            <LogoItem key={logo.id} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;
