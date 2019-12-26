import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import Formulario from './components/Formulario';
import Cancion from './components/Cancion';
import Info from './components/Info';


function App() {

  const [artista, agregarArtista] = useState('');
  const [letra, agregarletra] = useState([]);
  const [info,  agregarinfo] = useState({});

  //Metodo para consultar la API
  const consultarApi = async busqueda =>{
     const {artista, cancion} = busqueda; 
     const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

     const resultado = await axios(url);
    //console.log(resultado);
    agregarArtista(artista);
    agregarletra(resultado.data.lyrics);

    //consultarApiInfo(artista); no sirve asi tiene que ser desde useEfect
  } 

  const consultarApiInfo = async () =>{
    if(artista){
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;
      const restulado = await axios(url);d
      
      agregarinfo(restulado.data.artists[0]);
      //console.log(info);
    }
  }
  
  useEffect(
    ()=>{
      consultarApiInfo();
    },[letra]
  )


  return (
    <Fragment>
      <Formulario consultarApi={consultarApi}/>

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
              <Info 
                info={info}
              />
          </div>
          <div className="col-md-6">
              <Cancion 
                letra={letra}
              />
          </div>
        </div>
      </div>


    </Fragment>
  );
}

export default App;
