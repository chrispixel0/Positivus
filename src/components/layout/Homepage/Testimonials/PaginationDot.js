function PaginationDots({ total, current }) {
  return (
    <div className="flex gap-4">
      {[...Array(total)].map((_, index) => (
        <div
          key={index}
          className={`
            h-3
            w-3
            rotate-45
            ${current === index ? "bg-primary" : "bg-white"}
          `}
        />
      ))}
    </div>
  );
}

export default PaginationDots;
