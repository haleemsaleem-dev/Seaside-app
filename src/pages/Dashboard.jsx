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
    <div className="min-h-screen bg-[#40D5CF] px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
      <Navbar />

      {/* Heading */}
      <div className="mt-6 sm:mt-8 mb-6">
        <h1 className="text-white text-[28px] sm:text-[34px] lg:text-[40px] font-light underline underline-offset-8">
          Dashboard
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-5 sm:p-6"
          >
            <h2 className="text-gray-700 text-lg sm:text-xl lg:text-2xl font-medium">
              {card.title}
            </h2>

            <p className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-black">
              {card.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;