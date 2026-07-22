import services from "../../../../data/services";
import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="mt-[140px]">
      <div className="mx-auto max-w-[1240px] px-5">
        {/* Heading */}

        <div className="mb-20 flex items-center gap-10">
          <h2 className="rounded-md bg-primary px-2 text-[40px] font-medium">
            Services
          </h2>

          <p className="max-w-[580px] text-lg">
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online.
          </p>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
