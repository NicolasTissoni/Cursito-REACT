import React, { useState, useEffect } from 'react'

import { useParams } from 'react-router-dom';

import { getElementsById } from '../../components/data/elements/getElements';

import Element from './element/Element'

const ElementByIdContainer = () => {
    const { id } = useParams();
    const [element, setElement] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getElementsById(id)
            .then((elemento) => {
                setElement(elemento);
                setLoading(true);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [])
    return (
        <div>
            {loading ? <Element element={element} /> : <h1>Cargando...</h1>}
        </div>
    );
};

export default ElementByIdContainer;