import React, { useContext } from 'react';
import CartContext from '../../../context/CartContext';

import ElementCart from '../elementCart/ElementCart';
import ButtonRedirect from '../../../components/buttonRedirect/ButtonRedirect';
import './listCart.scss'

const ListCart = ({ items }) => {
    const { getTotal, clearItems } = useContext(CartContext);

    return (
        <div>
            <h2 className='title'>Lista de productos</h2>

            <table className='table'>
                <thead>
                    <tr className='head-table'>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((item) => {
                        return <ElementCart item={item} key={item.element.id} />;
                    })}
                </tbody>
                
                <tfoot className='footer-table'>
                    <tr>
                        <td colSpan="2">Total:</td>
                        <td>${getTotal()}</td>
                    </tr>
                </tfoot>
            </table>
            <div className='buttons-cart'>
                <button className='button-eliminar-todo' onClick={clearItems}>Eliminar todos los items</button>
                <ButtonRedirect text="Finalizar compra" toLink="/checkout" />
            </div>
        </div>
    );
};

export default ListCart;