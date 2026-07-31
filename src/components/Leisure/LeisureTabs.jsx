import React from "react";
import { FaSearch, FaChevronDown, FaPlus } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const LeisureTabs = ({ search, setSearch, onAdd }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 w-full">

      {/* Sort */}
      <div className="relative w-full lg:w-[170px]">
        <select
          className="
            appearance-none
            bg-white
            h-12
            rounded-2xl
            px-5
            pr-10
            text-sm
            shadow-sm
            outline-none
            cursor-pointer
            w-full
          "
        >
          <option>Leisure Home</option>
          <option>Oldest</option>
        </select>

        <FaChevronDown
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-500
            text-xs
            pointer-events-none
          "
        />
      </div>

      {/* Search */}
      <div
        className="
          bg-white
          rounded-2xl
          h-12
          flex
          items-center
          px-3
          shadow-sm
          w-full
          lg:flex-1
        "
      >
        <FaSearch className="text-gray-400 text-sm shrink-0" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Searching..."
          className="flex-1 px-3 outline-none text-sm min-w-0"
        />

        <button
          className="
            w-9
            h-9
            rounded-full
            bg-[#43D6CF]
            text-white
            flex
            items-center
            justify-center
            shrink-0
          "
        >
          <LuSettings2 size={13} />
        </button>
      </div>

      {/* Add Button */}
      <button
        onClick={onAdd}
        className="
          bg-[#F7A62C]
          hover:bg-[#ec9b1f]
          text-white
          h-12
          rounded-2xl
          flex
          items-center
          justify-center
          gap-2
          w-full
          lg:w-[180px]
          px-6
        "
      >
        <span
          className="
            w-7
            h-7
            rounded-full
            bg-white
            flex
            items-center
            justify-center
          "
        >
          <FaPlus className="text-[#F7A62C] text-xs" />
        </span>

        <span>Add Leisure</span>
      </button>

    </div>
  );
};

export default LeisureTabs;