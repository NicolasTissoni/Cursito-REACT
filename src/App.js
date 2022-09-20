import "./App.css";
import Tuvieja from "./componentes/Tuvieja.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Tu vieja</h1>
        <Tuvieja
          nombre="nico"
          algo="asdasdasd"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae."
          imagen="1"
        />

        <Tuvieja nombre="alejo" 
          algo="asdasdasd" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae." 
          imagen="2" 
        />

        <Tuvieja nombre="lucas" 
          algo="asdasdasdsa" 
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae." 
          imagen="3" 
        />
      </div>
    </div>
  );
}

export default App;
