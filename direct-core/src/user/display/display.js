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
          data={this.props.data.needs[0]}
          activateButtons={this.props.activateButtons}/>
        )
        break;
      case 'safety':
        return (
          <Safety 
          data={this.props.data.needs[1]}
          activateButtons={this.props.activateButtons}/>
        )
        break;
      case 'belonging':
        return (
          <Belonging 
          data={this.props.data.needs[2]}
          activateButtons={this.props.activateButtons}/>
        )
        break;
      case 'esteem':
        return (
          <Esteem 
          data={this.props.data.needs[3]}
          activateButtons={this.props.activateButtons}/>
        )
        break;
      case 'self desire':
        return (
          <SelfDesire 
          data={this.props.data.needs[4]}
          activateButtons={this.props.activateButtons}/>
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