import React, { Component } from 'react';
import EsteemItems from './esteem-items/esteem-items';


class Physiological extends Component {

  componentDidMount() {
    this.props.activateButtons();
  }

  render() {


    let classes = this.props.data.classes;

    return (
      <div className="user">
        <h1>I'm Esteem</h1>
        <div className="display-container">
          {
            this.props.data.items.map((item, index) => {
              return (
                <EsteemItems
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

export default Physiological;

