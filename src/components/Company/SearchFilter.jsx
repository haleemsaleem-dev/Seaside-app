import React from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

const SearchFilter = () => {
  return (
    <div className="flex items-center justify-between gap-5 mt-6 flex-wrap">
      <div className="relative flex-1 min-w-[280px]">
        <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search company..."
          className="w-full h-14 rounded-xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#40D6D0]"
        />
      </div>

      <button className="h-14 w-14 rounded-xl bg-[#40D6D0] text-white flex items-center justify-center hover:bg-[#32c2bc] transition">
        <FaSlidersH />
      </button>
    </div>
  );
};

export default SearchFilter;
