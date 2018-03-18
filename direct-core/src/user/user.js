import React, { Component } from 'react';
import Fabs from './fabs/fabs';
import Display from './display/display';

class User extends Component {

  constructor(props) {
    super(props);


    this.state = {
      currentNeed: '',
      fabDrawerIsOpen: false,
      needs: [
      {
        name: 'physiological',
        items: ["Air", "Water", "Food", "Sleep", "Reproduction"],
        classes: 'needs-item'
      },
      {
        name: 'safety',
        items: ["Friendship", "Intimacy", "Family", "Connection"],
        classes: 'needs-item'
      },
      {
        name: 'belonging',
        items: ["Friendship", "Intimacy", "Family", "Connection"],
        classes: 'needs-item'
      },
      {
        name: 'esteem',
        items: ["Friendship", "Intimacy", "Family", "Connection"],
        classes: 'needs-item'
      },
      {
        name: 'self desire',
        items: ["Friendship", "Intimacy", "Family", "Connection"],
        classes: 'needs-item'
      }
      ]
    }
  }

  
  resetCurrentNeed = (e) => {
    e.preventDefault();

    let fabDrawerStatus = !this.state.fabDrawerIsOpen;
    
    this.setState({
      currentNeed: '',
      fabDrawerIsOpen: fabDrawerStatus,
      needs: [
        {
          name: 'physiological',
          items: ["Air", "Water", "Food", "Sleep", "Reproduction"],
          classes: 'needs-item'
        },
        {
          name: 'safety',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'belonging',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'esteem',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'self desire',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        }
      ]
    });
  }

  activateButtons = () => {
    setTimeout(() => {
      this.setState({
        needs: [
          {
            name: 'physiological',
            items: ["Air", "Water", "Food", "Sleep", "Reproduction"],
            classes: 'needs-item active'
          },
          {
            name: 'safety',
            items: ["Friendship", "Intimacy", "Family", "Connection"],
            classes: 'needs-item active'
          },
          {
            name: 'belonging',
            items: ["Friendship", "Intimacy", "Family", "Connection"],
            classes: 'needs-item active'
          },
          {
            name: 'esteem',
            items: ["Friendship", "Intimacy", "Family", "Connection"],
            classes: 'needs-item active'
          },
          {
            name: 'self desire',
            items: ["Friendship", "Intimacy", "Family", "Connection"],
            classes: 'needs-item active'
          }
        ]
      })
    }, 100);
  }

  updateUserReport = (e) => {
    e.preventDefault();
    this.setState({
      currentNeed: e.target.id,
      needs: [
        {
          name: 'physiological',
          items: ["Air", "Water", "Food", "Sleep", "Reproduction"],
          classes: 'needs-item'
        },
        {
          name: 'safety',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'belonging',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'esteem',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        },
        {
          name: 'self desire',
          items: ["Friendship", "Intimacy", "Family", "Connection"],
          classes: 'needs-item'
        }
      ]
    });
  }




  render() {
    return (
      <div className="user">
        <div className="display-container">
          <Display 
          data={this.state}
          activateButtons={this.activateButtons.bind(this)}/>
        </div>
        <div className="fabs-container">
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