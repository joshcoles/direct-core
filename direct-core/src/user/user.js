import React, { Component } from 'react';
import Fab from './fab/fab';

class User extends Component {
  render() {
    return (
      <div className="user">
        <div className="data-container"></div>
        <div className="fab-container">
          <Fab />
        </div>
      </div>
    )
  }
}

export default User;