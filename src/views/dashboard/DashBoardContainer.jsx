import React, { useState, useEffect, useContext } from 'react';
import './dashBoardContainer.scss';

import ListDashBoard from './listDashBoard/ListDashBoard';
import Loader from '../../components/loader/Loader';
import UserContext from '../../context/UserContext';
import { getFirebase } from '../../service/productService';
import ButtonRedirect from '../../components/buttonsGlobals/buttonRedirect/ButtonRedirect';

const DashBoardContainer = () => {
    const { values } = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [list, setList] = useState(false);

    useEffect(() => {
        getFirebase('purchases')
            .then((res) => {
                setProducts(res.filter((product) => product.clienteInfo.email === values.email));
                if (res.length === 0) {
                    setList(false);
                } else {
                    setList(true);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [values.email]);

    return (
        <div className="tittle">
            {values.email !== '' ? (
                <div>
                    {list ? (
                        <div className="title">
                            <h2>Tu lista de compras</h2>
                            <ListDashBoard products={products} />
                        </div>
                    ) : (
                        <div>
                            <h2>Cargando...</h2>
                            <Loader />
                        </div>
                    )}
                    <ButtonRedirect text="Volver al inicio" toLink="/" />
                </div>
            ) : (
                <div>
                    <h2>No compraste nada aún</h2>
                    <ButtonRedirect text="Volver al inicio" toLink="/" />
                </div>
            )}
        </div>
    );
};

export default DashBoardContainer;
