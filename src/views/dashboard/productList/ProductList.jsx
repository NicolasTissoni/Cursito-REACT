import React from 'react';

import './productList.scss'

const ProductList = ({ product }) => {
    return (
        <div className="ItemsD">
            <h1 className='idClient'>ID de Compra: {product.id}</h1>
            <h2 className='emailD'>Email de compra: {product.clienteInfo.email}</h2>
            <p>Productos:</p>
            {product.items.length > 0 &&
                product.items.map((item) => {
                    return (
                        <ul className="ulItemsD" key={item.element.id}>
                            <li>Nombre del Producto: {item.element.name}</li>
                            <li>Precio: ${item.element.price}</li>
                            <li>Cantidad: x{item.count}</li>
                        </ul>
                    );
                })}
            <h3>Total: ${product.total}</h3>
        </div>
    );
};

export default ProductList;