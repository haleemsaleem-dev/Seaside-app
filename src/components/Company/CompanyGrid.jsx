import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyGrid = ({ companies, onEdit, selectedStatus, selectedPlan }) => {
  return (
    <div className="mt-8">
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6
        "
      >
        {companies.map((company) => (
          <CompanyCard
            key={company.id}
            company={company}
            onEdit={onEdit}
            selectedStatus={selectedStatus}
            selectedPlan={selectedPlan}
          />
        ))}
      </div>
    </div>
  );
};

export default CompanyGrid;
