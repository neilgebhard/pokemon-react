import React, { Component } from 'react';

class Abilities extends Component {
  render() {
    var abilities = "";
    this.props.data.forEach(function(ability) {
      if (abilities) { abilities += ", "}
      abilities += ability.ability.name;
    });
    return (
      <div>
        <dt>Ablities</dt>
        <dd>{abilities}</dd>
      </div>
    );
  }
}

export default Abilities;