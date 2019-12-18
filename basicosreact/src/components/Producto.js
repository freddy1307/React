import React from 'react';

const Producto = ({producto}) => {
    return (
        <div>
            <h2>{producto.name}</h2>
            <p>Precio: ${producto.precio}</p>
        </div>
    );
};

export default Producto;