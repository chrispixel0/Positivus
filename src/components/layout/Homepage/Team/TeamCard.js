function TeamCard({ name, pos, desc, img }) {
  return (
    <div className="rounded-[45px] border border-black mt-6 p-[50px] shadow-[0_5px_0_0_#191A23] transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <div></div>
          <div>
            <h2 className="text-[20px] font-medium">{name}</h2>
            <h3 className="text-[18px] font-medium">{pos}</h3>
          </div>
        </div>
      </div>

      {/* Content */}
      <p className="text-lg leading-7 pt-4 border-t border-black">{desc}</p>
    </div>
  );
}

export default TeamCard;
