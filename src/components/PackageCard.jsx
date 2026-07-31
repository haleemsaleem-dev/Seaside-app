import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

const PackageCard = ({ title, price, features, onEdit, onDelete }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[320px] pt-20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <div
          className="
      w-[210px]
      h-[150px]
      bg-[#F7A62C]
      rounded-xl
      shadow-lg
      flex
      flex-col
      items-center
      justify-center
      text-white
      px-4
    "
        >
          <h3 className="text-[20px] font-semibold">{title}</h3>

          <div className="mt-2 flex items-end">
            <span className="text-[42px] font-bold leading-none">£{price}</span>

            <span className="text-[15px] ml-1 mb-1">+ vat</span>
          </div>

          <p className="text-[18px] mt-1 font-medium">Per Month</p>

          <p className="text-[8px] mt-2 text-center leading-3">
            (Based on 12 month contract)
          </p>
        </div>
      </div>

      <div className="relative rounded-2xl bg-white shadow-lg px-6 pt-28 pb-8 min-h-[300px]">
        <div className="absolute top-4 right-4" ref={menuRef}>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200"
          >
            <BsGridFill className="text-gray-500" />
          </button>

          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-white shadow-xl overflow-hidden z-30">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onEdit && onEdit();
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100"
              >
                <FaPen className="text-black" />
                Edit
              </button>

              <button
                onClick={() => {
                  setMenuOpen(false);
                  onDelete && onDelete();
                }}
                className="flex w-full items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50"
              >
                <FaTrash className="text-black" />
                Delete
              </button>
            </div>
          )}
        </div>

        <ul className="space-y-4 text-gray-600">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="mt-[2px] text-lg leading-none">•</span>
              <span className="text-[16px]">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PackageCard;
