import React, { useContext } from "react";

import CartContext from "../../context/CartContext";

const CartContainer = () => {
    const { values } = useContext(CartContext);
    return (
        <div>
            <h1>CartContainer</h1>
            <div>
                
            </div>
        </div>
    );
};

export default CartContainer;