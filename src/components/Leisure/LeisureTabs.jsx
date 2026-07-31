import React from "react";
import { FaSearch, FaChevronDown, FaPlus } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const LeisureTabs = ({ search, setSearch, onAdd }) => {
  return (
    <div className="flex items-center gap-4">
      {/* Sort */}
      <div className="relative mt-3">
        <select className="appearance-none bg-white h-12 rounded-2xl px-5 pr-10 text-sm shadow-sm outline-none cursor-pointer">
          <option>Leisure Home</option>
          <option>Oldest</option>
        </select>

        <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
      </div>

      <div className="bg-white rounded-2xl h-12 flex mt-3 items-center px-3 shadow-sm w-[320px]">
        <FaSearch className="text-gray-400 text-sm" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Searching..."
          className="flex-1 px-3 outline-none text-sm"
        />

        <button className="w-9 h-9 rounded-full bg-[#43D6CF] text-white flex items-center justify-center">
          <LuSettings2 size={13} />
        </button>
      </div>

      <button
        onClick={onAdd}
        className="bg-[#F7A62C] mt-2 hover:bg-[#ec9b1f] text-white h-12 px-6 rounded-2xl flex items-center gap-2"
      >
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <FaPlus className="text-[#F7A62C] text-xs" />
        </span>

        <span>Add Leisure</span>
      </button>
    </div>
  );
};

export default LeisureTabs;
