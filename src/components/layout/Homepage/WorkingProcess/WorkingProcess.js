import processes from "../../../../data/process";
import WorkingProcessCard from "./ProcessCard";

function WorkingProcess() {
  return (
    <section className="mt-[140px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-center gap-10">
          <h2 className="rounded-md bg-primary px-2 text-[40px] font-medium">
            Our Working Process
          </h2>
          <p className="max-w-[580px] text-lg">
            Step-by-Step Guide to Achieving Your Business Goals
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto mt-20 py-[41px]">
          {processes.map((process, index) => (
            <WorkingProcessCard
              number={process.id}
              title={process.title}
              content={process.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkingProcess;
