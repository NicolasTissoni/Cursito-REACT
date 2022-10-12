import React from 'react';

import ButtonDeleted from '../../../components/buttonsGlobals/buttonDeleted/ButtonDeleted';

import './elementCart.scss';

const ListCart = ({ item }) => {

    return (
        <tr className="items-container">
            <td className="item-name">{item.element.name}</td>
            <td className="item-cantidad">{item.count}</td>
            <td className="item-price">${item.element.price * item.count}</td>
            <td>
                <ButtonDeleted id={item.element.id}/>
            </td>
        </tr>
    );
};

export default ListCart;
