import React, { Component } from 'react';

class HeldItems extends Component {
  render() {
    var items = "";
    this.props.data.forEach(function(item) {
      items += items ? ", " : "";
      items += item.item.name;
    });
    return (
      <div>
        <dt>Held items</dt>
        <dd>{items}</dd>
      </div>
    );
  }
}

export default HeldItems;