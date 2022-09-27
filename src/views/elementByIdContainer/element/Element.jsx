import React from 'react';

import { Link } from 'react-router-dom';


const Element = ({ element }) => {
    return (
        <div className='element'>
            <div className='image'>
                <img src={element.image} alt={element.name}/>
            </div>
            <h2 className='name'>{element.name}</h2>
            <h3 className='price'>${element.price}</h3>
            <p className='description'>{element.description}</p>
            <p className='stock'>{element.stock}</p>
            <Link to='/'>Volver</Link>
        </div>
    );
};

export default Element;