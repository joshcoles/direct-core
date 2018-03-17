import React, { Component } from 'react';
import FabSatellite from './fab-satellite/fab-satellite';

class Fabs extends Component {

  render() {

    return (
      <div className="fabs">
        <div className="main-fab" onClick={this.props.resetCurrentNeed}></div>
          {
            this.props.data.needs.map((need, index) => {
              return (
                <FabSatellite 
                  category={need}
                  colorClass="fab-satellite severity-low"
                  key={index}
                  clickHandler={this.props.clickHandler}/>
              )
            })
          }
      </div>
    )
  }
}

export default Fabs;