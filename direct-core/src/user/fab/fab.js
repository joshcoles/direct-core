import React, { Component } from 'react';
import FabSatellite from './fab-satellite/fab-satellite';

class Fab extends Component {
  render() {
    return (
      <div className="main-fab">
        <FabSatellite />
        <FabSatellite />
        <FabSatellite />
        <FabSatellite />
        <FabSatellite />
      </div>
    )
  }
}

export default Fab;