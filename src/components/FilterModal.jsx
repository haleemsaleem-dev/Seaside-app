import React, { useState } from "react";

const FilterModal = ({ open, onClose, onApply }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <h2 className="text-center text-2xl font-bold mb-6">Filter</h2>

        <div className="space-y-5">
          <div>
            <label className="block mb-2 font-medium">Start Date</label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full h-12 border rounded-xl px-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">End Date</label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full h-12 border rounded-xl px-4 outline-none"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <button onClick={onClose} className="px-8 h-11 border rounded-full">
            Cancel
          </button>

          <button
            onClick={() => {
              onApply(startDate, endDate);
              onClose();
            }}
            className="px-8 h-11 rounded-full bg-[#F4A62A] text-white"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
