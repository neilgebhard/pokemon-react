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
	    	<div className="pokemon panel panel-default">
			    <Sprites data={pokemon.sprites} />
			    <h1 className="poke-name text-center">{toProperCase(pokemon.name.replace(/-/g, ' '))}</h1>
          <dl className="dl-horizontal">
            <dt>Weight</dt>
            <dd>{pokemon.weight}</dd>
            <dt>Height</dt>
            <dd>{pokemon.height}</dd>
            <dt>Base experience</dt>
            <dd>{pokemon.base_experience}</dd>
            <Types data={pokemon.types} />
            <HeldItems data={pokemon.held_items} />
            <Abilities data={pokemon.abilities} />
            <Moves data={pokemon.moves} />
          </dl>
			  </div>
	    );
  	}
  }
}

export default Pokemon;