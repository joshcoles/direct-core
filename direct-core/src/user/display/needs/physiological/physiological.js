import React, { Component } from 'react';
import PhysiologicalItems from './physiological-items/physiological-items';


class Physiological extends Component {
  
  componentDidMount() {
    this.props.activateButtons();
  }
  
  render() {
    
    
      let classes = this.props.data.classes;
    
      return (
        <div className="user">
          <div className={`display-container display-${this.props.data.name}`}>

          {
            this.props.data.items.map((item, index) => {
              return (
                <PhysiologicalItems
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

