import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const AddVoucherModal = ({ open, onClose, voucher, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    location: "",
    date: "",
    url: "",
    from: "",
    to: "",
    offer: "",
    description: "",
  });

  const [companyImage, setCompanyImage] = useState(null);
  const [voucherImage, setVoucherImage] = useState(null);

  useEffect(() => {
    if (voucher) {
      setForm({
        title: voucher.title || "",
        location: voucher.location || "",
        date: voucher.date || "",
        url: voucher.url || "",
        from: voucher.from || "",
        to: voucher.to || "",
        offer: voucher.offer || "",
        description: voucher.description || "",
      });

      setCompanyImage(voucher.companyImage || null);
      setVoucherImage(voucher.image || null);
    } else {
      setForm({
        title: "",
        location: "",
        date: "",
        url: "",
        from: "",
        to: "",
        offer: "",
        description: "",
      });

      setCompanyImage(null);
      setVoucherImage(null);
    }
  }, [voucher]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveVoucher = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-[380px] rounded-[20px] px-5 py-3 scale-[0.90] md:scale-100 origin-top max-h-[90vh] overflow-y-auto">
        <h2 className="text-center text-[18px] font-bold mb-5">
          {voucher ? "Edit Voucher" : "Add Vouchers"}
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-3">
          <label className="cursor-pointer">
            <input
              hidden
              type="file"
              onChange={(e) =>
                setCompanyImage(URL.createObjectURL(e.target.files[0]))
              }
            />

            <div className="h-[92px] rounded-xl bg-[#F8F8F8] flex items-center justify-center overflow-hidden">
              {companyImage ? (
                <img
                  src={companyImage}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#FFA533] text-white flex items-center justify-center">
                  <FaPlus size={12} />
                </div>
              )}
            </div>

            <p className="text-[10px] text-center text-gray-400 mt-1">
              Company image
            </p>
          </label>

          <label className="cursor-pointer">
            <input
              hidden
              type="file"
              onChange={(e) =>
                setVoucherImage(URL.createObjectURL(e.target.files[0]))
              }
            />

            <div className="h-[92px] rounded-xl bg-[#F8F8F8] flex items-center justify-center overflow-hidden">
              {voucherImage ? (
                <img
                  src={voucherImage}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#FFA533] text-white flex items-center justify-center">
                  <FaPlus size={12} />
                </div>
              )}
            </div>

            <p className="text-[10px] text-center text-gray-400 mt-1">
              Voucher image
            </p>
          </label>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-3">
          <div>
            <label className="text-[10px] font-semibold">Title</label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold">Location</label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold">Date</label>

            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold">URL</label>

            <input
              name="url"
              value={form.url}
              onChange={handleChange}
              placeholder="Enter URL"
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>{" "}
          <div>
            <label className="text-[10px] font-semibold">From</label>

            <input
              name="from"
              value={form.from}
              onChange={handleChange}
              placeholder="Start Date"
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>
          <div>
            <label className="text-[10px] font-semibold">To</label>

            <input
              name="to"
              value={form.to}
              onChange={handleChange}
              placeholder="End Date"
              className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
            />
          </div>
        </div>

        <div className="mt-3">
          <label className="text-[10px] font-semibold">Offer</label>

          <input
            name="offer"
            value={form.offer}
            onChange={handleChange}
            placeholder="Enter Offer"
            className="w-full h-[34px] bg-[#F8F8F8] rounded-lg px-3 text-[11px] outline-none mt-1"
          />
        </div>

        <div className="mt-3">
          <label className="text-[10px] font-semibold">Description</label>

          <textarea
            rows={4}
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Enter Description"
            className="w-full h-[82px] bg-[#F8F8F8] rounded-lg px-3 py-2 text-[11px] resize-none outline-none mt-1"
          />
        </div>

        <div className="flex justify-center gap-3 mt-3 mb-1">
          <button
            onClick={onClose}
            className="px-5 h-[34px] rounded-full border border-gray-300 text-gray-600 text-xs hover:bg-gray-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={saveVoucher}
            className="px-8 h-[34px] rounded-full bg-[#FFA533] hover:bg-[#f49714] text-white text-xs font-medium transition"
          >
            {voucher ? "Update Voucher" : "Add Voucher"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddVoucherModal;
