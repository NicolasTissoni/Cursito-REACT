import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import { getElementsById } from "../../data/elements/getElements";

import Element from "./element/Element";

import Count from "../../components/count/Count";
import Context from "../../context/CartContext";
import ButtonRedirect from "../../components/buttonRedirect/ButtonRedirect";

const ElementByIdContainer = () => {
  const { id } = useParams();
  const [element, setElement] = useState({});
  const [loading, setLoading] = useState(true);

  const [state, setState] = useState(false);
  const { addQuantity } = useContext(Context);

  const agregar = (count) => {
    setState(true);
    addQuantity(count);
  };

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
              <ButtonRedirect text={"Volver"} toLink={"/"} />
              <ButtonRedirect text={"Ir al Carrito"} toLink={"/cart"} />
            </div>
          )}
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ElementByIdContainer;
