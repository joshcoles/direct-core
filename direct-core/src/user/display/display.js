import React, { Component } from 'react';

class Report extends Component {
  render() {

    let beginning = false;
    
    if (beginning) {
      return (
        <h1>Welcome!</h1>
      )
    } else {
      return (
        <div className="user-report">
          <div className="report-item">
            <h2>Title 1</h2>
            <p>Description of level (bar?)</p>
          </div>
          <div className="report-item">
            <h2>Title 2</h2>
            <p>Description of level (bar?)</p>
          </div>
          <div className="report-item">
            <h2>Title 3</h2>
            <p>Description of level (bar?)</p>
          </div>
          <div className="report-item">
            <h2>Title 4</h2>
            <p>Description of level (bar?)</p>
          </div>
        </div>
      )
    }
  }
}

export default Report;