import React from "react";
import { FaPlus } from "react-icons/fa";

const VoucherHeader = ({ onAddVoucher }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-5">
      <div>
        <h1 className="text-white text-3xl md:text-[40px]  leading-none">
          All Vouchers
        </h1>

        <div className="w-[230px] h-[2px] bg-white rounded-full mt-3"></div>
      </div>

      <button
        onClick={onAddVoucher}
        className="h-[48px] px-6 rounded-2xl bg-[#F7A62C] hover:bg-[#ef9912] text-white flex items-center gap-3 transition"
      >
        <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
          <FaPlus className="text-[#F7A62C] text-xs" />
        </span>

        <span className="text-sm font-medium">Add Voucher</span>
      </button>
    </div>
  );
};

export default VoucherHeader;
