import React, { Component } from 'react';

class Types extends Component {
  render() {
    var types = "";
    this.props.data.forEach(function(type) {
      types += types ? ", " : "";
      types += type.type.name;
    });
    return (
      <div>
        <dt>Types</dt>
        <dd>{types}</dd>
      </div>
    );
  }
}

export default Types;