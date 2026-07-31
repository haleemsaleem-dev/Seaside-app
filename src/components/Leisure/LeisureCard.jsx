import React, { useState, useRef, useEffect } from "react";
import {
  FaEllipsisV,
  FaEdit,
  FaTrash,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LeisureCard = ({ item, onEdit, onDelete }) => {
  const navigate = useNavigate();

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
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 w-full max-w-[390px] mx-auto">

      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[220px] sm:h-[250px] object-cover"
        />

        <div ref={menuRef} className="absolute top-4 right-4">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
          >
            <FaEllipsisV />
          </button>

          {showMenu && (
            <div className="absolute right-0 mt-2 bg-white rounded-2xl shadow-lg w-44 overflow-hidden z-50">

              <button
                onClick={() => {
                  onEdit(item);
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100"
              >
                <FaEdit className="text-[#43D6CF]" />
                Edit
              </button>

              <button
                onClick={() => {
                  onDelete(item.id);
                  setShowMenu(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-3 hover:bg-gray-100 text-red-500"
              >
                <FaTrash />
                Delete
              </button>

            </div>
          )}
        </div>
      </div>

      <div className="p-5">

        <h2 className="font-bold text-xl text-gray-800">
          {item.title}
        </h2>

        <div className="flex items-center gap-2 text-gray-500 mt-2">
          <FaMapMarkerAlt />
          <span>{item.location}</span>
        </div>

        <div className="mt-6">
          <button
            onClick={() => navigate(`/voucher/leisure-home/${item.id}`)}
            className="bg-[#F7A62C] hover:bg-[#ec9b1f] text-white py-3 w-full rounded-xl transition"
          >
            View property
          </button>
        </div>

      </div>
    </div>
  );
};

export default LeisureCard;