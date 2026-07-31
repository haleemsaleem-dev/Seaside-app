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
      item.location.toLowerCase().includes(search.toLowerCase()),
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
        prev.map((item) => (item.id === newProperty.id ? newProperty : item)),
      );
    } else {
      setData((prev) => [...prev, newProperty]);
    }

    setOpenModal(false);
    setSelectedProperty(null);
  };

  return (
    <div className="p-6 bg-[#43D6CF]">
      <Navbar />

      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold mt-3 text-white underline underline-offset-8">
          Leisure Home
        </h1>

        <LeisureTabs search={search} setSearch={setSearch} onAdd={handleAdd} />
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
