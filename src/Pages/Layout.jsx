import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <div className="w-full min-h-screen">
      {/* NAVBAR */}
      <Nav />

      {/* PAGE CONTENT */}
      <main className="pt-24">
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
