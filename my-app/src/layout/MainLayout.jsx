import React from "react";
import { Link, Outlet } from "react-router-dom";

import "../index.css";
const MainLayout = () => (
  <div>
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |<Link to="/about"> About</Link> |
      <Link to="/contact"> Contact</Link>
    </nav>
    <div style={{ padding: "20px" }}>
      <Outlet />
    </div>
  </div>
);

export default MainLayout;
