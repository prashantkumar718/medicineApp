import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#4CAF50", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white" }}>Home</Link>
      <Link to="/cart" style={{ margin: "10px", color: "white" }}>Cart</Link>
      <Link to="/login" style={{ margin: "10px", color: "white" }}>Login</Link>
    </nav>
  );
}

export default Navbar;
