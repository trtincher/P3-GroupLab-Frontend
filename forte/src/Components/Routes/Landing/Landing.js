import React from "react";

import { Link } from 'react-router-dom';
import "./Landing.css";

const Landing = () => {
  return (
    <div>
        <Link to='/signup'>sign up</Link>
        <Link to='/login'>login</Link>
        <img src='https://i.imgur.com/1qxBeOV.png' alt='Forte. Music lessions for everyone. From anywhere.' />
    </div>
  );
};

export default Landing;

