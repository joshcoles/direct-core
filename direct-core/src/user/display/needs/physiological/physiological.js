import React, { Component } from 'react';
import PhysiologicalItems from './physiological-items/physiological-items';


class Physiological extends Component {

    render() {
      return (
        <div className="user">
          <h1>I'm Physiological</h1>
          <div className="display-container">
          {
            this.props.data.items.map((item, index) => {
              return (
                <PhysiologicalItems
                  category={item}
                  colorClass="needs-item"
                  key={index}
                />
                
              )
            })
          }
            <PhysiologicalItems 
            
            />
          </div>

        </div>
      )
    }

}

export default Physiological;

