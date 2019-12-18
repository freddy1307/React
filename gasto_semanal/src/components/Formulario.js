import React, {useState}  from 'react';
import Error from './error';
import shortid from 'shortid';


function Formulario(props) {

    const {guardarGasto} = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarcantidadGasto] = useState('');
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(cantidadGasto < 1 || isNaN(cantidadGasto)){
            guardarError(true);
            return;
        }
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id : shortid.generate()
        }
        guardarError(false);
        guardarGasto(gasto);
        //limpiar campos
        guardarNombreGasto('');
        guardarcantidadGasto('');
    }

    return (
        <form 
        onSubmit={agregarGasto}>
            <h2>Agrega tus gastos aqui</h2>
            {error ? <Error mensaje="Ambos campos son obligatorios o presupuesto invalido" /> : null}
            <div className="campo">
                <label>Nombre de gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. tranporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad de gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarcantidadGasto( parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>
            <input 
                        type="submit"
                        className="button-primary u-full-width"
                        value="Agregar gasto"
                    />
        </form>
    );
}

export default Formulario;