import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { getElementsAll } from "../../data/elements/getElements";

import ListElements from './listElements/ListElements';

import './ElementsContainer.scss';

const ListElementsContainer = () => {
  const { category } = useParams();
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getElementsAll(category)
      .then((response) => {
        setElements(response);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [category]);

  return (
    <div>
      {!category ? <h2 className="title">Lista de Articulos</h2> : <h2 className="title">{category}</h2>}
      {loading ? <ListElements elements={elements} /> : <p>No hay Elementos</p>}
    </div>
  );
};

export default ListElementsContainer;