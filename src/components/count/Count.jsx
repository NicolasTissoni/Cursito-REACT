import React, { useState } from "react";

import './count.scss';

const Count = ({ stock, onAdd }) => {
  const [contar, setContar] = useState(0);

    const restar = () => {
      if (contar > 0) {
        setContar(contar - 1);
      }
    };

    const sumar = () => {
      if (contar < stock){
        setContar(contar + 1);
      }
    };

    const agregar = () => {
      onAdd(contar);
    }

    return (
      <div className="count">
        <button onClick={ restar }>-</button>
        <h2>{ contar }</h2>
        <button onClick={ sumar }>+</button>
        <button onClick={agregar} className={'buttonAdd'}>Agregar al Carrito</button>
      </div>
  );
};

export default Count;