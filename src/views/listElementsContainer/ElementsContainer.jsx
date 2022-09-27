import React, { useEffect, useState } from "react";

import { getElementsAll } from "../../components/elements/getElements";

import ListElements from './listElements/ListElements';

import '../listElementsContainer/listElementsContainer.scss'

const ListElementsContainer = () => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getElementsAll()
      .then((response) => {
        setElements(response);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2 className="title">Graficas</h2>
      {loading ? <ListElements elements={elements} /> : <p>No hay Elementos</p>}
    </div>
  );
};

export default ListElementsContainer;