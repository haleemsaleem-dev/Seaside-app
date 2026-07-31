import React from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const cards = [
    { title: "Total User", value: "20" },
    { title: "Active User", value: "12" },
    { title: "Block User", value: "08" },

    { title: "Total Companies", value: "20" },
    { title: "Approved Companies", value: "10" },
    { title: "Pending Companies", value: "10" },

    { title: "Total Vouchers", value: "12" },
    { title: "Approved Vouchers", value: "15" },
    { title: "Pending Vouchers", value: "20" },
  ];

  return (
    <div className="min-h-screen bg-[#40D5CF] p-4 sm:p-5 lg:p-6">
      <Navbar />

      <h1 className="text-white text-2xl sm:text-3xl underline mt-6 sm:mt-8">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6 sm:mt-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-2xl shadow p-5 sm:p-6">
            <h2 className="text-gray-700 text-xl sm:text-2xl">{card.title}</h2>

            <p className="text-3xl sm:text-4xl font-bold mt-2">{card.value}</p>
          </div>
        ))}{" "}
      </div>
    </div>
  );
};

export default Dashboard;
