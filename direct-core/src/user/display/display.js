import React, { Component } from 'react';
import Physiological from './needs/physiological/physiological';
import Belonging from './needs/belonging/belonging';
import Safety from './needs/safety/safety';
import Esteem from './needs/esteem/esteem';
import SelfDesire from './needs/self-desire/self-desire';

class Report extends Component {

  render() {
    let currentNeed = this.props.data.currentNeed;

    switch (currentNeed) {
      case 'physiological':
        return (
          <Physiological 
          data={this.props.data.needs[0]}/>
        )
        break;
      case 'safety':
        return (
          <Safety />
        )
        break;
      case 'belonging':
        return (
          <Belonging />
        )
        break;
      case 'esteem':
        return (
          <Esteem />
        )
        break;
      case 'self desire':
        return (
          <SelfDesire />
        )
        break;
      default: 
        return (
          <h1>Welcome!</h1>
        )
    }
  }
}

export default Report;