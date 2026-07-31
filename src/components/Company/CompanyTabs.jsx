import React from "react";
import { FaSearch } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const CompanyTabs = ({
  selectedStatus,
  setSelectedStatus,
  selectedPlan,
  setSelectedPlan,
  onFilterClick,
}) => {
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
      <div className="bg-white rounded-2xl p-1 flex items-center shadow-sm">
        <button
          onClick={() => setSelectedStatus("Approved")}
          className={`px-6 h-10 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
            selectedStatus === "Approved"
              ? "bg-gray-200 text-black"
              : "bg-gray-100 text-black"
          }`}
        >
          <span>Approved Companies</span>
        </button>
        <button
          onClick={() => setSelectedStatus("Disapproved")}
          className={`px-6 h-10 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
            selectedStatus === "Disapproved"
              ? "bg-gray-200 text-black"
              : "bg-gray-100 text-black"
          }`}
        >
          <span>Pending Companies</span>

          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-[11px] font-semibold flex items-center justify-center">
            3
          </span>
        </button>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="bg-white rounded-2xl p-1 flex items-center shadow-sm">
          {["Basic", "Standard", "Premium"].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedPlan(item)}
              className={`px-5 h-10 rounded-xl text-sm font-medium transition-all ${
                selectedPlan === item
                  ? "bg-[#43D6CF] text-white"
                  : "text-gray-700"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl px-3 h-12 flex items-center shadow-sm">
          <FaSearch className="text-black text-sm" />
          <input
            type="text"
            placeholder="Searching..."
            className="ml-3 w-[220px] outline-none text-sm"
          />
          <button
            onClick={onFilterClick}
            className="ml-3 w-9 h-9 rounded-full bg-[#43D6CF] text-black flex items-center justify-center hover:bg-[#37c4bd] transition"
          >
            <LuSettings2 size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyTabs;
