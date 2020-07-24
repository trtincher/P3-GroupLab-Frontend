import React, { useState } from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./Layout.scss";

const Layout = (props) => {
  const [hideProps, setHideProps] = useState(false);
  return (
    <div id="layout-div">
      <Nav setHideProps={setHideProps} />
      <div id={hideProps ? "hide-props" : null}>{props.children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
