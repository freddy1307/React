import React, {useState, useEffect} from 'react';
import Pregunta from './components/pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import PresupuestoRestante from './components/ControlPresupuesto';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [gastos , guardarGastos] = useState([]); //gastos en general
  const [gasto , guardarGasto] = useState({}); //gasto desde formulario

  useEffect(() => {
    if(Object.keys(gasto).length !== 0){
      const listadogastos = [...gastos, gasto];
      guardarGastos(listadogastos);
      
      const presupuestoRes = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRes);

      console.log(gastos)
    }
  }, [gasto]);

  const eliminarGastoApp = (id, cantidad) => {
      const gastosCopy = [...gastos];
      gastosCopy.splice(id, 1);
      guardarRestante(restante+cantidad);
      guardarGastos(gastosCopy);
  }

  return (
    <div className="App container">
        <header>
          <h1>Gasto semanal</h1>
          <div className="contenido-principal contenido">
            { (presupuesto === 0) ? 
            <Pregunta guardarPresupuesto={guardarPresupuesto} guardarRestante={guardarRestante}/>
            : (
              <div className="row">
                  <div className="one-half column">
                    <Formulario guardarGasto={guardarGasto}/>
                  </div>
                  <div className="one-half column">
                    <Listado  gastos={gastos} eliminarGastoApp={eliminarGastoApp}/>
                    <PresupuestoRestante presupuesto={presupuesto} restante={restante}/>
                  </div>
              </div>
            )
            }
          </div>
        </header>
    </div>
  );
}

export default App;
