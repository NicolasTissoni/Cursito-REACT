import React from 'react';
import './app.scss';

import NavBarContainer from '../views/navBar/navBarContainer';
import ElementsContainer from '../views/listElementsContainer/ElementsContainer';
import CartContainer from '../views/cartContainer/CartContainer';
import ElementByIdContainer from '../views/elementByIdContainer/ElementByIdContainer';
import Checkout from '../views/checkout/Checkout';
import DashBoardContainer from '../views/dashboard/DashBoardContainer';
import Footer from '../views/footer/Footer';

import Notification from '../components/notification/Notification';

import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { NotificationContext } from '../context/NotificationContext';
import { UserContext } from '../context/UserContext';

function App() {
    return (
        <div className="routes">
            <UserContext>
                <NotificationContext>
                    <CartContext>
                        <BrowserRouter>
                            <NavBarContainer />
                            <Notification />
                            <HashRouter basename='/'>
                                <Routes>
                                    <Route path="/" element={<ElementsContainer />} />
                                    <Route path="/element/:id" element={<ElementByIdContainer />} />
                                    <Route path="/:category" element={<ElementsContainer />} />
                                    <Route path="/cart" element={<CartContainer />} />
                                    <Route path="/checkout" element={<Checkout />} />
                                    <Route path="/dashboard" element={<DashBoardContainer />} />
                                </Routes>
                            </HashRouter>       
                            <Footer />
                        </BrowserRouter>
                    </CartContext>
                </NotificationContext>
            </UserContext>
        </div>
    );
}

export default App;