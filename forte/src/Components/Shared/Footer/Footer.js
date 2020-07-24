import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <div>
      <p id="footer-para">
        © Copyright {new Date().getFullYear()}. Forte - All Rights Reserved.
      </p>
    </div>
  );
}
