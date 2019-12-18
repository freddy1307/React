import React, { Component } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

const stateInicial = {
    cita: {
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: ''
    },
    error: false
}

class NuevaCita extends Component {
    state ={...stateInicial}
    //asignar valores en state
    handleChange = e => (
        this.setState({
            cita : {
                ...this.state.cita,
                [e.target.name] : e.target.value
            }
        })
    );
    //metodo submit
    handleSubmit = e => {
        e.preventDefault();

        //extraer valores
        const { mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        //validar valores
        if(mascota === '' || propietario === '' || fecha === '' || hora === '' || sintomas === ''){
            this.setState({
                error: true
            })
            //detener ejecuccion
            return;
        }
        //agregar id a los valores
        const nuevaCita = {...this.state.cita}
        nuevaCita.id = uuid()

        //Agregar la cita al component App
        this.props.crearNuevaCita(nuevaCita)
     
        //Limpiar
        this.setState(stateInicial)
    }

    render() {

        const { error } = this.state

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">Llena el formulario para crear una nueva cita</h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5">Todos los campos son obligatorios </div> : null}

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre de mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre de mascota" name="mascota" onChange={this.handleChange} value={this.state.cita.mascota}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre del propietario</label>
                            <div className="col-sm-8 col-lg-10">
                                <input type="text" className="form-control" placeholder="Nombre de propietario" name="propietario"  onChange={this.handleChange} value={this.state.cita.propietario}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="date" className="form-control" name="fecha"  onChange={this.handleChange} value={this.state.cita.fecha}/>
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input type="time" className="form-control" name="hora" onChange={this.handleChange} value={this.state.cita.hora}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea type="text" className="form-control" placeholder="Describe los sintomas" name="sintomas" onChange={this.handleChange} value={this.state.cita.sintomas}/>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar cita" />

                    </form>
                </div>
            </div>
        );
    }
}

NuevaCita.propTypes = {
    crearNuevaCita: PropTypes.func.isRequired,
}

export default NuevaCita;