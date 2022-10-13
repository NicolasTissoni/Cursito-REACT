import React from 'react';
import './element.scss';
import ButtonRedirect from '../../../components/buttonsGlobals/buttonRedirect/ButtonRedirect';

const Elements = ({ element }) => {
    return (
        <div className="element">
            <div className="image">
                <img src={element.image} alt={element.name} />
            </div>
            <h2 className="name">{element.name}</h2>
            <h3 className="price">${element.price}</h3>
            <ButtonRedirect text="Ver Detalles" toLink={`/element/${element.id}`} />
        </div>
    );
};

export default Elements;