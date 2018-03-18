
import React, { Component } from 'react';
import SafetyItems from './safety-items/safety-items';


class Safety extends Component {

  componentDidMount() {
    this.props.activateButtons();
  }

  render() {


    let classes = this.props.data.classes;

    return (
      <div className="user">
        <h1>I'm Safety</h1>
        <div className="display-container">
          {
            this.props.data.items.map((item, index) => {
              return (
                <SafetyItems
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

export default Safety;

