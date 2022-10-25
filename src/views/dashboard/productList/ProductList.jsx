import React from 'react';

const ProductList = ({ product }) => {
    return (
        <div className="ItemsD">
            <h1>ID de Compra: {product.id}</h1>
            <h2>{product.clienteInfo.email}</h2>
            <p>Productos:</p>
            {product.items.length > 0 &&
                product.items.map((item) => {
                    return (
                        <ul className="ulItemsD" key={item.element.id}>
                            <li>{item.element.name}</li>
                            <li>${item.element.price}</li>
                            <li>x{item.count}</li>
                        </ul>
                    );
                })}
            <h3>Total: ${product.total}</h3>
        </div>
    );
};

export default ProductList;
