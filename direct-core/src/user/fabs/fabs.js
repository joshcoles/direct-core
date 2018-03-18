import React, { Component } from 'react';
import FabSatellite from './fab-satellite/fab-satellite';

class Fabs extends Component {

  render() {

    let fabClasses = `fab-satellite nav-fab ${this.props.data.fabDrawerIsOpen ? 'open' : ''}`;
    let backgroundClasses = `fabs-wrapper ${this.props.data.fabDrawerIsOpen ? 'open' : ''}`;

    return (
      <div className="fabs">
        <div className={backgroundClasses}></div>
          <div className="main-fab" onClick={this.props.resetCurrentNeed} ></div>
            {
              this.props.data.needs.map((need, index) => {
                return (
                  <FabSatellite 
                    category={need.name}
                    colorClass={fabClasses}
                    key={index}
                    clickHandler={this.props.clickHandler}/>
                );
              })
            }
      </div>
    )
  }
}

export default Fabs;