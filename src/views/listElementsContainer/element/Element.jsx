import React from 'react'
import { Link } from 'react-router-dom'
import './element.scss';

const Elements = ({ element }) => {
    return (
        <div className='element'>
            <div className='image'>
                <img src={element.image} alt={element.name}/>
            </div>
            <h2 className='name'>{element.name}</h2>
            <h3 className='price'>${element.price}</h3>
            <Link to={`/element/${element.id}`}className='button'>Ver Detalles</Link>
        </div>
    );
};

export default Elements;