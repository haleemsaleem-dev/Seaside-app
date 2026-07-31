import React, { useEffect, useState, useRef } from "react";
import { FaPlus, FaTimes, FaTrash, FaChevronDown } from "react-icons/fa";

const AddLeisureModal = ({ open, onClose, property, onSave }) => {
  const [form, setForm] = useState({
    title: "",
    parkName: "",
    location: "",
    area: "",
    propertyType: "",
    multiUnits: "",
    condition: "",
    yearBuilt: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    berth: "",
    description: "",
  });

  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [floorPlans, setFloorPlans] = useState([]);
  const [showFeaturePopup, setShowFeaturePopup] = useState(false);

  const popupRef = useRef(null);

  const allFeatures = [
    "12 Month Park",
    "Number of Bedrooms",
    "Countryside Views",
    "Full Wrap Around Decking",
    "Designated Parking",
    "Double Glazing",
    "En-Suite Shower",
    "Exclusive Development",
    "Fully Furnished",
    "Sea Views",
    "Patio Area",
    "Year Built",
    "Storage Shed",
    "Driveway Parking",
    "Fully Residential",
    "Over 50's Development",
    "Waterside",
    "11 Month Park",
    "Disabled Access",
    "Walking Distance to the Beach",
    "Great Owners Benefits",
    "Seasonal Park",
    "Hot Tub",
    "Dog Friendly Park",
    "Low Energy Costs",
    "Tranquil Park",
    "Family Friendly Site",
    "Gated Community",
    "Amazing Views",
  ];

  const [keyFeatures, setKeyFeatures] = useState([
    "Pet Friendly",
    "Beautiful Wraparound Decking",
    "12 Month Park",
    "Double Glazing",
  ]);

  useEffect(() => {
    if (property) {
      setForm({
        title: property.title || "",
        parkName: property.parkName || "",
        location: property.location || "",
        area: property.area || "",
        propertyType: property.propertyType || "",
        multiUnits: property.multiUnits || "",
        condition: property.condition || "",
        yearBuilt: property.yearBuilt || "",
        price: property.price || "",
        bedrooms: property.bedrooms || "",
        bathrooms: property.bathrooms || "",
        berth: property.berth || "",
        description: property.description || "",
      });

      setCoverImage(property.image || null);
      setGalleryImages(property.gallery || []);
      setFloorPlans(property.floorPlans || []);
      setKeyFeatures(
        property.keyFeatures || [
          "Pet Friendly",
          "Beautiful Wraparound Decking",
          "12 Month Park",
          "Double Glazing",
        ],
      );
    } else {
      setForm({
        title: "",
        parkName: "",
        location: "",
        area: "",
        propertyType: "",
        multiUnits: "",
        condition: "",
        yearBuilt: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        berth: "",
        description: "",
      });

      setCoverImage(null);
      setGalleryImages([]);
      setFloorPlans([]);
      setKeyFeatures([
        "Pet Friendly",
        "Beautiful Wraparound Decking",
        "12 Month Park",
        "Double Glazing",
      ]);
    }
  }, [property]);

  if (!open) return null;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCoverImage = (e) => {
    if (!e.target.files[0]) return;
    setCoverImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleGallery = (e) => {
    const files = [...e.target.files];
    setGalleryImages(files.map((file) => URL.createObjectURL(file)));
  };

  const handleFloorPlans = (e) => {
    const files = [...e.target.files];
    setFloorPlans(files.map((file) => URL.createObjectURL(file)));
  };

  const removeFeature = (index) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    onSave({
      id: property ? property.id : Date.now(),
      ...form,
      image: coverImage,
      gallery: galleryImages,
      floorPlans,
      keyFeatures,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-[500px] rounded-[30px] max-h-[95vh] overflow-y-auto">
        <div className="sticky top-0 z-20 bg-white border-b px-8 py-6 flex items-center justify-between">
          <h2 className="text-[30px] font-bold text-[#202020]">
            {property ? "Edit Leisure" : "Add Leisure"}
          </h2>

          <button
            onClick={onClose}
            className="w-11 h-11 rounded-full bg-[#F4F4F4] hover:bg-[#ECECEC] flex items-center justify-center"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-8">
          {" "}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <label className="cursor-pointer">
                <input hidden type="file" onChange={handleCoverImage} />

                <div className="h-[235px] rounded-[22px] border border-[#E7E7E7] bg-[#FAFAFA] overflow-hidden flex items-center justify-center">
                  {coverImage ? (
                    <img
                      src={coverImage}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-[#F7A62C] text-white flex items-center justify-center">
                      <FaPlus size={20} />
                    </div>
                  )}
                </div>
              </label>
            </div>

            <div>
              <label className="cursor-pointer">
                <input hidden multiple type="file" onChange={handleGallery} />

                <div className="h-[235px] rounded-[22px] border border-[#E7E7E7] bg-[#FAFAFA] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#39C7D9] text-white flex items-center justify-center">
                    <FaPlus size={20} />
                  </div>
                </div>
              </label>
            </div>

            <div>
              <label className="cursor-pointer">
                <input
                  hidden
                  multiple
                  type="file"
                  onChange={handleFloorPlans}
                />

                <div className="h-[235px] rounded-[22px] border border-[#E7E7E7] bg-[#FAFAFA] flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#F7A62C] text-white flex items-center justify-center">
                    <FaPlus size={20} />
                  </div>
                </div>
              </label>
            </div>
          </div>
          {(galleryImages.length > 0 || floorPlans.length > 0) && (
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-6">
              {galleryImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-24 rounded-xl object-cover"
                />
              ))}

              {floorPlans.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  className="w-full h-24 rounded-xl object-cover"
                />
              ))}
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Property Name"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              name="parkName"
              value={form.parkName}
              onChange={handleChange}
              placeholder="Park Name"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              name="area"
              value={form.area}
              onChange={handleChange}
              placeholder="Area"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <select
              name="propertyType"
              value={form.propertyType}
              onChange={handleChange}
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            >
              <option>Property Type</option>
              <option>Lodge</option>
              <option>Villa</option>
              <option>Apartment</option>
            </select>

            <select
              name="multiUnits"
              value={form.multiUnits}
              onChange={handleChange}
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            >
              <option>Multi Units</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select
              name="condition"
              value={form.condition}
              onChange={handleChange}
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            >
              <option>Condition</option>
              <option>New</option>
              <option>Used</option>
            </select>

            <input
              type="number"
              name="yearBuilt"
              value={form.yearBuilt}
              onChange={handleChange}
              placeholder="Year Built"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              type="number"
              name="bedrooms"
              value={form.bedrooms}
              onChange={handleChange}
              placeholder="Bedrooms"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              type="number"
              name="bathrooms"
              value={form.bathrooms}
              onChange={handleChange}
              placeholder="Bathrooms"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />

            <input
              type="number"
              name="berth"
              value={form.berth}
              onChange={handleChange}
              placeholder="Berth"
              className="h-14 rounded-2xl bg-[#F7F7F7] px-5 outline-none"
            />
          </div>{" "}
          <div className="mt-10">
            <label className="block text-[18px] font-semibold mb-4">
              Description
            </label>

            <textarea
              rows={6}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter Description..."
              className="w-full rounded-[18px] border border-[#E6E6E6] bg-white p-5 resize-none outline-none"
            />
          </div>
          <div className="mt-10">
            <label className="block text-[18px] font-semibold mb-4">
              Add Key Feature
            </label>

            <button
              type="button"
              onClick={() => setShowFeaturePopup(true)}
              className="w-[58px] h-[58px] rounded-[16px] bg-[#F7A62C] text-white flex items-center justify-center hover:bg-[#EA981A]"
            >
              <FaPlus size={18} />
            </button>

            {showFeaturePopup && (
              <div className="fixed inset-0 z-[9999] bg-black/40 flex items-center justify-center">
                <div
                  ref={popupRef}
                  className="bg-white w-[340px] h-[520px] rounded-[24px] shadow-2xl overflow-hidden"
                >
                  <div className="flex items-center justify-between px-6 py-5 border-b">
                    <h2 className="text-[20px] font-semibold">Key Features</h2>

                    <button
                      onClick={() => setShowFeaturePopup(false)}
                      className="text-2xl text-gray-500 hover:text-black"
                    >
                      <FaTimes />
                    </button>
                  </div>

                  <div className="h-[500px] overflow-y-auto px-6 py-5">
                    {allFeatures.map((feature) => (
                      <label
                        key={feature}
                        className="flex items-center gap-3 mb-4 cursor-pointer text-[14px] text-[#707070]"
                      >
                        <input
                          type="checkbox"
                          checked={keyFeatures.includes(feature)}
                          onChange={() => {
                            if (keyFeatures.includes(feature)) {
                              setKeyFeatures(
                                keyFeatures.filter((item) => item !== feature),
                              );
                            } else {
                              setKeyFeatures([...keyFeatures, feature]);
                            }
                          }}
                          className="w-4 h-4 accent-[#F7A62C]"
                        />

                        {feature}
                      </label>
                    ))}
                  </div>

                  <div className="border-t p-5 flex justify-end gap-3">
                    <button
                      onClick={() => setShowFeaturePopup(false)}
                      className="px-6 h-11 rounded-full border"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={() => setShowFeaturePopup(false)}
                      className="px-8 h-11 rounded-full bg-[#F7A62C] text-white"
                    >
                      Done
                    </button>
                  </div>
                </div>
              </div>
            )}

            {keyFeatures.length > 0 && (
              <div className="flex flex-wrap gap-3 mt-5">
                {keyFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="bg-[#F4F4F4] rounded-full px-5 py-2 flex items-center gap-3"
                  >
                    <span>{item}</span>

                    <button
                      onClick={() =>
                        setKeyFeatures(
                          keyFeatures.filter((_, i) => i !== index),
                        )
                      }
                      className="text-red-500"
                    >
                      <FaTrash size={12} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-14 flex justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-[260px] h-[58px] rounded-full bg-[#F7A62C] hover:bg-[#EA981A] text-white text-[18px] font-semibold transition-all duration-200"
            >
              {property ? "Update Voucher" : "Add Voucher"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddLeisureModal;
