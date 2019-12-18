import React from 'react';

const Gasto = ({gasto, eliminarGastoApp}) => {
    return (
            <li className="gastos">
                <p>
                    {gasto.nombreGasto}
                    <span className="gasto">{gasto.cantidadGasto}</span>
                    <button  type="button" onClick={() => eliminarGastoApp(gasto.id, gasto.cantidadGasto)}>
                        Eliminar
                    </button>
                </p>
            </li>
    );
}

export default Gasto;