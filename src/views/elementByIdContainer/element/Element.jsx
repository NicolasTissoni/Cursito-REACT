import React from 'react';

import './element.scss';

import Count from '../../../components/count/Count' 

import ButtonRedirect from '../../../components/buttonRedirect/ButtonRedirect';

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
                <Count stock={element.stock}/>
                <ButtonRedirect text={'Volver'} toLink={`/`}/>
            </div>
        </div>
    );
};

export default Element;