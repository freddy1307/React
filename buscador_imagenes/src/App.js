import React, {useState, useEffect} from 'react';
import Buscador from './components/buscador';
import ListadoImages from './components/ListadoImages';

function App() {

  const [ terminoBuscado, setTerminobuscado] = useState('');
  const [ imagenes, setImagenes] = useState({});
  const [ paginaActual, setpaginaActual] = useState(1);
  const [ totalPaginas, setTotalPaginas] = useState(1);

  const paginaAnterior = () =>{
    setpaginaActual(paginaActual - 1);
  }

  const paginaSiguiente = () =>{
    setpaginaActual(paginaActual + 1);
  }

  useEffect(
    () =>  {
      const consultarApi = async () => {

        if(terminoBuscado === '') return null;

        const imagenesPorPagina = 30;
        const key = '14745840-616b3e2a8b6da626bc9ab5a2a';

        const url = `https://pixabay.com/api/?key=${key}&q=${terminoBuscado}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        
        setImagenes(resultado.hits);

        //Calcular total de paginas
        setTotalPaginas(Math.ceil( resultado.totalHits / imagenesPorPagina));

        //Mover pantalla hacia la parte superior
        const jumbtron = document.querySelector('.jumbotron');
        jumbtron.scrollIntoView({ behavior:'smooth', block: 'start'});

      }
      consultarApi();
    }, [terminoBuscado, paginaActual]
  )

  return (
    <div className="app container">
        <div className="jumbotron"> 
            <p className="lead text-center"> Buscador de imagenes</p>
            <Buscador setTerminobuscado={setTerminobuscado}/>
        </div>

        <div className="row justify-content-center">
            <ListadoImages imagenes={imagenes}/>

            { (paginaActual === 1) ? null :
              (
                <button onClick={paginaAnterior}  type="button" className="btn btn-info mr-1">&laquo; Anterior </button>
              )
            }
            { (paginaActual === totalPaginas) ? null :
              (
                <button onClick={paginaSiguiente}  type="button" className="btn btn-info ">Siguiente &raquo;</button>
              )
            }
        </div>
    </div>
  );
}

export default App;
