import React from 'react';
import './Header.component.css';
function Header({titulo}) {//  el objeto que recibimos es props

    // const edad = 17
    // let mensaje = edad>=18?'Eres mayor de edad':'Eres menor de edad';
    return ( //lo que se va a ve
        //className="App-header">
        <header> 
        <h1 className="header"> {titulo} </h1>
        
        </header >

    );
}

export default Header;