import React, {Component} from 'react';
import './App.css';
import pokemon from "./pokemon.json";
import Pokemon from "./components/Pokemon";
import Ash from "./components/Ash";
import {Link, Route} from "react-router-dom";

class App extends Component {

  componentDidMount() {
    let audio = new Audio("/themeSong.mp3");
    audio.play();
  }

  render() {
    let pokemonList = pokemon.map((pokemon, index)=> 
      <li key={pokemon._id}>
        <Link  to={`/pokemon/${pokemon._id}`}>{pokemon.name}</Link>
      </li>
    )
    return (
        <div className="pokedex-container">

          <div className="pokelist">
            <ul>
              {pokemonList}
            </ul>
          </div>

          <Route exact path="/" component={Ash} />
          <Route path="/pokemon/:pokeId" component={Pokemon} />

        </div>
    );
  }

}

export default App;
