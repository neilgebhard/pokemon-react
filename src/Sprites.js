import React, { Component } from 'react';

class Sprites extends Component {
  render() {
    var sprites = this.props.data;
    return (
      <div>
        <img src={sprites.front_default} alt="front_default" />
        <img src={sprites.back_default} alt="back_default" />
      </div>
    );
  }
}

export default Sprites;