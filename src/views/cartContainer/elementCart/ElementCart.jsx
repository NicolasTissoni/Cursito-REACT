import React, { useContext } from 'react';

import CartContext from '../../../context/CartContext';

import './elementCart.scss'
const ListCart = ({ item }) => {
    const { removeItem } = useContext(CartContext);

    const handleRemove = () => {
        removeItem(item.element.id);
    };

    return (
        <tr className='items-container'>
            <td className='item-name'>{item.element.name}</td>
            <td className='item-cantidad'>{item.count}</td>
            <td className='item-price'>${item.element.price * item.count}</td>
            <td className='button-clear-by-id'>
                <button><i className='fa-regular fa-trash-can' onClick={handleRemove}></i></button>
            </td>
        </tr>
    );
};

export default ListCart;