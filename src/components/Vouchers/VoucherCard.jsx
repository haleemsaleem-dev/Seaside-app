import React, { useState, useRef, useEffect } from "react";
import { FaEllipsisV, FaTrash } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { FaPen } from "react-icons/fa";

const VoucherCard = ({ voucher, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
      <div className="relative">
        <img
          src={voucher.image}
          alt={voucher.title}
          className="w-full h-40 md:h-[145px] object-cover"
        />

        <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-white shadow overflow-hidden border">
          <img
            src={voucher.companyImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div ref={menuRef} className="absolute top-3 right-3">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-8 h-8 rounded-full bg-white shadow flex items-center justify-center"
          >
            <BsGridFill size={13} />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white rounded-xl shadow-lg w-44 overflow-hidden z-50">
              <button
                onClick={() => {
                  onEdit(voucher);
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100"
              >
                <FaPen className="text-black" />
                Edit
              </button>

              <button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100">
                <FaTrash className="text-black" />
                Delete
              </button>
            </div>
          )}
        </div>

        <div className="absolute bottom-3 left-3 bg-[#263238] text-white px-3 py-1 rounded-full text-[10px]">
          {voucher.plan}
        </div>

        <div className="absolute bottom-3 right-3 bg-[#FDBA2D] text-black font-medium px-3 py-1 rounded-full text-[10px]">
          {voucher.offer}
        </div>
      </div>

      <div className="p-4">
        <h2 className="font-semibold text-[15px] text-gray-800">
          {voucher.title}
        </h2>

        <p className="text-[11px] text-gray-500 mt-1">{voucher.location}</p>

        <a
          href={voucher.url}
          target="_blank"
          rel="noreferrer"
          className="text-[11px] text-sky-500 mt-1 block truncate"
        >
          {voucher.url}
        </a>
      </div>
    </div>
  );
};

export default VoucherCard;
