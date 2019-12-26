import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CriptomonedaOption from './criptomenda';
import Error from './error';

function Formulario(props) {

    const {setMoneda, setCripto} = props;

    const [ criptomoneda, setCriptomoneda] = useState([]);
    const [ monedaCotizar, setMonedaCotizar] = useState('');
    const [ criptoCotizar, setcriptoCotizar] = useState('');
    const [ error, setError] = useState(false);

    useEffect(
        () => {
            const consultarAPi = async()=> {
                const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=15&tsym=USD';

                const resultado = await axios.get(url);
                setCriptomoneda(resultado.data.Data);
            }

            consultarAPi();
        }
    , [])

    const cotizarMoneda = (e) => {
        e.preventDefault();

        if(monedaCotizar === '' ||  criptoCotizar === ''){
            setError(true);
            return;
        }
        setError(false);
        setCripto(criptoCotizar);
        setMoneda(monedaCotizar);
    }

    const componente = (error) ? <Error mensaje="Ambos campos son obligatorios" /> : null;

    return (
        <form
            onSubmit={cotizarMoneda}
        >
        {componente}
        <div className="row">
            <label>Elige tu moneda</label>
            <select className="u-full-width"
                    onChange={ e => setMonedaCotizar(e.target.value)}
            >
                <option value="">Elige tu moneda</option>
                <option value="USD">Dolares</option>
                <option value="MXN">Peso mexicano</option>
                <option value="GPB">Libras</option>
                <option value="EUR">Euros</option>
            </select>
        </div>
        <div className="row">
            <label>Elige tu Criptomoneda</label>
            <select  className="u-full-width" onChange={ e => setcriptoCotizar(e.target.value)}>
                <option value="">Elige tu criptomoneda</option>
                { criptomoneda.map(cripto => (
                    <CriptomonedaOption 
                        cripto = {cripto}
                        key =  {cripto.CoinInfo.Id}
                    />
                ))}
            </select>
        </div>
        <input type="submit" className="button-primary u-full-width" value="Cotizar" />
        </form>
    );
}

export default Formulario;