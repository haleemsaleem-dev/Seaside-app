import React, { useState } from "react";

import Navbar from "../components/Navbar";

import VoucherHeader from "../components/Vouchers/VoucherHeader";
import VoucherTabs from "../components/Vouchers/VoucherTabs";
import VoucherGrid from "../components/Vouchers/VoucherGrid";
import AddVoucherModal from "../components/Vouchers/AddVoucherModal";

import vouchersData from "../data/voucher";

const Voucher = () => {
  const [vouchers, setVouchers] = useState(vouchersData);

  const [openModal, setOpenModal] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState(null);

  const [selectedStatus, setSelectedStatus] = useState("Approved");

  const [selectedCategory, setSelectedCategory] = useState("Home");

  const handleAddVoucher = () => {
    setSelectedVoucher(null);
    setOpenModal(true);
  };

  const handleEditVoucher = (voucher) => {
    setSelectedVoucher(voucher);
    setOpenModal(true);
  };

  const handleSaveVoucher = (newVoucher) => {
    if (selectedVoucher) {
      setVouchers((prev) =>
        prev.map((item) =>
          item.id === selectedVoucher.id
            ? {
                ...newVoucher,
                id: selectedVoucher.id,
              }
            : item,
        ),
      );
    } else {
      setVouchers((prev) => [...prev, newVoucher]);
    }
  };

  const filteredVouchers = vouchers.filter((voucher) => {
    const categoryMatch =
      selectedCategory === "Home"
        ? true
        : voucher.title.toLowerCase().includes(selectedCategory.toLowerCase());

    return categoryMatch;
  });

  return (
    <div className="min-h-screen bg-[#43D6CF]">
      <div className="p-6">
        <Navbar />
      </div>

      <div className="px-8 pb-10">
        <VoucherHeader onAddVoucher={handleAddVoucher} />

        <VoucherTabs
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <VoucherGrid vouchers={filteredVouchers} onEdit={handleEditVoucher} />
      </div>

      <AddVoucherModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        voucher={selectedVoucher}
        onSave={() => {}}
      />
    </div>
  );
};

export default Voucher;
