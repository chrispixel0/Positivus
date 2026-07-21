import team from "../../../../data/team";
import TeamCard from "./TeamCard";

function Team() {
  return (
    <section className="mt-[140px]">
      <div className="mx-auto max-w-[1240px] px-5">
        <div className="flex items-center gap-10">
          <h2 className="rounded-md bg-primary px-2 text-[40px] font-medium">
            Team
          </h2>
          <p className="max-w-[580px] text-lg">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </p>
        </div>
        <div className="max-w-[1240px] grid grid-cols-3 gap-4 mt-[80px]">
          {team.map((member) => (
            <TeamCard
              name={member.name}
              pos={member.position}
              desc={member.desc}
            />
          ))}
        </div>
        <div className="grid justify-items-end mt-8">
          <button className="rounded-[14px] bg-dark px-[35px] py-5 text-xl text-white">
            See all team
          </button>
        </div>
      </div>
    </section>
  );
}

export default Team;
