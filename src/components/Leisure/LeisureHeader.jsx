import { FaPlus } from "react-icons/fa";

const LeisureHeader = ({ onAdd }) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-white text-[38px] font-light underline underline-offset-8 decoration-2">
        Leisure Home
      </h1>

      <button
        onClick={onAdd}
        className="bg-[#F7A62C] h-12 px-6 rounded-2xl flex items-center gap-3 text-white"
      >
        <span className="w-7 h-7 rounded-full bg-white flex justify-center items-center">
          <FaPlus className="text-[#F7A62C]" />
        </span>
        Add Leisure
      </button>
    </div>
  );
};

export default LeisureHeader;
