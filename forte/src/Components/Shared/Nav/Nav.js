import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

export default function Nav({ setHideProps, hideProps }) {
  // State to open and close the mobile nav
  const [open, setOpen] = useState(false);

  return (
    <div id="headerNav">
      <nav id="deskNav">
        <div id="burger-menu">
          <div id="burger">
            <h1 className="layout-h1">Forte</h1>
            <div
              id="burger-span"
              onClick={() => {
                setOpen(!open);
                setHideProps(!open);
              }}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul id={open ? "open" : "closed-burger-menu-list"}>
            <li className="burger-menu-item">
              <Link
                to="/"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                Home
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/about"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                About
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/meetTheTeam"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                Meet the Team
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/dashboard"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                Dashboard
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/signup"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                Sign Up
              </Link>
            </li>
            <li className="burger-menu-item">
              <Link
                to="/login"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "40px",
                }}
                onClick={() => {
                  setOpen(!open);
                  setHideProps(!open);
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
        <div id="desk-menu">
          <h1 className="layout-h1">Forte</h1>
          <ul id="desk-ul">
            <li>
              <Link
                to="/"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/meetTheTeam"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                Meet the Team
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                style={{
                  fontFamily: "helvetica, sans-serif",
                  textDecoration: "none",
                  color: "white",
                  marginTop: "15px",
                  fontSize: "20px",
                }}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
