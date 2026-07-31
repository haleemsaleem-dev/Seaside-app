import React, { useState } from "react";

const FilterModal = ({ open, onClose, onApply }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
        <h2 className="text-center text-xl sm:text-2xl font-bold mb-5 sm:mb-6">
          Filter
        </h2>

        <div className="space-y-4 sm:space-y-5">
          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              Start Date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full h-11 sm:h-12 border rounded-xl px-3 sm:px-4 outline-none text-sm sm:text-base"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-sm sm:text-base">
              End Date
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full h-11 sm:h-12 border rounded-xl px-3 sm:px-4 outline-none text-sm sm:text-base"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button
            onClick={onClose}
            className="px-5 sm:px-8 h-10 sm:h-11 border rounded-full text-sm sm:text-base"
          >
            Cancel
          </button>

          <button
            onClick={() => {
              onApply(startDate, endDate);
              onClose();
            }}
            className="px-5 sm:px-8 h-10 sm:h-11 rounded-full bg-[#F4A62A] text-white text-sm sm:text-base"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
