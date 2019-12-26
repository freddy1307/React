import React from 'react';

function CriptomonedaOption(props) {
    const {FullName, Name} = props.cripto.CoinInfo;
    return (
        <option value={Name}>{FullName}</option>
    );
}

export default CriptomonedaOption;