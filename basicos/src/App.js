import React, { Fragment, useState } from 'react';
import Header from './components/header/Header.component';
import Footer from './components/footer/Footer.component';
import Product from './components/product/product.component'
import Carrito from './components/carrito/carrito.component'
function App() {

  //listado de productos
  const [productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa angular', precio: 40 },
    { id: 3, nombre: 'Camisa vueJs', precio: 30 },
    { id: 4, nombre: 'Camisa Javascript', precio: 20 },
  ]); //[datos, funcion] = useState(valores iniciales)
  const [carrito,setCarrito] = useState([]);
  const fecha = new Date().getFullYear();
  return (
    //es necesario un contenedor a menos que uses Fragment

    <Fragment >

      <Header
        titulo='Tienda virtual'
        numero={20} />
      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Product 
        productos = {productos}
        key = {producto.id}
        producto = {producto}
        carrito = {carrito}
        setCarrito = {setCarrito}
        />
      ))}
      <Carrito 
      carrito = {carrito}
      setCarrito={setCarrito} />
      <Footer
        fecha={fecha} />
    </Fragment>
  );
}

export default App;
