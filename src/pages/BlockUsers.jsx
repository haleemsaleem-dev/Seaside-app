import React from "react";
import Navbar from "../components/Navbar";
import UserTable from "../components/UserTable";
import VentanaCulinaria from "../assets/VentanaCulinaria.png";
import Equinox from "../assets/Equinox.png";
import Zakkanoya from "../assets/Zakkanoya.png";
import IKEA from "../assets/IKEA.png";

const users = [
  {
    logo: Equinox,
    business: "Equinox",
    email: "guyhawkins2@gmail.com",
    contact: "Floyd Miles",
    phone: "(270) 555-0117",
    status: "Block",
  },
  {
    logo: VentanaCulinaria,
    business: "Ventana Culinaria",
    email: "guyhawkins2@gmail.com",
    contact: "Cameron Williamson",
    phone: "(303) 555-0105",
    status: "Block",
  },
  {
    logo: Zakkanoya,
    business: "Zakkanoya",
    email: "guyhawkins2@gmail.com",
    contact: "Jenny Wilson",
    phone: "(225) 555-0118",
    status: "Block",
  },
  {
    logo: IKEA,
    business: "IKEA",
    email: "guyhawkins2@gmail.com",
    contact: "Floyd Miles",
    phone: "(270) 555-0117",
    status: "Block",
  },
];

const BlockUsers = () => {
  return (
    <div className="min-h-screen bg-[#40D5CF] p-4 md:p-6">
      <Navbar />
      <UserTable users={users} title="Block Users" />
    </div>
  );
};

export default BlockUsers;
