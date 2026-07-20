import { useState } from "react";

function WorkingProcessCard({ number, title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`rounded-[45px] border border-black mt-6 p-[50px] shadow-[0_5px_0_0_#191A23] transition-all duration-300 ${
        isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-6">
          <h2 className="text-[60px] font-medium">{number}</h2>
          <h3 className="text-[30px] font-medium">{title}</h3>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="font-bold w-[58px] h-[58px] rounded-full border border-black bg-[#F3F3F3] text-[36px] flex justify-center items-center"
        >
          {isOpen ? "−" : "+"}
        </button>
      </div>

      {/* Content */}
      {isOpen && (
        <>
          <div className="my-8 border-t border-black"></div>

          <p className="text-lg leading-7">{content}</p>
        </>
      )}
    </div>
  );
}

export default WorkingProcessCard;
