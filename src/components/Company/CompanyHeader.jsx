import React from "react";
import { FaPlus } from "react-icons/fa";

const CompanyHeader = ({ onAddCompany }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-5">
      
      <div>
        <h1 className="text-white text-[40px] leading-none">
          Companies
        </h1>

        <div className="w-[200px] h-[2px] bg-white rounded-full mt-3"></div>
      </div>


      <button
        onClick={onAddCompany}
        className="
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
          w-fit
          md:ml-8
        "
      >
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <FaPlus className="text-[#F7A62C] text-xs" />
        </span>

        <span className="text-sm font-medium">
          Add Company
        </span>
      </button>

    </div>
  );
};

export default CompanyHeader;