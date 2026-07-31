import React from "react";
import VoucherCard from "./VoucherCard";

const VoucherGrid = ({ vouchers, onEdit }) => {
  return (
    <div className="mt-8">
      <div
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-5
    gap-6
  "
      >
        {vouchers.map((voucher) => (
          <VoucherCard key={voucher.id} voucher={voucher} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

export default VoucherGrid;
