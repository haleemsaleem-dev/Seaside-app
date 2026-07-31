import React from "react";
import { FaEnvelope, FaKey, FaEye, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import beach from "../assets/desert.png"; 
import logo from "../assets/seasideV.png";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <img
        src={beach}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/35"></div>

      <img src={logo} alt="" className="absolute top-7 left-7 w-24 z-20" />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2

        w-[390px]
        rounded-[20px]
        bg-[#46D8D4]/65
        backdrop-blur-md
        border border-white/20
        shadow-2xl

        px-7
        py-8
        z-20
      "
      >
        <h2 className="text-white text-3xl font-semibold text-center mb-8">
          Login
        </h2>

        <p className="text-white text-xs mb-2">Email Address</p>

        <div className="relative mb-5">
          <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-sm" />

          <input
            type="email"
            placeholder="alma.lawson@example.com"
            className="
            w-full
            h-[42px]
            rounded-xl
            border
            border-white/60
            bg-transparent
            pl-11
            pr-10
            text-white
            placeholder:text-white/70
            outline-none
          "
          />

          <FaTimes className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xs cursor-pointer" />
        </div>

        <p className="text-white text-xs mb-2">Password</p>

        <div className="relative mb-8">
          <FaKey className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-sm" />

          <input
            type="password"
            placeholder="*************"
            className="
            w-full
            h-[42px]
            rounded-xl
            border
            border-white/60
            bg-transparent
            pl-11
            pr-10
            text-white
            placeholder:text-white/70
            outline-none
          "
          />

          <FaEye className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm cursor-pointer" />
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="
          block
          mx-auto
          w-[170px]
          h-[42px]
          rounded-full
          bg-[#F59D2A]
          text-white
          font-medium
          hover:bg-orange-500
          transition
        "
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
