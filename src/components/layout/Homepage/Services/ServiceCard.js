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
        flex
        justify-between
        items-center
        h-[310px]
        transition
        duration-300
        hover:-translate-y-2
      `}
    >
      <div className="flex h-full flex-col justify-between">
        <div>
          <span
            className={`
              ${service.text}
              inline-block
              rounded-md
              px-2
              text-[30px]
              font-medium
            `}
          >
            {service.title}
          </span>
        </div>

        <button
          className={`flex items-center gap-4 ${
            service.dark ? "text-white" : "text-dark"
          }`}
        >
          <ArrowButton dark={service.dark} />

          <span className="text-xl">Learn more</span>
        </button>
      </div>

      <img
        src={service.image}
        alt={service.title}
        className="w-[210px] object-contain max-md:shrink"
      />
    </article>
  );
}

export default ServiceCard;
