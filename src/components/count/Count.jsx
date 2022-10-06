import React, { useState } from "react";

import './count.scss';

const Count = ({ stock, onAdd }) => {
  const [contar, setContar] = useState(1);

    const restar = () => {
      if (contar > 1) {
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
        <div className="buttonsCount-Container">
          <button onClick={ restar }>-</button>
          <h2>{ contar }</h2>
          <button onClick={ sumar }>+</button>
        </div>
        <button onClick={agregar} className={'buttonAdd'}>Agregar al Carrito</button>
      </div>
  );
};

export default Count;