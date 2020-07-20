import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  // State to open and close the mobile nav
  const [open, setOpen] = useState(false);

  return (
    <div id="headerNav">
      <h1>Forte</h1>
      <nav id="deskNav">
        <div id="burger-menu">
          <ul id={open ? "open" : "closed-burger-menu-list"}>
            <li className="burger-menu-item">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                Home
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/about"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                About
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/meetTheTeam"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                Meet the Team
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                Dashboard
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/signup"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                Sign Up
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/login"
                style={{ textDecoration: "none" }}
                onClick={() => setOpen(!open)}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div id="burger">
          <div id="burger-span" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <ul id="desk-ul">
          <li>
            <Link to="/" style={{ textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" style={{ textDecoration: "none" }}>
              About
            </Link>
          </li>
          <li>
            <Link to="/meetTheTeam" style={{ textDecoration: "none" }}>
              Meet the Team
            </Link>
          </li>
          <li>
            <Link to="/dashboard" style={{ textDecoration: "none" }}>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/signup" style={{ textDecoration: "none" }}>
              Sign Up
            </Link>
          </li>
          <li>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
