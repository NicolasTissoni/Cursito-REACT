import React, { useState } from "react";

const Context = React.createContext();

export const CartContext = ({ children }) => {
    const [quantity, setQuantity] = useState(0);

    const addQuantity = (count) => {
        setQuantity(quantity + count);
    };
    
    return (
        <Context.Provider
            value= {{
                values: { quantity },
                addQuantity,
            }}
        >
            { children }
        </Context.Provider>
    )
};

export default Context;