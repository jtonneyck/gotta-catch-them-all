import React, {Component} from 'react';
import './App.css';
import pokemon from "./pokemon.json";
import Pokemon from "./components/Pokemon";
import {Link, Route} from "react-router-dom";

class App extends Component {

  componentDidMount() {
    let audio = new Audio("/themeSong.mp3");
    audio.play();
  }

  render() {
    let pokemonList = pokemon.map((pokemon, index)=> 
      <li>
        <Link key={pokemon._id} to={`/pokemon/${pokemon._id}`}>{pokemon.name}</Link>
      </li>
    )
    return (
        <div className="pokedex-container">

          <div className="pokelist">
            <ul>
              {pokemonList}
            </ul>
          </div>

          <Route path="/pokemon/:pokeId" component={Pokemon} />

        </div>
    );
  }

}

export default App;
