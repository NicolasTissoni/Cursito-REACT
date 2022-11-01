import React, { useEffect, useState } from "react";

import { useParams } from 'react-router-dom';

import { getFirebase } from "../../service/productService";

import ListElements from './listElements/ListElements';

import './ElementsContainer.scss';

const ListElementsContainer = () => {
  const { category } = useParams();
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const top = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    getFirebase('Products', category)
      .then((response) => {
        setElements(response);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [category, ]);

  return (
    <div className="container-home">
      {!category ? <h2 className="title">Lista de Articulos</h2> : <h2 className="title">{category}</h2>}
      {loading ? <ListElements elements={elements} /> : <p>No hay Elementos</p>}
      <div className="btn-scroll">
        <i className="fa-solid fa-arrow-up" onClick={top}></i>
      </div>
    </div>
  );
};

export default ListElementsContainer;