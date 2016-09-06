import React, { Component } from 'react';

class Moves extends Component {
  render() {
    var moves = "";
    this.props.data.forEach(function(move) {
      moves += moves ? ", " : "";
      moves += move.move.name;
    });
    return (
      <div>
        <dt>Moves</dt>
        <dd>{moves}</dd>
      </div>
    );
  }
}

export default Moves;