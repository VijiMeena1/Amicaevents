// src/pages/Root.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar"; // ✅ Navbar persists across all pages
import Footer from "../layouts/Footer"; // ✅ Import Footer correctly

const Root = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ✅ Navbar at the top */}
      <Navbar />

      {/* ✅ Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* ✅ Footer at the bottom */}
      <Footer />
    </div>
  );
};

export default Root;
