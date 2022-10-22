import React, { useEffect, useState } from 'react';

import { getFirebase } from '../../service/productService';

import ListNavBar from './listNavBar/ListNavBar';

const NavBarContainer = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState([false]);

    useEffect(() => {
        getFirebase('categories')
            .then((categories) => {
                setCategories(categories);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
            });
        setLoading(false);
    }, []);

    return <div>{loading ? <ListNavBar categories={categories} /> : <p>No hay Elementos</p>}</div>;
};

export default NavBarContainer;