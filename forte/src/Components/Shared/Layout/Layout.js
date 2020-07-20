import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import "./Layout.css";

const Layout = (props) => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
