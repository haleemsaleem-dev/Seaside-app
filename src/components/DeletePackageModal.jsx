import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const DeletePackageModal = ({ open, onClose, onDelete }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
        <div className="flex justify-center pt-8">
          <div className="w-24 h-24 rounded-full bg-red-500 flex items-center justify-center border-[6px] border-white shadow-lg">
            <FaTrashAlt className="text-white text-4xl" />
          </div>
        </div>

        <h2 className="text-center text-2xl font-bold mt-6">Delete Package</h2>

        <p className="text-center text-gray-500 px-8 mt-4 leading-7">
          Are you sure you want to delete this package?
        </p>

        <div className="border-t mt-8"></div>

        <div className="flex justify-center gap-4 py-6">
          <button
            onClick={onClose}
            className="w-36 h-11 rounded-full border border-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="w-36 h-11 rounded-full bg-red-500 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePackageModal;
