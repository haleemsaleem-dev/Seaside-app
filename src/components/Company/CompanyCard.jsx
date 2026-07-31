import React, { useState, useRef, useEffect } from "react";

import { BsGridFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";

const CompanyCard = ({ company, onEdit, selectedStatus, selectedPlan }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="relative">
        <img
          src={company.image}
          alt={company.name}
          className="w-full h-[170px] object-cover"
        />

        <div
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-medium border ${
            selectedStatus === "Approved"
              ? "bg-[#E9FFB8] text-[#74A900] border-[#B5E34A]"
              : "bg-[#FFE7E7] text-[#FF4B4B] border-red-300"
          }`}
        >
          {selectedStatus}
        </div>

        <div ref={menuRef} className="absolute right-3 top-3">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="bg-white w-9 h-9 rounded-full flex items-center justify-center shadow"
          >
            <BsGridFill size={16} />
          </button>

          {showMenu && (
            <div className="absolute right-0 top-11 bg-white w-52 rounded-xl shadow-xl overflow-hidden z-50">
              <button
                onClick={() => {
                  onEdit(company);
                  setShowMenu(false);
                }}
                className="flex gap-3 items-center w-full px-5 font-bold py-4 hover:bg-gray-100"
              >
                <FaPen className="text-black" />
                Edit
              </button>

              <button className="flex gap-3 items-center w-full font-bold px-5 py-4 hover:bg-gray-100">
                <FaTrash className="text-black " />
                Delete
              </button>

              <button className="flex gap-3 items-center font-bold w-full px-5 py-4 hover:bg-gray-100">
                <FaPlusCircle className="text-black" />
                Add Leisure Home
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-3 right-3 bg-[#263238] text-white px-4 py-2 rounded-full text-xs">
          {selectedPlan}
        </div>
      </div>

      <div className="px-4 py-3">
        <h2 className="text-lg font-semibold text-[#222]">{company.name}</h2>

        <p className="text-sm text-gray-400 mt-1">{company.email}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
