import React from "react";

import { Link } from "react-router-dom";

import "./buttonRedirect.scss";

const ButtonRedirect = ({ text, toLink }) => {
  return (
    <div className="contain-button">
        <Link to={toLink} className="button">
        {text}
        </Link>
    </div>
  );
};

export default ButtonRedirect;
