import React, { useEffect, useState } from "react";
import { FaPlus, FaChevronDown } from "react-icons/fa";

const AddCompanyModal = ({ open, onClose, company, onSave }) => {
  const [form, setForm] = useState({
    businessName: "",
    contactName: "",
    phone: "",
    email: "",
    location: "",
    payment: "Basic",
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (company) {
      setForm({
        businessName: company.name || "",
        contactName: company.contactName || "",
        phone: company.phone || "",
        email: company.email || "",
        location: company.location || "",
        payment: company.plan || "Basic",
      });

      setImage(company.image);
    } else {
      setForm({
        businessName: "",
        contactName: "",
        phone: "",
        email: "",
        location: "",
        payment: "Basic",
      });

      setImage(null);
    }
  }, [company]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveCompany = () => {
    const data = {
      id: Date.now(),
      name: form.businessName,
      email: form.email,
      plan: form.payment,
      image: image,
      status: "Active",
      contactName: form.contactName,
      phone: form.phone,
      location: form.location,
    };

    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-100 w-[480px] rounded-[30px] p-6">
        <h2 className="text-center text-2xl font-bold mb-5">
          {company ? "Edit Company" : "Add Company"}
        </h2>

        <label className="cursor-pointer">
          <input
            type="file"
            hidden
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />

          <div className="w-28 h-28 mx-auto rounded-xl bg-white flex items-center justify-center overflow-hidden">
            {image ? (
              <img src={image} className="w-full h-full object-cover" />
            ) : (
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white text-xl">
                <FaPlus />
              </div>
            )}
          </div>
        </label>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="text-xs font-semibold">Business Name</label>

            <input
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              placeholder="Enter title"
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold">Contact Name</label>

            <input
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              placeholder="Enter Contact Name"
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold">Phone Number</label>

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter data"
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold">Email Address</label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Email"
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 outline-none"
            />
          </div>

          <div>
            <label className="text-xs font-semibold">Location</label>

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter location"
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 outline-none"
            />
          </div>

          <div className="relative">
            <label className="text-xs font-semibold">Payment Type</label>

            <select
              name="payment"
              value={form.payment}
              onChange={handleChange}
              className="w-full h-12 border rounded-xl px-4 text-sm mt-1 appearance-none outline-none"
            >
              <option>Basic</option>
              <option>Standard</option>
              <option>Premium</option>
            </select>

            <FaChevronDown className="absolute right-4 top-10 text-gray-400 text-xs" />
          </div>
        </div>

        <button
          onClick={saveCompany}
          className="block mx-auto mt-6 bg-orange-400 hover:bg-orange-500 text-white px-10 py-3 rounded-full font-semibold"
        >
          Add Company
        </button>
      </div>
    </div>
  );
};

export default AddCompanyModal;
