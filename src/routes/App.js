import React from "react";

import NavBarContainer from '../views/listElementsContainer/navBar/navBarContainer'

import ElementsContainer from "../views/listElementsContainer/ElementsContainer";

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ElementByIdContainer from "../views/elementByIdContainer/ElementByIdContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element = {<ElementsContainer />}/>
          <Route path="/element/:id" element = {<ElementByIdContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;