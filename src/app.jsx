import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import ActiveUsers from "./pages/ActiveUsers";
import BlockUsers from "./pages/BlockUsers";
import Company from "./pages/Company";
import Packages from "./pages/Packages";

import Voucher from "./pages/Voucher";
import Revenue from "./pages/Revenue";
import LeisureHome from "./pages/LeisureHome";
import LeisureDetail from "./pages/LeisureDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/users" element={<Users />} />
        <Route path="/users/active" element={<ActiveUsers />} />
        <Route path="/users/block" element={<BlockUsers />} />

        <Route path="/company" element={<Company />} />

        <Route path="/voucher" element={<Voucher />} />

        <Route path="/packages" element={<Packages />} />
        <Route path="/revenue" element={<Revenue />} />
        <Route path="/voucher/leisure-home" element={<LeisureHome />} />
        <Route path="/voucher/leisure-home/:id" element={<LeisureDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
