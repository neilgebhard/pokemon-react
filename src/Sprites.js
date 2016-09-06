import React, { Component } from 'react';

class Sprites extends Component {
  render() {
    var sprites = this.props.data;
    return (
      <div className="text-center">
        <img src={sprites.front_default} width="96" height="96" alt="front_default" />
        <img src={sprites.back_default} width="96" height="96" alt="back_default" />
      </div>
    );
  }
}

export default Sprites;