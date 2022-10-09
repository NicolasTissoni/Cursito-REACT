import React from "react";
import './app.scss';

import NavBarContainer from "../views/navBar/navBarContainer";
import ElementsContainer from "../views/listElementsContainer/ElementsContainer";
import CartContainer from "../views/cartContainer/CartContainer";
import ElementByIdContainer from "../views/elementByIdContainer/ElementByIdContainer";
import Checkout from "../views/checkout/Checkout";
import Footer from "../views/footer/Footer";
import Notification from "../components/notification/Notification";

import { CartContext } from "../context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NotificationContext } from "../context/NotificationContext";


function App() {
  return (
    <div className="routes">
      <NotificationContext>
        <CartContext>
          <BrowserRouter>
            <NavBarContainer />
            <Notification />
            <Routes>
              <Route path="/" element={<ElementsContainer />} />
              <Route path="/element/:id" element={<ElementByIdContainer />} />
              <Route path="/:category" element={<ElementsContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContext>
      </NotificationContext>
    </div>
  );
};

export default App;