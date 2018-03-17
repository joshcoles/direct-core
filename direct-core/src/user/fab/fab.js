import React, { Component } from 'react';
import FabSatellite from './fab-satellite/fab-satellite';

class Fab extends Component {
  
// constructor(props) {
//   super(props);
//   this.updateUserReport = this.updateUserReport.bind(this);
// }

  updateUserReport = (e) => {
    e.preventDefault();
    // debugger;
    console.log("I'm firing");
  }

  render() {
  
    return (
      <div className="main-fab">
        <FabSatellite category={this.props.data.currentNeed} onClick={this.updateUserReport.bind(this)}/>
        <FabSatellite category="physiology"/>
        <h1></h1>
      </div>
    )
  }
}

export default Fab;