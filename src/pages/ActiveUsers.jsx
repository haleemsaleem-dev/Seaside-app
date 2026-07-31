import React from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import Equinox from "../assets/Equinox.png";
import Zakkanoya from "../assets/Zakkanoya.png";
import IKEA from "../assets/IKEA.png";
import VentanaCulinaria from "../assets/VentanaCulinaria.png";
const users = [
  {
    logo: Equinox,
    business: "Equinox",
    email: "guyhawkins2@gmail.com",
    contact: "Esther Howard",
    phone: "(219) 555-0114",
    status: "Active",
  },
  {
    logo: VentanaCulinaria,
    business: "VentanaCulinaria",
    email: "guyhawkins2@gmail.com",
    contact: "Jenny Wilson",
    phone: "(225) 555-0118",
    status: "Active",
  },
  {
    logo: Zakkanoya,
    business: "Zakkanoya",
    email: "guyhawkins2@gmail.com",
    contact: "Jenny Wilson",
    phone: "(225) 555-0118",
    status: "Active",
  },
  {
    logo: IKEA,
    business: "IKEA",
    email: "guyhawkins2@gmail.com",
    contact: "Floyd Miles",
    phone: "(270) 555-0117",
    status: "Active",
  },
];

const ActiveUsers = () => {
  return (
    <div className="min-h-screen bg-[#40D5CF] p-4 md:p-6">
      <Navbar />
      <UserTable users={users} title="Active Users" />
    </div>
  );
};

export default ActiveUsers;
