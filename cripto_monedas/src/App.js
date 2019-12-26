import React,{ useState, useEffect } from 'react';
import image from './cryptomonedas.png';
import Formulario from './components/Formulario';
import axios from 'axios';
import Spinner from './components/spinner';
import Cotizacion from './components/Cotizacion';


function App() {

  const [ moneda, setMoneda] = useState('');
  const [ cripto, setCripto] = useState('');
  const [ cargando, setCargado] = useState(false);
  const [ resultado, setResultado] = useState({});


  useEffect(
    () => {
      const cotizarCriptomenda = async () => {
          if(moneda === '') return;

          const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

          const resultado = await axios.get(url);
          //console.log(resultado.data.DISPLAY[cripto][moneda]);

          setCargado(true);
          setTimeout(() => {
            setCargado(false)
            setResultado(resultado.data.DISPLAY[cripto][moneda]);
          }, 3000);


      }
      cotizarCriptomenda();
    }, [ moneda, cripto]
  )

  // Mostrar spinner o resultado
  const component = (cargando) ? <Spinner />  : <Cotizacion resultado={resultado}/>;

  return (
    <div className="container">
      <div className="row">
          <div className="one-half column">
            <img src={image} alt="imagen" className="logotipo"/>
          </div>
          <div className="one-half column">
                <h1>Cotiza criptomonedas al Instante</h1>
                <Formulario setMoneda={setMoneda} setCripto={setCripto}/>
                {component}
          </div>
      </div>
    </div>
  );
}

export default App;
