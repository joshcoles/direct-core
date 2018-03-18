
import React, { Component } from 'react';
import SelfDesireItems from './self-desire-items/self-desire-items';


class SelfDesire extends Component {

  componentDidMount() {
    this.props.activateButtons();
  }

  render() {


    let classes = this.props.data.classes;

    return (
      <div className="user">
        <h1>I'm Self Desire</h1>
        <div className="display-container">
          {
            this.props.data.items.map((item, index) => {
              return (
                <SelfDesireItems
                  category={item}
                  colorClass={classes}
                  key={index}
                />
              )
            })
          }
        </div>

      </div>
    )
  }

}

export default SelfDesire;

