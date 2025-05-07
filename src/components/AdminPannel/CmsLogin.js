"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const CmsLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", response.data.token);
      router.push("/admin/dashboard");
    } catch (err) {
      setError("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="admin-login">
      <div className="login-container">
        <div className="brand-logo flex justify-center">
          <Image
            src="/assets/Fritado-color-logo.webp"
            alt="tap-global360"
            className=" flex justify-center"
            width={150}
            height={65}
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="flex search-field">
            <input
              required
              type="email"
              name="email"
              value={email}
              placeholder="Username"
              onChange={(e) => setEmail(e.target.value)}
              size="lg"
              className="login-ip"
            />
          </div>
          <div className="flex search-field relative">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              size="lg"
              className="relative w-full px-4 py-2 border  rounded-md focus:outline-none  login-ip"
            />
            <span
              onClick={togglePasswordVisibility}
              className="w-full border rounded-md focus:outline-none"
              style={{
                cursor: "pointer",
                position: "absolute",
                right: "10px",

                top: "33%",
              }}
            >
              {!showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button className="primary-button cta-buttons" type="submit">
            {!loading ? "SIGN IN" : "PROCESSING..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CmsLogin;
