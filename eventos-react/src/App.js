import React from 'react';
import Header from './components/Header';
import ListaEvents from './components/ListaEvents';
import CategoriasProvider from './context/CategoriasContext';
import Formulario from './components/Formulario';
import EventosProvider from './context/EventosContext';

function App() {
  return (
    <EventosProvider>
    <CategoriasProvider>
      <Header/>
      <div className="uk-container">
        <Formulario/>
        <ListaEvents />
      </div>
    </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
