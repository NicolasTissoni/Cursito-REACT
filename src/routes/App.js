import TuVieja from "../views/TuVieja.jsx";

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Tu vieja</h1>
        <TuVieja
          nombre="nico"
          algo="asdasdasd"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae."
          imagen="1"
        />

        <TuVieja nombre="alejo"
          algo="asdasdasd"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae."
          imagen="2"
        />

        <TuVieja nombre="lucas"
          algo="asdasdasdsa"
          texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. Id sed corrupti pariatur cumque dicta doloribus minima porro. Non nulla nemo quasi natus, ab velit ad ea a. Ut, aliquam recusandae."
          imagen="3"
        />
      </div>
    </div>
  );
}

export default App;
