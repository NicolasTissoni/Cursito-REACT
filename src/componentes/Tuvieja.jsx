import React from "react";
import '../scss/Tuvieja.scss';

function Tuvieja(props) {
  console.log('hola');
  return (
    <div className="contenedor-tuvieja">
      <img
        className="imagen-tuvieja"
        src={require(`../imagenes/Perrito-${props.imagen}.jpg`)}
        alt="Imagen de Perrito"
      />
      <div className="contenedor-texto-tuvieja">
        <p className="nombre-tuvieja">{props.nombre}</p>
        <p className="algo-tuvieja">{props.algo}</p>
        <p className="texto-tuvieja">"{props.texto}"</p>
      </div>
    </div>
  );
}

export default Tuvieja;