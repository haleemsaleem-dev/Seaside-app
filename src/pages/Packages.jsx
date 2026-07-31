import React, { useState } from "react";
import PackageCard from "../components/PackageCard";
import Navbar from "../components/Navbar";
import LogoutModal from "../components/LogoutModal";
import EditPackageModal from "../components/EditPackageModal";
import DeletePackageModal from "../components/DeletePackageModal";

const Packages = () => {
  const [showLogout, setShowLogout] = useState(false);

  const [editOpen, setEditOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const [packages, setPackages] = useState([
    {
      title: "Basic Plan",
      price: "30",
      features: [
        "Unlimited Support",
        "5GB Server Space",
        "2 Users per Project",
      ],
    },

    {
      title: "Standard Plan",
      price: "70",
      features: [
        "Unlimited Support",
        "10GB Server Space",
        "5 Users per Project",
        "Email Integration",
      ],
    },

    {
      title: "Premium Plan",
      price: "150",
      features: [
        "Unlimited Support",
        "25GB Server Space",
        "10 Users per Project",
        "Email Integration",
      ],
    },
  ]);

  const handleEdit = (index) => {
    setSelectedIndex(index);
    setEditOpen(true);
  };

  const handleDelete = (index) => {
    setSelectedIndex(index);
    setDeleteOpen(true);
  };

  const updatePackage = (data) => {
    const updated = [...packages];

    updated[selectedIndex] = {
      title: data.title,
      price: data.price,
      features: data.features,
    };

    setPackages(updated);
  };

  const deletePackage = () => {
    const updated = packages.filter((_, i) => i !== selectedIndex);

    setPackages(updated);

    setDeleteOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#43D8D2] p-6">
      <Navbar onLogout={() => setShowLogout(true)} />
      <h1
        className="
        text-white
        text-3xl
        mt-8
        border-b-2
        border-white
        inline-block
        pb-2
      "
      >
        Packages
      </h1>
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        mt-10
        justify-items-center
      "
      >
        {packages.map((item, index) => (
          <PackageCard
            key={index}
            title={item.title}
            price={item.price}
            features={item.features}
            onEdit={() => handleEdit(index)}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </div>{" "}
      <LogoutModal
        isOpen={showLogout}
        onClose={() => setShowLogout(false)}
        onLogout={() => {
          setShowLogout(false);
          window.location.href = "/";
        }}
      />
      <EditPackageModal
        open={editOpen}
        packageData={selectedIndex !== null ? packages[selectedIndex] : null}
        onClose={() => {
          setEditOpen(false);
          setSelectedIndex(null);
        }}
        onSave={(data) => {
          updatePackage(data);
          setEditOpen(false);
          setSelectedIndex(null);
        }}
      />
      <DeletePackageModal
        open={deleteOpen}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedIndex(null);
        }}
        onDelete={() => {
          deletePackage();
        }}
      />
    </div>
  );
};

export default Packages;
