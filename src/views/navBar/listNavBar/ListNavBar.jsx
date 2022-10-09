import React, { useContext } from 'react';

import './listNavBar.scss';

import { Link } from 'react-router-dom';

import Context from '../../../context/CartContext';

const ListNavBar = ({ categories }) => {
    const { getCount } = useContext(Context);
    return (
        <ul className="list-navbar">
            {categories.map((categories) => {
                return (
                    <li key={categories.id}>
                        <Link to={`/${categories.url}`}>{categories.name}</Link>
                    </li>
                );
            })}
            <Link className="cart-reditect" to={'/cart'}>
                <i className="fa-solid fa-cart-shopping"></i>
                <p>{getCount()}</p>
            </Link>
        </ul>
    );
};

export default ListNavBar;