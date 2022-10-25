import React from 'react';
import ProductList from '../productList/ProductList';

const ListDashBoard = ({ products }) => {
    return (
        <div>
            {products.map((product) => {
                return <ProductList key={product.id} product={product}></ProductList>;
            })}
        </div>
    );
};

export default ListDashBoard;
