import React, {Fragment, useState} from 'react';
import Error from './error';

function Pregunta(props) {
    const {guardarPresupuesto, guardarRestante} = props;

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();

        if(cantidad <= 0 || isNaN(cantidad)){
            guardarError(true)
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
    }

    return (
        <Fragment>
                <h2>Coloca tu presupuesto</h2>
                {error ? <Error mensaje="El presupuesto es incorrecto" /> : null}
                <form
                    onSubmit={agregarPresupuesto}
                >
                    <input 
                            type="number"
                            className="u-full-width"
                            placeholder="Agrega tu presupuesto"
                            onChange={e => guardarCantidad(parseInt(e.target.value, 10))}
                    />
                    <input 
                        type="submit"
                        className="button-primary u-full-width"
                        value="Definir presupuesto"
                    />
                </form>
        </Fragment>
    );
}

export default Pregunta;