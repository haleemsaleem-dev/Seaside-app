import React, { useState } from "react";
import LeisureTabs from "../components/Leisure/LeisureTabs";
import LeisureGrid from "../components/Leisure/LeisureGrid";
import AddLeisureModal from "../components/Leisure/AddLeisureModal";
import leisureData from "../data/leisure";
import Navbar from "../components/Navbar";

const LeisureHome = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(leisureData);

  const [openModal, setOpenModal] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const filteredData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    setSelectedProperty(null);
    setOpenModal(true);
  };

  const handleEdit = (item) => {
    setSelectedProperty(item);
    setOpenModal(true);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSave = (newProperty) => {
    if (selectedProperty) {
      setData((prev) =>
        prev.map((item) => (item.id === newProperty.id ? newProperty : item))
      );
    } else {
      setData((prev) => [...prev, newProperty]);
    }

    setOpenModal(false);
    setSelectedProperty(null);
  };

  return (
    <div className="p-4 sm:p-6 bg-[#43D6CF] min-h-screen">
      <Navbar />

      <div className="mb-8">
        <h1 className="text-white text-3xl sm:text-4xl font-bold underline underline-offset-8 mt-3 mb-6">
          Leisure Home
        </h1>

        <LeisureTabs
          search={search}
          setSearch={setSearch}
          onAdd={handleAdd}
        />
      </div>

      <LeisureGrid
        data={filteredData}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <AddLeisureModal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          setSelectedProperty(null);
        }}
        property={selectedProperty}
        onSave={handleSave}
      />
    </div>
  );
};

export default LeisureHome;