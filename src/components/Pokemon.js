import pokemon from "../pokemon.json";
import "./Pokemon.css";
import React, { Component } from 'react'
import axios from "axios";

export default class Pokemon extends Component {
    
    state = {
        error: null,
        sprites: null
    }

    componentDidMount() {
        this.getSprites()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.pokeId !== prevProps.match.params.pokeId) {
            this.getSprites()
        }
      }
    
    getSprites = ()=> {
        let {params} = this.props.match;
        let {pokeId} = params;

        let foundPokemon = pokemon.find((poke)=> (
            poke._id === pokeId
        ))

        axios.get(`http://pokeapi.co/api/v2/pokemon/${foundPokemon.name.toLowerCase()}`)
            .then((poke)=> {
                this.setState({
                    sprites: poke.data.sprites,
                    error: null
                })
            })
            .catch((error)=> {
                this.setState({
                    error: error
                })
            })
    }

    render() {
        debugger
        let {params} = this.props.match;
        let {pokeId} = params
    
        let foundPokemon = pokemon.find((poke)=> (
            poke._id === pokeId
        ))
        var sprites;

        if(this.state.sprites) {
            sprites = 
                <div className="sprite-container">
                    <img src={this.state.sprites.front_default} />
                    <img src={this.state.sprites.back_default} />
                </div>    
        }  
        return (
            <div className="pokemon">
                <h1>{foundPokemon.name}</h1>
                <p>{foundPokemon.description}</p>
                {
                    sprites
                }
                {this.state.error &&
                    <h1>{this.state.error.message}</h1>
                }
            </div>
        )
    }
}
