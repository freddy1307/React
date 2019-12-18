import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Formulario extends Component {
    state = {
        categoria: 'technology'
    }
    handlecategory = e => {
        this.setState({
            categoria: e.target.value
        }, () =>{ //Callback para despues de asignarse el valor ejecute estas lineas
        //Pasarlo a la pagina principal
        this.props.consultarNoticias(this.state.categoria)
        })
        
    }
    render() {
        return (
                <div className="buscador row">
                    <div className="col s12 m8 offset-m2">
                        <form>
                            <h2>Encuentra noticias por categoria:</h2>
                            <div className="input-field col s12 m8 offset-m2">
                                <select onChange={this.handlecategory}>
                                    <option value="general">General</option>
                                    <option value="technology" selected>Tecnologia</option>
                                    <option value="business">Negocios</option>
                                    <option value="science">Ciencia</option>
                                    <option value="health">Salud</option>
                                    <option value="entertainment">Entretenimiento</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </div>    
        );
    }
}

Formulario.propTypes = {
    consultarNoticias: PropTypes.func.isRequired
}

export default Formulario;