import React, { Component } from 'react';
import axios from 'axios';


const CategoriasContext = React.createContext();

export const CategoriasConsumer = CategoriasContext.Consumer;


class CategoriasProvider extends Component {

    token = 'OJVZIA3LUSHF4FTXVT3M';
    state = {
        categories : []
    }

    componentDidMount(){
        this.getCategory();
    }
    getCategory = async () => {
        let url= `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;

        let categoriesR = await axios.get(url );
        console.log(categoriesR);
        this.setState({
            categories: categoriesR.data.categories
        })
    }

    render() {
        return (
            <CategoriasContext.Provider
                value={{
                    categories: this.state.categories
                }}
            >{this.props.children}
            </CategoriasContext.Provider>
        );
    }
}

export default CategoriasProvider;