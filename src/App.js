import $ from 'jquery';
import React, { Component } from 'react';
import PokemonForm from './PokemonForm';
import Pokemon from './Pokemon';
import Footer from './Footer';
import LoadingSpinner from './LoadingSpinner';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFetching: false,
      data: {} 
    };
    this.handlePokemonSubmit = this.handlePokemonSubmit.bind(this);
  }
  handlePokemonSubmit(pokemon) {
    this.setState({ isFetching: true });
    var url = `http://pokeapi.co/api/v2/pokemon/${pokemon.text}`;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data) {
        this.setState({
          data: data,
          isFetching: false
        });
      }.bind(this),
      error: function(xhr, status, err) {
        this.setState({ isFetching: false });
        console.error(url, status, err.toString());
      }
    });
  }
  render() {
    var content = <Pokemon className="container" data={this.state.data} />
    if (this.state.isFetching) {
      content = <LoadingSpinner />
    }
    return (
      <div id="content">
        <h1 id="header-text" className="container text-center"><span className="glyphicon glyphicon-search"></span> Pokémon</h1>
        <PokemonForm className="container" onPokemonSubmit={this.handlePokemonSubmit} />
        {content}
        <Footer />
      </div>
    );
  }
}

export default App;
