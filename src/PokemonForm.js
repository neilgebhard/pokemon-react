import React, { Component } from 'react';
import pokelist from './Pokelist.js';
import { toProperCase } from './util';
import './App.css';

class PokemonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }
  handleTextChange(e) {
    this.setState({text: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    var text = this.state.text.trim().toLowerCase().replace(/\s+/g, '-');
    if (!text) {
      return;
    }
    this.props.onPokemonSubmit({text: text});
  }
  render() {
    var optionList = pokelist.map(function(pokemon) {
      return (
        <option value={toProperCase(pokemon.name.replace(/-/g, ' '))} key={pokemon.name} />
      );
    });

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div id="poke-input-grp" className="input-group">
          <input 
            type="text"
            list="poke-search"
            className="form-control input-lg"
            placeholder="Search for a pokemon"
            value={this.state.text}
            onChange={this.handleTextChange.bind(this)} 
            autoFocus />
          <datalist id="poke-search">{optionList}</datalist>
          <span className="input-group-btn">
            <input 
              type="submit"
              value="Search"
              className="btn btn-default btn-lg" />
          </span>
        </div>
      </form>
    );
  }
}

export default PokemonForm;