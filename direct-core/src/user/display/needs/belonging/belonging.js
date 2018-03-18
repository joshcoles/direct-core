import React, { Component } from 'react';
import BelongingItems from './belonging-items/belonging-items';


class Belonging extends Component {

  componentDidMount() {
    this.props.activateButtons();
  }

  render() {


    let classes = this.props.data.classes;

    return (
      <div className="user">
        <h1>I'm Belonging</h1>
        <div className="display-container">
          {
            this.props.data.items.map((item, index) => {
              return (
                <BelongingItems
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

export default Belonging;

