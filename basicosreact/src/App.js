import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import PrimerComponente from './components/PrimerComponentTest';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProducto from './components/ListaProductos';

function App() {
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header titulo="Tienda virtual"/>
      <ListaProducto />
      <Footer fecha={fecha}/>
    </Fragment>
  );
}

export default App;
