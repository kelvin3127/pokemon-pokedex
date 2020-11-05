import React, { Component } from 'react'
import './pokemoncard.css';

export default class PokemonCard extends Component {

    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''
    }

    componentDidMount() {
        const { name, url } = this.props;
        //get the pokemon index
        const pokemonIndex = url.split("/")[url.split('/').length - 2];

        this.setState({ name: name,
                        pokemonIndex: pokemonIndex
        });
    }
    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    <h5 className="card-header">{this.state.pokemonIndex}</h5>
                    <div className="card-body mx-auto">
                        <h6 className="card-title">{this.state.name
                            .toLowerCase()
                            .split(" ")
                            .map(
                                letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                                )
                                .join(' ')}
                        </h6>
                    </div>
                </div>
            </div>
        )
    }
}
