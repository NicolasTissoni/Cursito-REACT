import React, { useState } from "react";

import './count.scss';

const Count = ({ stock }) => {
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

    return (
      <div className="count">
        <button onClick={ restar }>-</button>
        <h2>{ contar }</h2>
        <button onClick={ sumar }>+</button>
      </div>
  );
}

export default Count;