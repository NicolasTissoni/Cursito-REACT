import React from 'react'

import './listNavBar.scss'



const ListNavBar = ({ categories }) => {
    return (
        <ul className='list-navbar'>
            {categories.map((categories) => {
                return (
                    <li key={categories.id}>
                        <a href={`/${categories.url}`}>{categories.name}</a>
                    </li>
                );
            })}
        </ul>
    );
};

export default ListNavBar