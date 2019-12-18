import React, {useState, useEffect, Fragment} from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  //cargar citas del localstorage como stateincial
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (!citasIniciales){
      citasIniciales= [];
    }

  const [citas, guardarCitas] =  useState(citasIniciales);

  //Agregar las nuevas citas al state
  const crearCita = cita => {
    guardarCitas([
      ...citas,
      cita      
    ])
    console.log(citas);
  }

  const eliminarCita = (index) => {
    const nuevasCita = [...citas]; //Hacemos un copy del state
    nuevasCita.splice(index, 1); //eliminar el elemento
    guardarCitas(nuevasCita); //y lo guardamos en el state
  }

  //Cargar dinamicamente un titulo
  const titulo = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar citas aqui.';

  useEffect(()=> {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if (citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas));
    }else{
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])

  return (
    <Fragment>
    <h1>Administrador de Pacientes</h1>
    <div className="container">
      <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita, index) => (
                <Cita 
                    key = {index}
                    index = {index}
                    cita = {cita}
                    eliminarCita= {eliminarCita}
                />
            ))}
          </div>
      </div>
    </div>
    </Fragment>
  );
}

export default App;
