function SectionHeader({ title, description }) {
  return (
    <div className="mb-20 flex items-center gap-10">
      {/* Title */}
      <h2 className="rounded-md bg-primary px-2 py-1 text-[40px] font-medium leading-none text-dark">
        {title}
      </h2>

      {/* Description */}
      <p className="max-w-[580px] text-lg leading-[23px] text-dark">
        {description}
      </p>
    </div>
  );
}

export default SectionHeader;
