import React from 'react';
import {EventosConsumer} from '../context/EventosContext';
import Evento from './Evento';

const ListaEvents = () => {
    return (
        <div className="uk-child-width-1-3Qn" uk-grid="true">
            <EventosConsumer>
                {(value) => {
                        return value.eventos.map(evento => (
                            <Evento  
                            key= {evento.id}
                            evento={evento}/>
                        ))
                }}
            </EventosConsumer>
        </div>
    );
};

export default ListaEvents;