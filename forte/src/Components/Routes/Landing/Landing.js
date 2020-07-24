import React from "react";

import { Link } from "react-router-dom";
import "./Landing.scss";

const Landing = () => {
  return (
    <div id="landing-wrapper">
      <div id="landing-links">
        <Link
          to="/signup"
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "15px",
            fontSize: "30px",
          }}
        >
          sign up
        </Link>
        <Link
          to="/login"
          style={{
            color: "white",
            textDecoration: "none",
            marginTop: "15px",
            fontSize: "30px",
          }}
        >
          login
        </Link>
      </div>
      <Link to="/about">
        <img
          src="https://res.cloudinary.com/tylerdavisfilms/image/upload/v1595528689/SEIR%20Project%203/WireFrames/FinalForteLogo_copy_pndpwn.png"
          alt="Forte. Music lessions for everyone. From anywhere."
        />
      </Link>
    </div>
  );
};

export default Landing;
