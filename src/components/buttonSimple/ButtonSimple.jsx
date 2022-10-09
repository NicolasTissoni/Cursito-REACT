import React from "react";

import { Link } from "react-router-dom";

import "./buttonSimple.scss";

const ButtonSimple = ({ text, simpleLink }) => {
  return (
    <div className="contain-button-simple">
        <Link to={simpleLink} className="button-Simple">
        {text}
        </Link>
    </div>
  );
};

export default ButtonSimple;