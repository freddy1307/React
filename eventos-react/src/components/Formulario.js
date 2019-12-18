import React, { Component } from 'react';
import {CategoriasConsumer} from '../context/CategoriasContext';
import {EventosConsumer} from '../context/EventosContext';

class Formulario extends Component {
    state = {
        nombre: '',
        categoria: '',
    }
    
    getEvent = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <EventosConsumer>
                {(value) =>{
                    return (
                        <form onSubmit={e =>{
                            e.preventDefault();
                            value.obtenerEventos(this.state)}}
                        >
                            <fieldset className="uk-fieldset uk-margin">
                                <legend className="uk-legend uk-text-center"> 
                                    Busca tu evento por nombre o categoria
                                </legend>
                            </fieldset>
                            <div className="uk-column-1-3@m uk-margin">
                                <div className="uk-margin" uk-margin="true">
                                    <input
                                        name="nombre"
                                        className="uk-input"
                                        type="text"
                                        placeholder="Nombre de evento o ciudad"
                                        onChange={this.getEvent}
                                        />
                                </div>
                                <div className="uk-margin" uk-margin="true">
                                    <select className="uk-select" name="categoria" onChange={this.getEvent}>
                                    <option value="" className="data-uk-form-select">Seleccione categoria</option>
                                        <CategoriasConsumer>
                                            {(value) => {
                                                return (
                                                    value.categories.map( category => (
                                                    <option key={category.id} value={category.id} className="data-uk-form-select">{category.name_localized}</option>
                                                    ))
                                                )
                                            }}
                                        </CategoriasConsumer>
                                    </select>
                                </div>
                                <div>
                                    <input
                                        type="submit"
                                        className="uk-button uk-button-danger"
                                        value="busca eventos"
                                    />
                                </div>
                            </div>
                        </form>
                    )
                }}
            </EventosConsumer>
        );
    }
}

export default Formulario;