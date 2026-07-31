import React from "react";
import { FaPlus } from "react-icons/fa";

const CompanyHeader = ({ onAddCompany }) => {
  return (
    <div className="flex items-end justify-between mb-5">
      <div>
        <h1 className="text-white text-[40px] leading-none">Companies</h1>

        <div className="w-[200px] h-[2px] bg-white rounded-full mt-3"></div>
      </div>

      <button
        onClick={onAddCompany}
        className="
          ml-8
          h-[48px]
          px-6
          rounded-xl
          bg-[#F7A62C]
          hover:bg-[#ef9912]
          text-white
          flex
          items-center
          gap-3
          shadow-md
          transition
        "
      >
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <FaPlus className="text-[#F7A62C] text-xs" />
        </span>

        <span className="text-sm font-medium">Add Company</span>
      </button>
    </div>
  );
};

export default CompanyHeader;
