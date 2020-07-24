import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <p id="footer-para">
      © Copyright {new Date().getFullYear()}. Forte - All Rights Reserved.
    </p>
  );
}
