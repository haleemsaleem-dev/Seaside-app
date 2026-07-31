import React, { useState } from "react";

import Navbar from "../components/Navbar";
import CompanyHeader from "../components/Company/CompanyHeader";
import CompanyTabs from "../components/Company/CompanyTabs";
import CompanyGrid from "../components/Company/CompanyGrid";
import AddCompanyModal from "../components/Company/AddCompanyModal";
import FilterModal from "../components/FilterModal";

import companiesData from "../data/companies";

const Company = () => {
  const [companies, setCompanies] = useState(companiesData);

  const [openModal, setOpenModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const [showFilter, setShowFilter] = useState(false);

  const [selectedStatus, setSelectedStatus] = useState("Approved");
  const [selectedPlan, setSelectedPlan] = useState("Basic Plan");

  const handleAddCompany = () => {
    setSelectedCompany(null);
    setOpenModal(true);
  };

  const handleEditCompany = (company) => {
    setSelectedCompany(company);
    setOpenModal(true);
  };

  const handleSaveCompany = (newCompany) => {
    if (selectedCompany) {
      setCompanies((prev) =>
        prev.map((item) =>
          item.id === selectedCompany.id
            ? {
                ...newCompany,
                id: selectedCompany.id,
              }
            : item
        )
      );
    } else {
      setCompanies((prev) => [...prev, newCompany]);
    }
  };

  return (
    <div className="min-h-screen bg-[#43D6CF]">
      <div className="p-6">
        <Navbar />
      </div>

      <div className="px-8 pb-10">
        <CompanyHeader onAddCompany={handleAddCompany} />

        <CompanyTabs
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          selectedPlan={selectedPlan}
          setSelectedPlan={setSelectedPlan}
          onFilterClick={() => setShowFilter(true)}
        />

        <CompanyGrid
          companies={companies}
          onEdit={handleEditCompany}
          selectedStatus={selectedStatus}
          selectedPlan={selectedPlan}
        />
      </div>

      <FilterModal
        open={showFilter}
        onClose={() => setShowFilter(false)}
        onApply={(filters) => {
          console.log(filters);
        }}
      />

      <AddCompanyModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        company={selectedCompany}
        onSave={handleSaveCompany}
      />
    </div>
  );
};

export default Company;