import React, { useEffect, useState } from "react";

const Count = () => {

const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total: " + contar);
  }, [contar])

  const PrenderApagar = () => {
    setStateCar(!stateCar);
    setContar(contar+1);
  };

  return (
    <div className="App">
      <h3>El auto está: {stateCar ? "Prendido" : "Apagado"}</h3>
      <h2>Clicks: {contar}</h2>
      <button onClick={PrenderApagar}>Prender / Apagar</button>
    </div>
  );
}

export default Count;