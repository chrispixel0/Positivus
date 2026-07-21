import PaginationDots from "./PaginationDot";

function TestimonialNavigation({ current, total, previous, next }) {
  return (
    <div className="mt-16 flex items-center justify-between">
      <button onClick={previous}>←</button>

      <PaginationDots total={total} current={current} />

      <button onClick={next}>→</button>
    </div>
  );
}

export default TestimonialNavigation;
