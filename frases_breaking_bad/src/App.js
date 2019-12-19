import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Frase({frase}){
    return (
      <div className="frase">
        <h1>{frase.quote}</h1>
    <p>- {frase.author}</p>
      </div>
    );

}

function App() {
  
  const [frase, setFrase] = useState({});


  //consulta RestApi
  const consultarAPI = async () =>{
    const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
      setFrase(resultado.data[0]);
  }

  useEffect(
    () => {
      consultarAPI()
    }
  , [])

  return (
    <div className="contenedor">
        <Frase frase={frase} />
        <button
          onClick={consultarAPI}
        >Generar Nueva</button>
    </div>
  );
}

export default App;
