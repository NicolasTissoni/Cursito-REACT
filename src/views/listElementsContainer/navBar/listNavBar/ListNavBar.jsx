import React from 'react'

import './listNavBar.scss'

import { Link } from 'react-router-dom';
 
const ListNavBar = ({ categories }) => {
    return (
        <ul className='list-navbar'>
            {categories.map((categories) => {
                return (
                    <li key={categories.id}>
                        <Link to={`/${categories.url}`}>{categories.name}</Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default ListNavBar