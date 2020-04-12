import React from 'react'
import './carrito.css'
import Product from '../product/product.component'

const Carrito = ({ carrito,setCarrito }) =>
    <div className="carrito">
        <h2>Tu carrito de compra</h2>
        {carrito.length === 0 ?
            <p>No hay elementos en el carrito</p>
            :
            carrito.map(producto => {
                return (
                    <Product
                        key={producto.id}
                        producto={producto}
                        carrito = {carrito}
                        setCarrito ={setCarrito}
                    />)
            })
        }
    </div>

export default Carrito;