import React, { useContext, useState } from "react";

import "./listNavBar.scss";

import { Link } from "react-router-dom";

import Context from "../../../context/CartContext";

const ListNavBar = ({ categories }) => {
  const { getCount } = useContext(Context);

  const [stateButton, setStateButton] = useState(false);

  const handleClick = () => {
    setStateButton((stateButton) => !stateButton);
  };

  let toggleClassCheck = stateButton ? "active" : "desactive";

  return (
    <ul className="list-navbar">
      <div className="btn-cart">
        <button className={`btn ${toggleClassCheck}`} onClick={handleClick}>
          <span className="icon">
            <svg viewBox="0 0 175 80" width="40" height="40">
              <rect width="80" height="15" fill="#f0f0f0" rx="10"></rect>
              <rect
                y="30"
                width="80"
                height="15"
                fill="#f0f0f0"
                rx="10"
              ></rect>
              <rect
                y="60"
                width="80"
                height="15"
                fill="#f0f0f0"
                rx="10"
              ></rect>
            </svg>
          </span>
          <span className="text">MENU</span>
        </button>

        <Link className="cart-reditect" to={"/cart"}>
          <i className="fa-solid fa-cart-shopping"></i>
          <p>{getCount()}</p>
        </Link>
      </div>
      {categories.map((categories) => {
        return (
            <li className={toggleClassCheck} key={categories.id}>
              <Link to={`/Curso-React/${categories.url}`}>{categories.name}</Link>
            </li>
        );
      })}
    </ul>
  );
};

export default ListNavBar;
