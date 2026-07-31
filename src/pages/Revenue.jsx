import React, { useState } from "react";
import { FaSearch, FaSlidersH } from "react-icons/fa";

import { LuSettings2 } from "react-icons/lu";

import Navbar from "../components/Navbar";
import RevenueTable from "../components/RevenueTable";
import LogoutModal from "../components/LogoutModal";
import FilterModal from "../components/FilterModal";

const Revenue = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
  });

  return (
    <div className="min-h-screen bg-[#43D8D2] px-6 py-6 lg:px-8 lg:py-8">
      <Navbar onLogout={() => setShowLogout(true)} />

      <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
        <div>
          <h1 className="text-white text-[38px] font-light leading-none">
            Revenue
          </h1>

          <div className="w-[140px] h-[3px] bg-white rounded-full mt-2"></div>
        </div>

        <div className="flex items-center bg-white rounded-xl shadow-md overflow-hidden h-12 w-fit ml-auto">
          <div className="bg-white rounded-2xl px-3 h-12 flex items-center shadow-sm">
            <FaSearch className="text-black text-sm" />

            <input
              type="text"
              placeholder="Logout"
              className="ml-3 w-[220px] outline-none text-sm"
            />

            <button className="ml-3 w-9 h-9 rounded-full bg-[#43D6CF] text-black flex items-center justify-center">
              <LuSettings2 size={18} />
            </button>
          </div>

          <div className="w-px h-7 bg-gray-300"></div>
        </div>
      </div>

      <div className="mt-5">
        <RevenueTable startDate={filters.startDate} endDate={filters.endDate} />
      </div>

      <LogoutModal
        isOpen={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={() => {
          setShowLogout(false);
          window.location.href = "/";
        }}
      />

      <FilterModal
        open={filterOpen}
        onClose={() => setFilterOpen(false)}
        onApply={(startDate, endDate) => {
          setFilters({
            startDate,
            endDate,
          });

          setFilterOpen(false);
        }}
      />
    </div>
  );
};

export default Revenue;
