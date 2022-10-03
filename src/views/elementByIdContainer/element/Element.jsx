import React from 'react';
import './element.scss';


const Element = ({ element }) => {

    return (
        <div className='elementSelect'>
            <div className='image'>
                <img src={element.image} alt={element.name}/>
            </div>
            <div className='contenedor-data'>
                <h2 className='name'>{element.name}</h2>
                <p className='description'>{element.description}</p>
                <h3 className='price'>${element.price}</h3>
            </div>
        </div>
    );
};

export default Element;