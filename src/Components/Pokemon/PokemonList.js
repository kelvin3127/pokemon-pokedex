import React, { Component } from 'react'
import axios from 'axios';
import PokemonCard from './PokemonCard';

export default class PokemonList extends Component {

    //The State is mostly for UI changes
    state = {
        url: "https://pokeapi.co/api/v2/pokemon/",
        pokemon: null
    }
 
    //Async makes it run into the background
    async componentDidMount() {
        //Await waits for the data to be all loaded before running the next part
        const res = await axios.get(this.state.url);
        //setState will rerun the render function
        this.setState({ pokemon: res.data['results'] }); 
    }

    render() {
        return (
            //Temporary Div
            <React.Fragment>            
            {this.state.pokemon ? 
            //Condition to check state
            (
            //Map takes single array and takes that data
            <div className="row">
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard 
                        key={pokemon.name}
                        name={pokemon.name}
                        url={pokemon.url}
                    />
                ))}
            </div>
            ) 
            : 
            (
                <h1>Loading Pokemon</h1>
            ) }
            </React.Fragment>

        )
    }
}
