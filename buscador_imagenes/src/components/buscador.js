import React, { useState } from 'react';
import Error from './error';


function Buscador({setTerminobuscado}) {

    const [ termino, setTermino] = useState('');
    const [ error, setError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();
        if(termino === ''){
            setError(true);
            return;
        }
        setError(false);
        setTerminobuscado(termino);
    }

    return (
        <form
            onSubmit={buscarImagen}
        >
            <div className="row">
                <div className="form-group col-md-8">
                    <input type="text" className="form-control form-control-lg" placeholder="busca una imagen, ejemplo: Futbol o cafe" onChange={ e => setTermino(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                </div>
            </div>
            { (error) ? <Error mensaje="Agrega un termino de busqueda" />: null}
        </form>
    );
}

export default Buscador;