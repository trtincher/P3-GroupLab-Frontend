import React from "react";
import Nav from "./Nav/Nav";
import Footer from "./Footer/Footer";
import "./Layout.scss";

const Layout = (props) => {
  return (
    <div>
      <Nav />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
