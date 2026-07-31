import React from "react";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutModal = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div
        className="
        bg-white
        w-[310px]
        rounded-lg
        p-6
        text-center
        shadow-xl
      "
      >
        <div
          className="
          w-[85px]
          h-[85px]
          bg-[#ff4b3e]
          rounded-full
          flex
          items-center
          justify-center
          mx-auto
          -mt-12
          border-4
          border-white
        "
        >
          <FaSignOutAlt className="text-white text-4xl" />
        </div>

        <h2
          className="
          text-xl
          font-semibold
          mt-5
          text-black
        "
        >
          Logout
        </h2>

        <p
          className="
          text-gray-400
          text-sm
          mt-4
          leading-5
        "
        >
          If logged out, you will not be able to receive shift notifications to
          your phone, are you sure you'd like to proceed and continue logging
          out?
        </p>

        <div className="border-t border-gray-200 my-5"></div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={onClose}
            className="
              w-[110px]
              h-[40px]
              rounded-full
              border
              border-gray-200
              text-gray-700
              text-sm
            "
          >
            Cancel
          </button>

          <button
            onClick={onLogout}
            className="
              w-[110px]
              h-[40px]
              rounded-full
              bg-[#ff4b3e]
              text-white
              text-sm
            "
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
