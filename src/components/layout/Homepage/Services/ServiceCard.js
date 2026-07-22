import ArrowButton from "../../../ui/ArrowButton";

function ServiceCard({ service }) {
  return (
    <article
      className={`
        ${service.background}
        rounded-[45px]
        border
        border-black
        shadow-[0_5px_0_0_#191A23]
        p-[50px]
        max-md:p-5
        flex
        justify-between
        items-center
        min-h-[310px]
        transition
        duration-300
        hover:-translate-y-2
        max-md:flex-col
      `}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="max-md:items-center">
          <span
            className={`${service.text} rounded-md px-2 text-[30px] font-medium`}
          >
            {service.title}
          </span>
        </div>
        <button
          className={`flex items-center gap-4 ${service.dark ? "text-white" : "text-dark"}`}
        >
          <ArrowButton dark={service.dark} />
          <span className="text-xl">Learn more</span>
        </button>
      </div>
      <div className="flex justify-center items-center w-full md:w-[210px]">
        <img
          src={service.image}
          alt={service.title}
          className="object-contain"
        />
      </div>
    </article>
  );
}

export default ServiceCard;
