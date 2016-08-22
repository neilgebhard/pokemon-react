import $ from 'jquery';
import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import Pokemon from './Pokemon';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: {} };
    this.handlePokemonSubmit = this.handlePokemonSubmit.bind(this);
  }
  handlePokemonSubmit(pokemon) {
    var url = `http://pokeapi.co/api/v2/pokemon/${pokemon.text}`;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(url, status, err.toString());
      }
    });
  }
  render() {
    return (
      <div id="content" className="container">
        <h1 id="header-text" className="text-center"><span className="glyphicon glyphicon-search"></span> Pokémon</h1>
        <PokemonForm onPokemonSubmit={this.handlePokemonSubmit} />
        <Pokemon data={this.state.data} />
      </div>
    );
  }
}

export default App;
