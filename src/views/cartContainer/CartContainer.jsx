import React, { useContext } from 'react';

import CartContext from '../../context/CartContext';

import ListCart from './listCart/ListCart';

const CartContainer = () => {
    const { values } = useContext(CartContext);

    return (
        <div className='cartContainer-sin-elementos'>
            {values.itemCart.length > 0 ? (
                <ListCart items={values.itemCart} />
            ) : (
                <h2>No hay elementos, por favor ingresar alguno</h2>
            )}
        </div>
    );
};

export default CartContainer;