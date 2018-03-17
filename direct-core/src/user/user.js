import React, { Component } from 'react';
import Fabs from './fabs/fabs';
import Display from './display/display';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNeed: '',
      needs: ['physiological', 'safety', 'belonging', 'esteem', 'self desire']
    }
  }

  updateUserReport = (e) => {
    e.preventDefault();
    this.setState({
      currentNeed: e.target.id
    });
  }

  resetCurrentNeed = (e) => {
    e.preventDefault();
    this.setState({
      currentNeed: ''
    });
  }

  render() {
    return (
      <div className="user">
        <div className="display-container">
          <Display data={this.state}/>
        </div>
        <div className="fab-container">
          <Fabs 
            data={this.state} 
            clickHandler={this.updateUserReport} 
            resetCurrentNeed={this.resetCurrentNeed}/>
          <h1></h1>
        </div>
      </div>
    )
  }
}

export default User;