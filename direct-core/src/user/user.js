import React, { Component } from 'react';
import Fab from './fab/fab';
import Display from './display/display';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentNeed: "Love",
      needs: ['Physiology']
    }
  }


  render() {
    return (
      <div className="user">
        <div className="display-container">
          <Display />
        </div>
        <div className="fab-container">
          <Fab data={this.state} />
          <h1></h1>
        </div>
      </div>
    )
  }
}

export default User;