import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch, FaChevronDown } from "react-icons/fa";
import { LuSettings2 } from "react-icons/lu";

const VoucherTabs = ({
  selectedStatus,
  setSelectedStatus,
  selectedCategory,
  setSelectedCategory,
}) => {
  const navigate = useNavigate();
  return (
    <div className="mt-6 flex flex-wrap items-center justify-between gap-5">
      <div className="flex items-center gap-5 flex-wrap">
        <div className="bg-white rounded-2xl p-1 flex items-center shadow-sm">
          <button
            onClick={() => setSelectedStatus("Approved")}
            className={`px-6 h-10 rounded-xl text-sm font-medium transition ${
              selectedStatus === "Approved"
                ? "bg-gray-200 text-black"
                : "bg-gray-100 text-black"
            }`}
          >
            Approved Vouchers
          </button>

          <button
            onClick={() => setSelectedStatus("Pending")}
            className={`px-6 h-10 rounded-xl ml-2 text-sm font-medium transition ${
              selectedStatus === "Pending"
                ? "bg-gray-200 text-black"
                : "bg-gray-100 text-black"
            }`}
          >
            Pending Vouchers
          </button>
          <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 text-[11px]  ml-2 font-semibold flex items-center justify-center">
            3
          </span>
        </div>

        <div className="relative">
          <select
            value={selectedCategory}
            onChange={(e) => {
              const value = e.target.value;

              setSelectedCategory(value);

              if (value === "Leisure Home") {
                navigate("/voucher/leisure-home");
              } else if (value === "Home") {
                navigate("/voucher");
              }
            }}
            className="appearance-none bg-white h-12 rounded-2xl px-5 pr-10 text-sm shadow-sm outline-none cursor-pointer min-w-[170px]"
          >
            <option value="Home">Home</option>
            <option value="Days Out">Days Out</option>
            <option value="Attraction">Attraction</option>
            <option value="Dining">Dining</option>
            <option value="Accommodation">Accommodation</option>
            <option value="Shopping">Shopping</option>
            <option value="Holiday">Holiday</option>
            <option value="Leisure Home">Leisure Home</option>
          </select>

          <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 text-xs pointer-events-none" />
        </div>
      </div>

      <div className="bg-white rounded-2xl h-12 flex items-center px-3 shadow-sm w-full lg:w-[350px]">
        <FaSearch className="text-gray-400 text-sm" />

        <input
          type="text"
          placeholder="Searching..."
          className="flex-1 px-3 outline-none text-sm"
        />

        <button className="w-9 h-9 rounded-full bg-[#43D6CF] text-black flex items-center justify-center">
          <LuSettings2 size={13} />
        </button>
      </div>
    </div>
  );
};

export default VoucherTabs;
