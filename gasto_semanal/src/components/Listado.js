import React from 'react';
import Gasto from './gasto';


function Listado(props) {

    const {gastos, eliminarGastoApp} = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                    key={gasto.id}
                    gasto={gasto}
                    eliminarGastoApp = {eliminarGastoApp}
                />
            ))}
        </div>
    );
}

export default Listado;