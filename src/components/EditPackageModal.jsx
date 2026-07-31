import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const EditPackageModal = ({ open, onClose, packageData, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    secondLine: "",
    descriptions: ["", "", ""],
  });

  useEffect(() => {
    if (packageData) {
      setForm({
        title: packageData.title || "",
        price: packageData.price || "",
        secondLine: packageData.features?.[0] || "",
        descriptions: [
          packageData.features?.[1] || "",
          packageData.features?.[2] || "",
          packageData.features?.[3] || "",
        ],
      });
    }
  }, [packageData]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleDescription = (index, value) => {
    const arr = [...form.descriptions];
    arr[index] = value;

    setForm({
      ...form,
      descriptions: arr,
    });
  };

  const addDescription = () => {
    if (form.descriptions.length < 5) {
      setForm({
        ...form,
        descriptions: [...form.descriptions, ""],
      });
    }
  };

  const handleSubmit = () => {
    onSave({
      title: form.title,
      price: form.price,
      features: [
        form.secondLine,
        ...form.descriptions.filter((item) => item.trim() !== ""),
      ],
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px] flex items-center justify-center p-4">
      <div className="w-full max-w-[450px] rounded-[22px] bg-white shadow-xl px-6 py-6">
        <h2 className="text-[24px] font-bold text-center mb-5">
          Edit Packages
        </h2>

        <div className="mb-3">
          <label className="block text-[13px] font-semibold mb-1">
            Package Name
          </label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Enter Name"
            className="w-full h-[42px] rounded-xl border border-gray-200 px-4 text-sm outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-[13px] font-semibold mb-1">
            Package Price
          </label>

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Enter Price"
            className="w-full h-[42px] rounded-xl border border-gray-200 px-4 text-sm outline-none"
          />
        </div>

        <div className="mb-3">
          <label className="block text-[13px] font-semibold mb-1">
            Second Line
          </label>

          <input
            type="text"
            name="secondLine"
            value={form.secondLine}
            onChange={handleChange}
            placeholder="Enter Second Line"
            className="w-full h-[42px] rounded-xl border border-gray-200 px-4 text-sm outline-none"
          />
        </div>

        <div className="flex items-center justify-between mb-2">
          <label className="text-[13px] font-semibold">Description</label>

          <button
            type="button"
            onClick={addDescription}
            className="flex items-center gap-1 bg-[#FF9D2D] text-white text-[10px] px-2 py-1 rounded-md"
          >
            <FaPlus size={8} />
            Add
          </button>
        </div>

        <div className="space-y-2">
          {form.descriptions.map((item, index) => (
            <input
              key={index}
              type="text"
              placeholder="Enter Description ......."
              value={item}
              onChange={(e) => handleDescription(index, e.target.value)}
              className="w-full h-[42px] rounded-xl border border-gray-200 px-4 text-sm outline-none"
            />
          ))}
        </div>

        <div className="flex justify-center gap-3 mt-6">
          <button
            onClick={onClose}
            className="w-[110px] h-[38px] rounded-full border border-gray-300 bg-white text-sm font-medium"
          >
            Cancel
          </button>

          <button
            onClick={handleSubmit}
            className="w-[140px] h-[38px] rounded-full bg-[#F5D48B] text-sm font-medium"
          >
            Add Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPackageModal;
