import React, {useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Error from './components/Error';
import Clima from './components/Clima';

function App() {

  //state principal
  const [ciudad, guardarCiudad] = useState('');
  const [pais, guardarPais] = useState('');
  const [resultado, guardarResultado] = useState('');
  const [error, guardarError] = useState(false);

  useEffect(() =>{
    //prevenir ejecuccion al iniciar
    if(ciudad === '') return;
    consultarApi();
  }, [ciudad, pais])

  const datosConsulta = datos => {
    //Validar que ambos campos esten
    if(datos.ciudad === '' || datos.pais === ''){
      guardarError(true);
      return;
    }
    guardarCiudad(datos.ciudad);
    guardarPais(datos.pais);
    guardarError(false);
  }

  const consultarApi = async () => {
    console.log('entro a consultar api');
      const appId = '002ef0e30721244c99d3c4feff8c20dc';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;


      //consultar la urll
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarResultado(resultado);
  }

  //Cargar un componente condicionalmente
  let componente;
  if(error){
    //Hay un error mostrarlo
    componente = <Error mensaje="Ambos campos son obligatorios"/>
   }else if(resultado.cod === "404"){
    componente = <Error mensaje="La ciudad no existe"/>
  }else{
    componente = <Clima 
              resultado = {resultado}
      />
  }

  return (
    <div className="App">
      <Header
        titulo='Clima - React APP'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6 ">
            <Formulario datosConsulta={datosConsulta}/>
            </div>
            <div className="col s12 m6 ">
              {componente}
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
