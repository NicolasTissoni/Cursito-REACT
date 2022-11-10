import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../service/productService';

import Element from './element/Element';

import Count from '../../components/count/Count';
import ButtonRedirect from '../../components/buttonsGlobals/buttonRedirect/ButtonRedirect';

import NotificationContext from '../../context/NotificationContext';
import CartContext from '../../context/CartContext';

const ElementByIdContainer = () => {
    const { id } = useParams();
    const [element, setElement] = useState({});
    const [loading, setLoading] = useState(true);
    const [state, setState] = useState(false);

    const { addItemCart } = useContext(CartContext);
    const { setNotification } = useContext(NotificationContext);

    const agregar = (count) => {
        let itemCart = addItemCart({ element, count });

        if (itemCart) {
            setNotification(
                'success',
                `Agregada la cantidad de ${count} de ${element.name} a tu carrito`
            );
            setState(true);
        } else {
            setNotification('error', `No hay suficiente stock de ${element.name}`);
            setState(false);
        }
    };

    useEffect(() => {
        getProductById('Products', id)
            .then((elemento) => {
                setElement(elemento);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            {loading ? (
                <>
                    <Element element={element} />
                    {!state ? (
                        <Count stock={element.stock} onAdd={agregar} />
                    ) : (
                        <div className="buttons">
                            <ButtonRedirect text={'Volver'} toLink={'/Curso-React/'} />
                            <ButtonRedirect text={'Ir al Carrito'} toLink={'/Curso-React/cart'} />
                        </div>
                    )}
                </>
            ) : (
                <h2>Cargando...</h2>
            )}
        </div>
    );
};

export default ElementByIdContainer;