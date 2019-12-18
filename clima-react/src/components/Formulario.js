import React, {useState} from 'react';

function Formulario({datosConsulta}){

    //state del componente
    // busqueda = state, guardarBusqueda = this.setState({})
    const [busqueda, guardarBusqueda] = useState({
        ciudad: '',
        pais: ''
    })

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }
    const consularClima = e => {
        e.preventDefault();
        //pasar los datos del state con hooks al padre
        datosConsulta(busqueda);
    }

    return(
        <form
            onSubmit={consularClima}
        >
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad</label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    onChange={handleChange}
                >
                    <option value="">Selecciona un pais</option>
                    <option value="MX">Mexico</option>
                    <option value="US">Estados Unidos</option>
                    <option value="AR">Argentina</option>
                    <option value="ES">Espana</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Buscar Clima"/>
            </div>
        </form>
    )
}
export default Formulario;