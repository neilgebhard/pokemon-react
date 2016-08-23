import React, { Component } from 'react';
import { toProperCase } from './util';
import Abilities from './Abilities';
import Sprites from './Sprites';
import Moves from './Moves';
import HeldItems from './HeldItems';
import Types from './Types';
import './App.css';

class Pokemon extends Component {
	constructor(props) {
    super(props);
    this.state = {
    	data: { 
    		front_default: "" 
    	}
    };
  }
  render() {
  	if (Object.keys(this.props.data).length === 0 && this.props.data.constructor === Object) {
  		return (
  			<div></div>
  		);
  	} else {
  		var pokemon = this.props.data;
	    return (
	    	<div id="pokemon" className="text-center">
			    <Sprites data={pokemon.sprites} />
			    <h1 id="poke-name">{toProperCase(pokemon.name.replace(/-/g, ' '))}</h1>
			    <div><strong>Weight:</strong> {pokemon.weight}</div>
          <div><strong>Height</strong> {pokemon.height}</div>
          <div><strong>Base experience:</strong> {pokemon.base_experience}</div>
          <Types data={pokemon.types} />
          <HeldItems data={pokemon.held_items} />
          <Abilities data={pokemon.abilities} />
          <Moves data={pokemon.moves} />
			  </div>
	    );
  	}
  }
}

export default Pokemon;