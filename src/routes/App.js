import React from "react";

import NavBarContainer from '../views/navBar/navBarContainer'
import ElementsContainer from "../views/listElementsContainer/ElementsContainer";
import CartContainer from '../views/cartContainer/CartContainer'
import ElementByIdContainer from "../views/elementByIdContainer/ElementByIdContainer";
import Footer from "../views/footer/Footer";

import { CartContext } from "../context/CartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <CartContext>
      <BrowserRouter>
        <NavBarContainer />
        <Routes>
          <Route path="/" element = {<ElementsContainer />} />
          <Route path="/element/:id" element = {<ElementByIdContainer />} />
          <Route path="/:category" element={<ElementsContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartContext>
    </div>
  );
};

export default App;