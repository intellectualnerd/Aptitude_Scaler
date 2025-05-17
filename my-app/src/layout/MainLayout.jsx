import React from "react";
import { Link, Outlet } from "react-router-dom";
import { supabase } from "../utils/supabaseClient";
import "../index.css";

const handleLogout = async () => {
  await supabase.auth.signOut();
  window.location.href = `${import.meta.env.VITE_BASE_URL}/signup`;
};

const MainLayout = () => (
  <div>
    <nav className="gradient-bg text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <i className="fas fa-brain text-2xl"></i>
          <span className="text-xl font-bold">JobAptitude</span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 mylinks">
          <a href="/" className="hover:text-purple-200 transition-all">
            Home
          </a>
          <a href="/#quizzes" className="hover:text-purple-200 transition-all">
            Quizzes
          </a>
          <a
            href="/#leaderboard"
            className="hover:text-purple-200 transition-all"
          >
            Leaderboard
          </a>

          {/* Profile Button */}
          <button
            style={{ marginLeft: "24px" }}
            onClick={() => {
              window.location.href = `${import.meta.env.VITE_BASE_URL}/profile`;
            }}
            className="bg-white text-purple-700 px-4 py-1 rounded-full font-medium hover:bg-purple-100 transition-all"
          >
            <i className="fas fa-user mr-1"></i> Profile
          </button>

          {/* Logout Button */}
          <button
            className="bg-white text-purple-700 px-4 py-1 rounded-full font-medium hover:bg-purple-100 transition-all"
            onClick={handleLogout}
          >
            <i className="fas fa-sign-out-alt mr-1"></i> Logout
          </button>
        </div>
      </div>
    </nav>
    <div style={{ padding: "20px" }}>
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
