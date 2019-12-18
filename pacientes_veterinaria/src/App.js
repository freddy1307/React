import React, {Component} from 'react';
import './bootstrap.min.css';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
  state = {
      citas : []
  }
  //cuando la aplicacion carga
  componentDidMount(){
    const citasLS = localStorage.getItem('citas');

    this.setState({
      citas: JSON.parse(citasLS)
    })
  }

  //cuando eliminamos o agregamos una nueva cita
  componentDidUpdate(){
    localStorage.setItem('citas', JSON.stringify(this.state.citas));
  }


  crearNuevaCita = datos => {
    console.log(datos);
    const citas = [...this.state.citas, datos]

    this.setState({
      citas: citas
    })
  }

  eliminarCita = id => {
    //Tomar copia del state
    const citasActuales = [...this.state.citas]

    //utilizar filter para sacar el elemento con el id, recorre un for y va guardando los que son diferente al id recibido
    const citas = citasActuales.filter( cita => cita.id !== id)

    //actualizar state

    this.setState({
      citas
    })
  }

  render() {
    return (
      <div className="container">
        <Header titulo="Administrar pacientes veterinaria"/>
        <div className="row">
            <div className="col-md-10 mx-auto">
              <NuevaCita crearNuevaCita = {this.crearNuevaCita}/>
            </div>

            <div className="mt-5 col-md-10 mx-auto">
              <ListaCitas citas={this.state.citas} eliminarCita={this.eliminarCita}/>
            </div>
        </div>
      </div>
    );
  }
}


export default App;
