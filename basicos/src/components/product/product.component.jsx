import React from 'react';

const Product = ({ productos, producto, carrito, setCarrito }) => {
    const { id, nombre, precio } = producto;
    //agregar producto al carrito
    const seleccionarProducto = (id) => {
        const producto = productos.filter(producto => producto['id'] === id)[0];
        setCarrito([
            ...carrito,
            producto //tambien como es un arreglo podemos usar otro spread ...producto
        ]);
    }
    const eliminarProducto = (id)=>{
        const productos = carrito.filter(producto => producto['id']!==id)
        setCarrito(productos)
    }
    return (
        <div>
            <h2>{nombre}</h2>
            <small>${precio}</small>
            <br></br>

            {productos ?
                <button
                    type="button"
                    onClick={() => { seleccionarProducto(id) }}
                >
                    Comprar
                </button> :
                <button
                    type="button"
                    onClick={() => { eliminarProducto(id) }}
                >
                    Eliminar
                </button>
            }
        </div>
    )
}

export default Product