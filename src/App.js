import React from 'react';

import POKEMON_DATA from './data/pokemon.data.js';
import './App.css';

import Item from "./components/item/item.component";
import SearchBox from './components/search-box/search-box.component';

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            pokemon: POKEMON_DATA,
            searchField: ''
        }
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value})
    }

    render() {
        const {pokemon, searchField} = this.state;
        const filteredPokemon = pokemon.filter(pok =>
            pok.name_english.toLowerCase().includes(searchField.toLowerCase()));

        return (
            <div>
                <div className="header">
                    <h1>Pokemon Kentito</h1>
                    <SearchBox placeholder="Search Pokemon"
                               handleChange={this.handleChange}/>
                </div>
                <div className="container">
                    {
                        filteredPokemon.map(pokemon =>
                            <Item key = {pokemon.id} pokemon={pokemon}/>)
                    }
                </div>
            </div>
        )
    }
}

export default App;
