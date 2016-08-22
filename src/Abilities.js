import React, { Component } from 'react';

class Abilities extends Component {
  render() {
    var abilities = "";
    this.props.data.forEach(function(ability) {
      if (abilities) { abilities += ", "}
      abilities += ability.ability.name;
    });
    return (
      <div><strong>Ablities:</strong> {abilities}</div>
    );
  }
}

export default Abilities;