import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import leisure from "../data/leisure";

import {
  FaArrowLeft,
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaUsers,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const LeisureDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const property = leisure.find((item) => item.id === Number(id));

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedImage, setSelectedImage] = useState(
    property?.gallery?.[0] || property?.image,
  );

  useEffect(() => {
    if (property?.gallery?.length) {
      setSelectedImage(property.gallery[currentIndex]);
    }
  }, [currentIndex, property]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Property Not Found
      </div>
    );
  }

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === property.gallery.length - 1 ? 0 : prev + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? property.gallery.length - 1 : prev - 1,
    );
  };

  const selectImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="min-h-screen bg-[#43D6CF]">
      <div className="p-6">
        <Navbar />
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-white font-medium mb-6"
        >
          <FaArrowLeft />
          Back
        </button>

        <div className="bg-white rounded-[34px] overflow-hidden shadow-xl">
          <div className="p-8">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-[40px] font-bold text-[#222]">
                    {property.title}
                  </h1>
                </div>

                <div className="flex items-center gap-2 mt-5 text-gray-500">
                  <FaMapMarkerAlt className="text-[#43D6CF]" />
                  <span>{property.location}</span>
                </div>
              </div>
            </div>
            <div className="relative mt-8">
              <img
                src={selectedImage}
                alt=""
                className="w-full h-[550px] rounded-[28px] object-cover"
              />

              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex justify-center items-center"
              >
                <FaChevronLeft size={22} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-xl flex justify-center items-center"
              >
                <FaChevronRight size={22} />
              </button>
            </div>{" "}
            {/* ================= GALLERY ================= */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-6">
              {property.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => selectImage(index)}
                  className={`h-32 w-full rounded-[20px] object-cover cursor-pointer border-[5px] transition-all duration-300 ${
                    currentIndex === index
                      ? "border-[#F7A62C] scale-[1.03]"
                      : "border-transparent hover:scale-[1.03]"
                  }`}
                />
              ))}
            </div>
            <div className="grid lg:grid-cols-2 gap-12 mt-12">
              <div>
                <div className="flex justify-between items-center flex-wrap gap-4">
                  <h2 className="text-[38px] font-bold text-[#222]">
                    {property.title}
                  </h2>

                  <h2 className="text-[38px] font-bold text-[#F7A62C]">
                    {property.price}
                  </h2>
                </div>

                <div className="flex items-center gap-3 mt-6">
                  <FaMapMarkerAlt className="text-[#43D6CF]" />

                  <span className="text-gray-500">{property.location}</span>
                </div>

                <div className="mt-12">
                  <h2 className="text-[30px] font-bold text-[#222] mb-6">
                    Key Features
                  </h2>

                  <div className="flex flex-wrap gap-4">
                    {(property.keyFeatures || []).map((feature, index) => (
                      <div
                        key={index}
                        className="px-5 py-3 rounded-full bg-[#F4F6FA] text-[#444] font-medium hover:bg-[#43D6CF] hover:text-white transition"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                {" "}
                {/*                
                {/* Map */}
                <div className="mt-10">
                  <h2 className="text-[30px] font-bold mb-5">Location</h2>

                  <div className="rounded-[24px] overflow-hidden shadow-md border">
                    <iframe
                      title="map"
                      className="w-full h-[260px]"
                      src="https://maps.google.com/maps?q=london&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    />
                  </div>
                </div>
                <div className="mt-10">
                  <h2 className="text-[30px] font-bold">Description</h2>

                  <p className="text-[#666] leading-8 mt-5">
                    {property.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeisureDetail;
