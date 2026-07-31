import React from "react";
import LeisureCard from "./LeisureCard";

const LeisureGrid = ({ data, onEdit, onDelete }) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6
      "
    >
      {data.map((item) => (
        <LeisureCard
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default LeisureGrid;
