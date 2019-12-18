import React, { Component } from 'react';
import axios from 'axios';

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;


class EventosProvider extends Component {
    token = 'OJVZIA3LUSHF4FTXVT3M';
    state= {
        eventos: []
    }
    obtenerEventos = async (busqueda) => {
        let url_events = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&categories=${busqueda.categoria}&sort_by=date&token=${this.token}&locale=es_ES`
        console.log(url_events)
        const eventos = await axios(url_events);
        this.setState({
            eventos: eventos.data.events
        })
    }

    render() {
        return (
            <EventosContext.Provider
                value={{
                    eventos: this.state.eventos,
                    obtenerEventos: this.obtenerEventos
                }}
            >{this.props.children}
                
            </EventosContext.Provider>
        );
    }
}



export default EventosProvider;