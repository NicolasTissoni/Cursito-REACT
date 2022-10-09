import React, { useState } from 'react';

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [itemCart, setItemCart] = useState([]);

    const addItemCart = (item) => {
        const flag = isInCart(item);

        if (!flag) {
            setItemCart([...itemCart, item]);
            return true;
        } else {
            let productoElegido = itemCart.find(
                (product) => product.element.id === item.element.id
            );

            if (productoElegido.count + item.count <= productoElegido.element.stock) {
                productoElegido.count += item.count;

                let listaSinEseElemento = itemCart.filter(
                    (product) => product.element.id !== item.element.id
                );
                setItemCart([...listaSinEseElemento, productoElegido]);
                return true;
            } else {
                return false;
            }
        }
    };

    const getCount = () => {
        let subTotal = 0;
        itemCart.forEach((item) => {
            subTotal += item.count;
        });
        return subTotal;
    };

    const getTotal = () => {
        let subTotal = 0;
        itemCart.forEach((item) => {
            subTotal += item.count * item.element.price;
        });
        return subTotal;
    };

    const isInCart = (item) => {
        return itemCart.some((itemCart) => itemCart.element.id === item.element.id);
    };

    const clearItems = () => {
        setItemCart([]);
    };

    const removeItem = (id) => {
        setItemCart(itemCart.filter((item) => item.element.id !== id));
    };

    return (
        <Context.Provider
            value={{
                values: { itemCart },
                addItemCart,
                getCount,
                getTotal,
                clearItems,
                removeItem,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export default Context;