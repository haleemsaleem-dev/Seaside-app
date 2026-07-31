import React, { useState, useRef, useEffect } from "react";

import {
  FaUsers,
  FaBuilding,
  FaTicketAlt,
  FaCog,
  FaChevronDown,
  FaChevronUp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import { HiHome } from "react-icons/hi";

import { useNavigate, useLocation } from "react-router-dom";

import navlogo from "../assets/navlogo.png";
import logoname from "../assets/logoname.png";

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [userOpen, setUserOpen] = useState(false);
  const [settingOpen, setSettingOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const userRef = useRef(null);
  const settingRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userRef.current && !userRef.current.contains(e.target)) {
        setUserOpen(false);
      }

      if (settingRef.current && !settingRef.current.contains(e.target)) {
        setSettingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const menuClass = (path) =>
    `flex items-center gap-2 px-5 py-3 rounded-xl transition-all duration-300 ${
      location.pathname === path
        ? "bg-[#40D5CF] text-black font-semibold shadow"
        : "text-white hover:bg-white/20"
    }`;

  return (
    <div className="relative z-50 bg-[#FFA733] rounded-2xl px-5 lg:px-8 py-5">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/dashboard")}
        >
          <img src={navlogo} alt="logo" className="w-14 h-14 object-contain" />

          <img src={logoname} alt="name" className="h-10 object-contain" />
        </div>

        <div className="hidden lg:flex items-center gap-6 text-sm mr-36">
          <button
            type="button"
            onClick={() => navigate("/dashboard")}
            className={menuClass("/dashboard")}
          >
            <HiHome />
            Dashboard
          </button>

          <div className="w-full relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setUserOpen(!userOpen);
              }}
              className={`w-full flex items-center justify-between px-5 py-3 rounded-xl transition ${
                location.pathname.includes("/users")
                  ? "bg-[#40D5CF] text-black shadow font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaUsers />
                Users
              </span>

              {userOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>

            {userOpen && (
              <div className="bg-white rounded-xl mt-2 overflow-hidden relative z-[9999]">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/users");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  All Users
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/users/active");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Active Users
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/users/block");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Block Users
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => navigate("/company")}
            className={menuClass("/company")}
          >
            <FaBuilding />
            Company
          </button>

          <button
            type="button"
            onClick={() => navigate("/voucher")}
            className={menuClass("/voucher")}
          >
            <FaTicketAlt />
            Vouchers
          </button>

          <div ref={settingRef} className="relative">
            <button
              type="button"
              onClick={() => setSettingOpen(!settingOpen)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl ${
                location.pathname.includes("/packages") ||
                location.pathname.includes("/revenue")
                  ? "bg-[#40D5CF] text-black shadow font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <FaCog />
              Settings
              {settingOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>

            {settingOpen && (
              <div className="absolute top-14 left-0 bg-white rounded-xl shadow-lg w-48 overflow-hidden z-[100]">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/packages");
                    setSettingOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Packages
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/revenue");
                    setSettingOpen(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Revenue
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSettingOpen(false);
                    onLogout();
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          className="lg:hidden text-white text-2xl"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {mobileMenu && (
        <div className="lg:hidden mt-5 flex flex-col gap-3 text-sm relative z-[100]">
          <button
            type="button"
            onClick={() => {
              navigate("/dashboard");
              setMobileMenu(false);
            }}
            className={menuClass("/dashboard")}
          >
            <HiHome />
            Dashboard
          </button>

         <div ref={userRef} className="relative">
            <button
              type="button"
              onClick={() => setUserOpen(!userOpen)}
              className={`w-full flex justify-between items-center px-5 py-3 rounded-xl ${
                location.pathname.includes("/users")
                  ? "bg-[#40D5CF] text-black shadow font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <span className="flex gap-2 items-center">
                <FaUsers />
                Users
              </span>

              {userOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>

            {userOpen && (
              <div className="relative z-[200] bg-white rounded-xl mt-2 overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/users");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  All Users
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/users/active");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Active Users
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/users/block");
                    setUserOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Block Users
                </button>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              navigate("/company");
              setMobileMenu(false);
            }}
            className={menuClass("/company")}
          >
            <FaBuilding />
            Company
          </button>

          <button
            type="button"
            onClick={() => {
              navigate("/voucher");
              setMobileMenu(false);
            }}
            className={menuClass("/voucher")}
          >
            <FaTicketAlt />
            Vouchers
          </button>
          {/* Mobile Settings */}

         <div ref={settingRef} className="w-full relative">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setSettingOpen((prev) => !prev);
              }}
              className={`w-full flex justify-between items-center px-5 py-3 rounded-xl ${
                location.pathname.includes("/packages") ||
                location.pathname.includes("/revenue")
                  ? "bg-[#40D5CF] text-black shadow font-semibold"
                  : "text-white hover:bg-white/20"
              }`}
            >
              <span className="flex items-center gap-2">
                <FaCog />
                Settings
              </span>

              {settingOpen ? (
                <FaChevronUp size={12} />
              ) : (
                <FaChevronDown size={12} />
              )}
            </button>

            {settingOpen && (
              <div className="relative z-[999] bg-white rounded-xl mt-2 overflow-hidden">
                <button
                  type="button"
                  onClick={() => {
                    navigate("/packages");
                    setSettingOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Packages
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/revenue");
                    setSettingOpen(false);
                    setMobileMenu(false);
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100"
                >
                  Revenue
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setSettingOpen(false);
                    setMobileMenu(false);
                    onLogout();
                  }}
                  className="block w-full text-left px-4 py-3 hover:bg-gray-100 text-red-500"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
