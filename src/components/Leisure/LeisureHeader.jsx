import { FaPlus } from "react-icons/fa";

const LeisureHeader = ({ onAdd }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
      <h1 className="text-white text-[30px] sm:text-[38px] font-light underline underline-offset-8 decoration-2">
        Leisure Home
      </h1>

      <button
        onClick={onAdd}
        className="bg-[#F7A62C] h-12 px-6 rounded-2xl flex items-center justify-center gap-3 text-white w-full sm:w-auto"
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