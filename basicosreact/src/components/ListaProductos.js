import React, { Component, Fragment } from 'react';
import Producto from './Producto';

class ListaProducto extends Component {
    state = {
       productos: [ { id: 1, name: 'Camisa ReactJs', precio: 90},
        { id: 2, name: 'Camisa VueJs', precio: 80},
        { id: 3, name: 'Camisa AngularJs', precio: 60},
        { id: 4, name: 'Camisa Python', precio: 130},
        ]
    }
    componentDidMount() {
        console.log(1);
    }
    componentWillMount(){
        console.log(2);
    }
    componentWillUpdate(){
        console.log(3);
    }
    componentWillUnmount(){
        console.log(4);
    }

    render() {
        console.log(5);
        //const prod = this.state.productos;
        const {productos} = this.state; //Con destructory

        return (
            <Fragment>
            <h1>Lista de Productos</h1>
            {productos.map(producto => (
                <Producto 
                    key= {producto.id}
                    producto = {producto}
                />
            ))}
            </Fragment>
        );
    }
}

export default ListaProducto;